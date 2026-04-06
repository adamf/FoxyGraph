/**
 * Wikipedia Browsing History Visualizer
 * Client-side JavaScript application for visualizing Wikipedia browsing patterns
 * from Chrome and Firefox browser history files.
 */

// Configuration constants
const CONFIG = {
    // Threshold for showing labels on nodes (percentage of max visits)
    LABEL_VISIBILITY_THRESHOLD: 0.3,
    // Maximum number of nodes for a "small graph" where all labels are shown
    SMALL_GRAPH_NODE_LIMIT: 50,
    // Minimum visit count for color/size scaling
    MIN_VISITS_FOR_SCALING: 1
};

// Global state
let simulation = null;
let svg = null;
let db = null;
let currentZoom = null;

// DOM Elements
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const uploadSection = document.getElementById('upload-section');
const loadingSection = document.getElementById('loading');
const visualizationSection = document.getElementById('visualization-section');
const graphContainer = document.getElementById('graph-container');
const tooltip = document.getElementById('tooltip');
const nodeCountEl = document.getElementById('node-count');
const linkCountEl = document.getElementById('link-count');
const resetBtn = document.getElementById('reset-btn');
const backBtn = document.getElementById('back-btn');

// Wikipedia URL patterns for different languages
const WIKIPEDIA_PATTERNS = [
    /https?:\/\/([a-z]{2,3})\.wikipedia\.org\/wiki\/(.+)/i,
    /https?:\/\/([a-z]{2,3})\.m\.wikipedia\.org\/wiki\/(.+)/i
];

// Initialize the application
async function init() {
    setupEventListeners();
}

function setupEventListeners() {
    // Drag and drop
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('drop', handleDrop);
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);
    
    // Controls
    resetBtn.addEventListener('click', resetView);
    backBtn.addEventListener('click', goBack);
}

function handleDragOver(e) {
    e.preventDefault();
    dropZone.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        processFile(files[0]);
    }
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        processFile(files[0]);
    }
}

async function processFile(file) {
    showLoading();
    
    try {
        // Initialize SQL.js
        const SQL = await initSqlJs({
            locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`
        });
        
        // Read the file
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        
        // Open the database
        db = new SQL.Database(uint8Array);
        
        // Detect browser type and extract data
        const browserType = detectBrowserType(db);
        console.log(`Detected browser: ${browserType}`);
        
        let graphData;
        if (browserType === 'chrome') {
            graphData = extractChromeHistory(db);
        } else if (browserType === 'firefox') {
            graphData = extractFirefoxHistory(db);
        } else {
            throw new Error('Unrecognized history database format');
        }
        
        if (graphData.nodes.length === 0) {
            throw new Error('No Wikipedia browsing history found in this file');
        }
        
        showVisualization(graphData);
    } catch (error) {
        console.error('Error processing file:', error);
        alert(`Error: ${error.message}\n\nMake sure you've selected a valid Chrome History or Firefox places.sqlite file.`);
        showUpload();
    }
}

function detectBrowserType(database) {
    try {
        // Check for Chrome's table structure
        const chromeCheck = database.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='urls'");
        if (chromeCheck.length > 0 && chromeCheck[0].values.length > 0) {
            // Verify it has the visits table too (Chrome)
            const visitsCheck = database.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='visits'");
            if (visitsCheck.length > 0 && visitsCheck[0].values.length > 0) {
                return 'chrome';
            }
        }
    } catch (e) {
        console.log('Not Chrome format:', e);
    }
    
    try {
        // Check for Firefox's table structure
        const firefoxCheck = database.exec("SELECT name FROM sqlite_master WHERE type='table' AND name='moz_places'");
        if (firefoxCheck.length > 0 && firefoxCheck[0].values.length > 0) {
            return 'firefox';
        }
    } catch (e) {
        console.log('Not Firefox format:', e);
    }
    
    return 'unknown';
}

function extractChromeHistory(database) {
    // Chrome stores browsing history in 'urls' and 'visits' tables
    // The 'visits' table has 'from_visit' which links to the referring page
    
    const query = `
        SELECT 
            u.id,
            u.url,
            u.title,
            v.id as visit_id,
            v.from_visit,
            v.visit_time
        FROM urls u
        JOIN visits v ON u.id = v.url
        WHERE u.url LIKE '%wikipedia.org/wiki/%'
        ORDER BY v.visit_time ASC
    `;
    
    const results = database.exec(query);
    if (results.length === 0) return { nodes: [], links: [] };
    
    const visits = results[0].values.map(row => ({
        urlId: row[0],
        url: row[1],
        title: row[2],
        visitId: row[3],
        fromVisit: row[4],
        visitTime: row[5]
    }));
    
    // Build a map of visit_id to url_id for reference resolution
    const visitToUrl = new Map();
    const allVisitsQuery = `
        SELECT v.id as visit_id, u.url
        FROM visits v
        JOIN urls u ON v.url = u.id
    `;
    const allVisitsResults = database.exec(allVisitsQuery);
    if (allVisitsResults.length > 0) {
        allVisitsResults[0].values.forEach(row => {
            visitToUrl.set(row[0], row[1]);
        });
    }
    
    return buildGraph(visits, visitToUrl);
}

function extractFirefoxHistory(database) {
    // Firefox stores browsing history in 'moz_places' and 'moz_historyvisits' tables
    
    const query = `
        SELECT 
            p.id,
            p.url,
            p.title,
            v.id as visit_id,
            v.from_visit,
            v.visit_date
        FROM moz_places p
        JOIN moz_historyvisits v ON p.id = v.place_id
        WHERE p.url LIKE '%wikipedia.org/wiki/%'
        ORDER BY v.visit_date ASC
    `;
    
    const results = database.exec(query);
    if (results.length === 0) return { nodes: [], links: [] };
    
    const visits = results[0].values.map(row => ({
        urlId: row[0],
        url: row[1],
        title: row[2],
        visitId: row[3],
        fromVisit: row[4],
        visitTime: row[5]
    }));
    
    // Build a map of visit_id to url for reference resolution
    const visitToUrl = new Map();
    const allVisitsQuery = `
        SELECT v.id as visit_id, p.url
        FROM moz_historyvisits v
        JOIN moz_places p ON v.place_id = p.id
    `;
    const allVisitsResults = database.exec(allVisitsQuery);
    if (allVisitsResults.length > 0) {
        allVisitsResults[0].values.forEach(row => {
            visitToUrl.set(row[0], row[1]);
        });
    }
    
    return buildGraph(visits, visitToUrl);
}

function buildGraph(visits, visitToUrl) {
    const nodesMap = new Map();
    const linksSet = new Set();
    const linkCounts = new Map();
    
    visits.forEach(visit => {
        const pageName = extractPageName(visit.url);
        if (!pageName) return;
        
        const nodeId = visit.url;
        
        // Add node if not exists
        if (!nodesMap.has(nodeId)) {
            nodesMap.set(nodeId, {
                id: nodeId,
                name: pageName,
                title: visit.title || pageName,
                url: visit.url,
                visits: 0
            });
        }
        nodesMap.get(nodeId).visits++;
        
        // Add link from referring page if it was also a Wikipedia page
        if (visit.fromVisit && visitToUrl.has(visit.fromVisit)) {
            const fromUrl = visitToUrl.get(visit.fromVisit);
            const fromPageName = extractPageName(fromUrl);
            
            if (fromPageName && fromUrl !== visit.url) {
                // Ensure source node exists
                if (!nodesMap.has(fromUrl)) {
                    nodesMap.set(fromUrl, {
                        id: fromUrl,
                        name: fromPageName,
                        title: fromPageName,
                        url: fromUrl,
                        visits: 0
                    });
                }
                
                const linkKey = `${fromUrl}|${visit.url}`;
                if (!linksSet.has(linkKey)) {
                    linksSet.add(linkKey);
                    linkCounts.set(linkKey, 1);
                } else {
                    linkCounts.set(linkKey, linkCounts.get(linkKey) + 1);
                }
            }
        }
    });
    
    const nodes = Array.from(nodesMap.values());
    const links = Array.from(linksSet).map(key => {
        const [source, target] = key.split('|');
        return {
            source,
            target,
            value: linkCounts.get(key)
        };
    });
    
    return { nodes, links };
}

function extractPageName(url) {
    for (const pattern of WIKIPEDIA_PATTERNS) {
        const match = url.match(pattern);
        if (match) {
            let name = match[2];
            // Remove URL parameters
            name = name.split('?')[0];
            name = name.split('#')[0];
            // Decode URI components and replace underscores
            try {
                name = decodeURIComponent(name).replace(/_/g, ' ');
            } catch (e) {
                name = name.replace(/_/g, ' ');
            }
            return name;
        }
    }
    return null;
}

function showLoading() {
    uploadSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');
    visualizationSection.classList.add('hidden');
}

function showUpload() {
    uploadSection.classList.remove('hidden');
    loadingSection.classList.add('hidden');
    visualizationSection.classList.add('hidden');
    fileInput.value = '';
}

function showVisualization(graphData) {
    uploadSection.classList.add('hidden');
    loadingSection.classList.add('hidden');
    visualizationSection.classList.remove('hidden');
    
    // Update stats
    nodeCountEl.textContent = `${graphData.nodes.length} pages`;
    linkCountEl.textContent = `${graphData.links.length} connections`;
    
    // Clear previous graph
    graphContainer.innerHTML = '';
    
    // Create the visualization
    createForceGraph(graphData);
}

function createForceGraph(graphData) {
    const container = graphContainer;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Color scale based on visit count
    // Ensure minimum scaling value to handle edge case of zero visits
    const maxVisits = Math.max(...graphData.nodes.map(n => n.visits), CONFIG.MIN_VISITS_FOR_SCALING);
    const colorScale = d3.scaleSequential(d3.interpolateOranges)
        .domain([0, maxVisits]);
    
    // Size scale based on visits
    const sizeScale = d3.scaleSqrt()
        .domain([CONFIG.MIN_VISITS_FOR_SCALING, maxVisits])
        .range([4, 20]);
    
    // Create SVG
    svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    // Create container group for zoom
    const g = svg.append('g');
    
    // Add zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.1, 10])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });
    
    svg.call(zoom);
    
    // Create force simulation
    simulation = d3.forceSimulation(graphData.nodes)
        .force('link', d3.forceLink(graphData.links)
            .id(d => d.id)
            .distance(80))
        .force('charge', d3.forceManyBody()
            .strength(-200))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => sizeScale(d.visits) + 5));
    
    // Create links
    const link = g.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(graphData.links)
        .enter()
        .append('line')
        .attr('class', 'link')
        .attr('stroke-width', d => Math.sqrt(d.value));
    
    // Create nodes
    const node = g.append('g')
        .attr('class', 'nodes')
        .selectAll('.node')
        .data(graphData.nodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));
    
    // Add circles to nodes
    node.append('circle')
        .attr('r', d => sizeScale(d.visits))
        .attr('fill', d => colorScale(d.visits))
        .on('mouseover', showTooltip)
        .on('mousemove', moveTooltip)
        .on('mouseout', hideTooltip)
        .on('click', (event, d) => {
            window.open(d.url, '_blank');
        });
    
    // Add labels to larger nodes (based on visit threshold or small graph size)
    const shouldShowLabel = (d) => {
        const meetsVisitThreshold = d.visits >= maxVisits * CONFIG.LABEL_VISIBILITY_THRESHOLD;
        const isSmallGraph = graphData.nodes.length < CONFIG.SMALL_GRAPH_NODE_LIMIT;
        return meetsVisitThreshold || isSmallGraph;
    };
    
    node.filter(shouldShowLabel)
        .append('text')
        .attr('dy', d => sizeScale(d.visits) + 12)
        .text(d => truncate(d.name, 20));
    
    // Update positions on tick
    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
        
        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
    
    // Store zoom for reset
    currentZoom = zoom;
    
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }
    
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}

function showTooltip(event, d) {
    tooltip.classList.remove('hidden');
    tooltip.innerHTML = `
        <h4>${d.title || d.name}</h4>
        <p>Visits: ${d.visits}</p>
        <p style="font-size: 0.8rem; color: #64748b;">Click to open in Wikipedia</p>
    `;
}

function moveTooltip(event) {
    const padding = 15;
    const tooltipRect = tooltip.getBoundingClientRect();
    let x = event.clientX + padding;
    let y = event.clientY + padding;
    
    // Keep tooltip within viewport
    if (x + tooltipRect.width > window.innerWidth) {
        x = event.clientX - tooltipRect.width - padding;
    }
    if (y + tooltipRect.height > window.innerHeight) {
        y = event.clientY - tooltipRect.height - padding;
    }
    
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function hideTooltip() {
    tooltip.classList.add('hidden');
}

function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength - 3) + '...';
}

function resetView() {
    if (svg && currentZoom) {
        // Reset to initial view (identity transform)
        svg.transition()
            .duration(750)
            .call(currentZoom.transform, d3.zoomIdentity);
    }
}

function goBack() {
    if (simulation) {
        simulation.stop();
    }
    if (db) {
        db.close();
        db = null;
    }
    currentZoom = null;
    showUpload();
}

// Handle window resize
window.addEventListener('resize', () => {
    if (!visualizationSection.classList.contains('hidden') && svg) {
        const width = graphContainer.clientWidth;
        const height = graphContainer.clientHeight;
        svg.attr('width', width).attr('height', height);
        if (simulation) {
            simulation.force('center', d3.forceCenter(width / 2, height / 2));
            simulation.alpha(0.3).restart();
        }
    }
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

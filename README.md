# 🦊 FoxyGraph - Wikipedia Browsing History Visualizer

Visualize your Wikipedia browsing patterns with an interactive force-directed graph. See how your curiosity leads you from topic to topic!

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **100% Client-Side**: All processing happens in your browser. Your history data never leaves your computer.
- **Multi-Browser Support**: Works with both Chrome and Firefox history files.
- **Interactive Visualization**: Zoom, pan, and drag nodes to explore your browsing patterns.
- **Modern Technology Stack**: Built with D3.js v7 for fast, smooth visualizations.
- **No Installation Required**: Just open the HTML file in any modern browser.

## 🚀 Quick Start

### Option 1: Use Online (Recommended)

Visit **[https://adamf.github.io/FoxyGraph/](https://adamf.github.io/FoxyGraph/)** to use the app directly in your browser.

### Option 2: Run Locally

```bash
# Clone the repository
git clone https://github.com/adamf/FoxyGraph.git

# Open in browser
open FoxyGraph/modern/index.html
# or on Linux
xdg-open FoxyGraph/modern/index.html
```

## 📁 How to Export Your Browser History

### Chrome

1. **Close Chrome completely** (important to release the file lock)
2. Navigate to your Chrome profile folder:
   - **Windows**: `%LOCALAPPDATA%\Google\Chrome\User Data\Default\History`
   - **macOS**: `~/Library/Application Support/Google/Chrome/Default/History`
   - **Linux**: `~/.config/google-chrome/Default/History`
3. Copy the `History` file to an accessible location (e.g., your Downloads folder)
4. Drag the file onto the FoxyGraph page

### Firefox

1. **Close Firefox completely** (important to release the file lock)
2. Navigate to your Firefox profile folder:
   - **Windows**: `%APPDATA%\Mozilla\Firefox\Profiles\[profile]\places.sqlite`
   - **macOS**: `~/Library/Application Support/Firefox/Profiles/[profile]/places.sqlite`
   - **Linux**: `~/.mozilla/firefox/[profile]/places.sqlite`
3. Copy the `places.sqlite` file to an accessible location
4. Drag the file onto the FoxyGraph page

**Tip**: Replace `[profile]` with your actual profile folder name (looks like `xxxxxxxx.default` or `xxxxxxxx.default-release`).

## 🛠️ Technology Stack

- **[D3.js v7](https://d3js.org/)** - Fast, powerful data visualization library
- **[sql.js v1.10](https://sql.js.org/)** - SQLite compiled to WebAssembly for client-side database reading
- **Vanilla JavaScript** - No frameworks, no build steps required

## 🔒 Privacy

**Your data stays on your computer.** 

- The application runs entirely in your browser
- No data is sent to any server
- History files are processed locally using WebAssembly
- No tracking, no analytics, no cookies

## 📊 Understanding the Visualization

- **Node Size**: Larger nodes represent pages you visited more frequently
- **Node Color**: Warmer colors (orange/red) indicate more visits
- **Connections**: Lines show your browsing path from one Wikipedia article to another
- **Click**: Click any node to open that Wikipedia article in a new tab
- **Drag**: Drag nodes to rearrange the graph
- **Zoom**: Use scroll wheel or pinch to zoom in/out
- **Pan**: Click and drag the background to pan

## 🗂️ Project Structure

```
FoxyGraph/
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Pages deployment workflow
├── modern/                 # Modern client-side application
│   ├── index.html         # Main HTML file - open this in your browser
│   ├── app.js             # Application JavaScript
│   └── styles.css         # Styling
├── example/               # Legacy example with sample data (JIT library)
├── foxygraph.py          # Legacy Python script (old Firefox only)
├── README.md             # This file
└── LICENSE               # MIT License
```

## 🚢 Deployment

This application can be deployed to GitHub Pages with zero configuration:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions"

2. **Push to main branch** - The included workflow (`.github/workflows/deploy.yml`) will automatically deploy to GitHub Pages

3. **Access your app** at `https://<username>.github.io/FoxyGraph/`

### Other Deployment Options

Since the app is 100% static files, you can also deploy to:
- **Netlify**: Drag and drop the `modern/` folder
- **Vercel**: Connect your repo and set the root directory to `modern/`
- **Any static hosting**: Just upload the contents of the `modern/` folder

## 🔄 Migration from Legacy Version

The original `foxygraph.py` script worked only with very old Firefox versions and required Python. The new `modern/` version:

- ✅ Works with modern Chrome (v80+)
- ✅ Works with modern Firefox (v80+)  
- ✅ Runs entirely in the browser (no Python required)
- ✅ Uses modern visualization library (D3.js instead of JIT)
- ✅ Supports drag-and-drop file upload
- ✅ Responsive design for all screen sizes

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original concept by [adamf](https://github.com/adamf)
- Inspired by the idea of visualizing the "Wikipedia rabbit hole"
- Built with amazing open-source tools: D3.js, sql.js

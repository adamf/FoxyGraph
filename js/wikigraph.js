// this is all the hacked up Hypertree/example2.js from http://thejit.org

var Log = {
    elem: false,
    write: function(text){
        if (!this.elem) 
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};

function addEvent(obj, type, fn) {
    if (obj.addEventListener) obj.addEventListener(type, fn, false);
    else obj.attachEvent('on' + type, fn);
};


function init(){
    //init data
    //By defining properties with the dollar sign ($)
    //in nodes and edges we can override the global configuration
    //properties for nodes and edges.
    //In this case we use "$type" and "$dim" properties to override
    //the type of the node to be plotted and its dimension.


var json = [
{
		"id": "59686", 
		"name": "weird+al", 
		"adjacencies": [  "59687" ]
	}
	, {
		"id": "73489", 
		"name": "mucinex", 
		"adjacencies": [  "73490" ]
	}
	, {
		"id": "114747", 
		"name": "iron+chef", 
		"adjacencies": [  "114748" ]
	}
	, {
		"id": "121183", 
		"name": "DJ+AM", 
		"adjacencies": [  "121184" ]
	}
	, {
		"id": "122057", 
		"name": "elvis+presely", 
		"adjacencies": [  "122058" ]
	}
	, {
		"id": "122103", 
		"name": "autoharp", 
		"adjacencies": [  "122104" ]
	}
	, {
		"id": "122158", 
		"name": "shaped+notes", 
		"adjacencies": [  "122159" ]
	}
	, {
		"id": "122165", 
		"name": "mother+maybelle", 
		"adjacencies": [  "122166" ]
	}
	, {
		"id": "122569", 
		"name": "serial+killer", 
		"adjacencies": [  "122570" ]
	}
	, {
		"id": "123133", 
		"name": "malta", 
		"adjacencies": [  "123134" ]
	}
	, {
		"id": "123629", 
		"name": "GSLB", 
		"adjacencies": [  "123630" ]
	}
	, {
		"id": "123781", 
		"name": "jailhouse+rock", 
		"adjacencies": [  "123782" ]
	}
	, {
		"id": "123785", 
		"name": "wake+up+little+susie", 
		"adjacencies": [  "123786" ]
	}
	, {
		"id": "123788", 
		"name": "johnny+b+goode", 
		"adjacencies": [  "123789" ]
	}
	, {
		"id": "123793", 
		"name": "nowhere+to+run", 
		"adjacencies": [  "123794" ]
	}
	, {
		"id": "123803", 
		"name": "black+water", 
		"adjacencies": [  "123804" ]
	}
	, {
		"id": "123812", 
		"name": "doobie+brothers", 
		"adjacencies": [  "123813" ]
	}
	, {
		"id": "123824", 
		"name": "otis+redding", 
		"adjacencies": [  "123825" ]
	}
	, {
		"id": "125373", 
		"name": "slash", 
		"adjacencies": [  "125374" ]
	}
	, {
		"id": "125602", 
		"name": "lulu+walls", 
		"adjacencies": [  "125603" ]
	}
	, {
		"id": "126685", 
		"name": "Matt_Zimmerman_(technologist)", 
		"adjacencies": [  "126686" ]
	}
	, {
		"id": "127689", 
		"name": "Operation_Looking_Glass", 
		"adjacencies": [  "127694" ]
	}
	, {
		"id": "127753", 
		"name": "philip+glas", 
		"adjacencies": [  "127754" ]
	}
	, {
		"id": "128349", 
		"name": "louie%2C+louie", 
		"adjacencies": [  "128350" ]
	}
	, {
		"id": "129511", 
		"name": "printf", 
		"adjacencies": [  "129512" ]
	}
	, {
		"id": "130849", 
		"name": "telephone+switch", 
		"adjacencies": [  "130850" ]
	}
	, {
		"id": "130856", 
		"name": "5ESS_switch", 
		"adjacencies": [  "130859" ,  "130860" ,  "131538" ,  "131539" ,  "131540" ,  "131541" ,  "131542" ]
	}
	, {
		"id": "131550", 
		"name": "baby+jessica", 
		"adjacencies": [  "131551" ]
	}
	, {
		"id": "132150", 
		"name": "Adolf_Eichmann", 
		"adjacencies": [  "132166" ]
	}
	, {
		"id": "132316", 
		"name": "vmware", 
		"adjacencies": [  "132317" ]
	}
	, {
		"id": "132888", 
		"name": "bespoke", 
		"adjacencies": [  "132889" ]
	}
	, {
		"id": "134542", 
		"name": "isacc+hayes", 
		"adjacencies": [  "134543" ]
	}
	, {
		"id": "134548", 
		"name": "curtis+mayfield", 
		"adjacencies": [  "134549" ]
	}
	, {
		"id": "134558", 
		"name": "sly+and+the+family+stone", 
		"adjacencies": [  "134559" ]
	}
	, {
		"id": "134561", 
		"name": "gil+scott-heron", 
		"adjacencies": [  "134562" ]
	}
	, {
		"id": "134564", 
		"name": "the+jackson+sisters", 
		"adjacencies": [  "134565" ]
	}
	, {
		"id": "134598", 
		"name": "joan+baez", 
		"adjacencies": [  "134599" ]
	}
	, {
		"id": "135526", 
		"name": "sex+rehab", 
		"adjacencies": [  "135527" ]
	}
	, {
		"id": "135743", 
		"name": "william%27s+syndrome", 
		"adjacencies": [  "135744" ]
	}
	, {
		"id": "135811", 
		"name": "sabre", 
		"adjacencies": [  "135812" ]
	}
	, {
		"id": "136035", 
		"name": "+Alison+Sweeney", 
		"adjacencies": [  "136036" ]
	}
	, {
		"id": "136150", 
		"name": "boston", 
		"adjacencies": [  "136151" ,  "136151" ]
	}
	, {
		"id": "136150", 
		"name": "boston", 
		"adjacencies": [  "136151" ,  "136151" ]
	}
	, {
		"id": "136842", 
		"name": "cogent", 
		"adjacencies": [  "136843" ]
	}
	, {
		"id": "137619", 
		"name": "ice+t", 
		"adjacencies": [  "137620" ]
	}
	, {
		"id": "137943", 
		"name": "beastie+boys", 
		"adjacencies": [  "137944" ]
	}
	, {
		"id": "138208", 
		"name": "best+selling+artists", 
		"adjacencies": [  "138209" ]
	}
	, {
		"id": "138227", 
		"name": "bad+company", 
		"adjacencies": [  "138228" ]
	}
	, {
		"id": "138231", 
		"name": "supergroup", 
		"adjacencies": [  "138232" ]
	}
	, {
		"id": "138393", 
		"name": "apollo+13", 
		"adjacencies": [  "138394" ]
	}
	, {
		"id": "138488", 
		"name": "doughty", 
		"adjacencies": [  "138489" ]
	}
	, {
		"id": "138565", 
		"name": "hawaii", 
		"adjacencies": [  "138566" ]
	}
	, {
		"id": "138945", 
		"name": "kiss", 
		"adjacencies": [  "138946" ]
	}
	, {
		"id": "139093", 
		"name": "journey", 
		"adjacencies": [  "139094" ]
	}
	, {
		"id": "139098", 
		"name": "kansas", 
		"adjacencies": [  "139099" ]
	}
	, {
		"id": "139116", 
		"name": "REO+Speedwagon", 
		"adjacencies": [  "139117" ]
	}
	, {
		"id": "139119", 
		"name": "take+the+long+way+home", 
		"adjacencies": [  "139120" ]
	}
	, {
		"id": "139123", 
		"name": "boston+%28band%29", 
		"adjacencies": [  "136153" ]
	}
	, {
		"id": "139126", 
		"name": "KISS+%28band%29", 
		"adjacencies": [  "139127" ]
	}
	, {
		"id": "139129", 
		"name": "queen", 
		"adjacencies": [  "139130" ]
	}
	, {
		"id": "139176", 
		"name": "Foreigner", 
		"adjacencies": [  "138248" ]
	}
	, {
		"id": "139652", 
		"name": "the+bangles", 
		"adjacencies": [  "139653" ]
	}
	, {
		"id": "140392", 
		"name": "donut", 
		"adjacencies": [  "140393" ]
	}
	, {
		"id": "140600", 
		"name": "radix+sort", 
		"adjacencies": [  "140601" ]
	}
	, {
		"id": "141270", 
		"name": "waas", 
		"adjacencies": [  "141271" ]
	}
	, {
		"id": "141336", 
		"name": "Jamie_Zawinski", 
		"adjacencies": [  "141342" ]
	}
	, {
		"id": "141555", 
		"name": "orb+weaver", 
		"adjacencies": [  "141556" ]
	}
	, {
		"id": "141560", 
		"name": "ZM-87", 
		"adjacencies": [  "141562" ,  "141563" ]
	}
	, {
		"id": "142003", 
		"name": "davy+crockett", 
		"adjacencies": [  "142004" ]
	}
	, {
		"id": "142158", 
		"name": "large+hadron+collider", 
		"adjacencies": [  "142159" ]
	}
	, {
		"id": "142245", 
		"name": "disco", 
		"adjacencies": [  "142246" ,  "142246" ]
	}
	, {
		"id": "142245", 
		"name": "disco", 
		"adjacencies": [  "142246" ,  "142246" ]
	}
	, {
		"id": "142296", 
		"name": "kc+and+the+sunshine+band", 
		"adjacencies": [  "142297" ]
	}
	, {
		"id": "142315", 
		"name": "benradette+peters", 
		"adjacencies": [  "142316" ]
	}
	, {
		"id": "142382", 
		"name": "KC+and+the+sunshine+band", 
		"adjacencies": [  "142297" ]
	}
	, {
		"id": "142384", 
		"name": "hotel+rwanda", 
		"adjacencies": [  "142385" ]
	}
	, {
		"id": "142389", 
		"name": "turn+the+beat+around", 
		"adjacencies": [  "142390" ]
	}
	, {
		"id": "142403", 
		"name": "gloria+gaynor", 
		"adjacencies": [  "142404" ]
	}
	, {
		"id": "142447", 
		"name": "bee+gees", 
		"adjacencies": [  "142448" ]
	}
	, {
		"id": "142489", 
		"name": "miss+oregon", 
		"adjacencies": [  "142490" ]
	}
	, {
		"id": "142580", 
		"name": "emily+hanes", 
		"adjacencies": [  "142581" ]
	}
	, {
		"id": "142628", 
		"name": "sarah+palin", 
		"adjacencies": [  "142629" ]
	}
	, {
		"id": "143026", 
		"name": "Ivy_League_nude_posture_photos", 
		"adjacencies": [  "143028" ]
	}
	, {
		"id": "143056", 
		"name": "piccolo", 
		"adjacencies": [  "143057" ]
	}
	, {
		"id": "143329", 
		"name": "Henry_Pierrepoint", 
		"adjacencies": [  "143332" ]
	}
	, {
		"id": "143425", 
		"name": "adlerian", 
		"adjacencies": [  "143426" ]
	}
	, {
		"id": "143567", 
		"name": "norah+jones", 
		"adjacencies": [  "143568" ]
	}
	, {
		"id": "143665", 
		"name": "babbages", 
		"adjacencies": [  "143666" ]
	}
	, {
		"id": "143838", 
		"name": "pulp+fiction", 
		"adjacencies": [  "143839" ,  "143839" ]
	}
	, {
		"id": "143838", 
		"name": "pulp+fiction", 
		"adjacencies": [  "143839" ,  "143839" ]
	}
	, {
		"id": "143851", 
		"name": "one+dollar+bill", 
		"adjacencies": [  "143852" ]
	}
	, {
		"id": "144379", 
		"name": "sugar+and+spice", 
		"adjacencies": [  "144380" ]
	}
	, {
		"id": "144473", 
		"name": "binary+tree", 
		"adjacencies": [  "144474" ]
	}
	, {
		"id": "144495", 
		"name": "Sand+Bubbler+Crabs+", 
		"adjacencies": [  "144496" ]
	}
	, {
		"id": "144501", 
		"name": "ethernet", 
		"adjacencies": [  "144502" ]
	}
	, {
		"id": "144684", 
		"name": "akon", 
		"adjacencies": [  "144685" ]
	}
	, {
		"id": "144800", 
		"name": "nes", 
		"adjacencies": [  "144801" ]
	}
	, {
		"id": "144827", 
		"name": "mims", 
		"adjacencies": [  "144828" ]
	}
	, {
		"id": "144830", 
		"name": "aubrey+o%27day", 
		"adjacencies": [  "144831" ]
	}
	, {
		"id": "144909", 
		"name": "marillion", 
		"adjacencies": [  "144910" ]
	}
	, {
		"id": "145243", 
		"name": "joe+jackson", 
		"adjacencies": [  "145244" ]
	}
	, {
		"id": "145360", 
		"name": "the+gap+band", 
		"adjacencies": [  "145361" ]
	}
	, {
		"id": "145947", 
		"name": "pine+nuts", 
		"adjacencies": [  "145948" ]
	}
	, {
		"id": "146291", 
		"name": "rob+renier", 
		"adjacencies": [  "146292" ]
	}
	, {
		"id": "146935", 
		"name": "Birthday_Paradox", 
		"adjacencies": [  "146936" ]
	}
	, {
		"id": "147007", 
		"name": "us+constitution", 
		"adjacencies": [  "147008" ]
	}
	, {
		"id": "147039", 
		"name": "jersey+shore", 
		"adjacencies": [  "147040" ,  "147040" ,  "147040" ,  "147040" ,  "147040" ]
	}
	, {
		"id": "147039", 
		"name": "jersey+shore", 
		"adjacencies": [  "147040" ,  "147040" ,  "147040" ,  "147040" ,  "147040" ]
	}
	, {
		"id": "147039", 
		"name": "jersey+shore", 
		"adjacencies": [  "147040" ,  "147040" ,  "147040" ,  "147040" ,  "147040" ]
	}
	, {
		"id": "147039", 
		"name": "jersey+shore", 
		"adjacencies": [  "147040" ,  "147040" ,  "147040" ,  "147040" ,  "147040" ]
	}
	, {
		"id": "147039", 
		"name": "jersey+shore", 
		"adjacencies": [  "147040" ,  "147040" ,  "147040" ,  "147040" ,  "147040" ]
	}
	, {
		"id": "147425", 
		"name": "UDP", 
		"adjacencies": [  "147426" ]
	}
	, {
		"id": "147537", 
		"name": "womenizer", 
		"adjacencies": [  "147538" ]
	}
	, {
		"id": "147956", 
		"name": "wayne%27s+world", 
		"adjacencies": [  "147957" ]
	}
	, {
		"id": "148202", 
		"name": "the+books", 
		"adjacencies": [  "148203" ]
	}
	, {
		"id": "148590", 
		"name": "steven+segal", 
		"adjacencies": [  "148591" ]
	}
	, {
		"id": "148669", 
		"name": "neutrino", 
		"adjacencies": [  "148670" ]
	}
	, {
		"id": "148756", 
		"name": "dead+man%27s+bones", 
		"adjacencies": [  "148757" ]
	}
	, {
		"id": "148839", 
		"name": "Transmission_Control_Protocol", 
		"adjacencies": [  "148846" ]
	}
	, {
		"id": "149018", 
		"name": "BeOS", 
		"adjacencies": [  "149019" ]
	}
	, {
		"id": "149416", 
		"name": "silent+spring", 
		"adjacencies": [  "149417" ]
	}
	, {
		"id": "149467", 
		"name": "ray+j", 
		"adjacencies": [  "149468" ,  "149468" ]
	}
	, {
		"id": "149467", 
		"name": "ray+j", 
		"adjacencies": [  "149468" ,  "149468" ]
	}
	, {
		"id": "149495", 
		"name": "stonebreaker", 
		"adjacencies": [  "149496" ]
	}
	, {
		"id": "149933", 
		"name": "jay+z", 
		"adjacencies": [  "149934" ]
	}
	, {
		"id": "150671", 
		"name": "boxee", 
		"adjacencies": [  "150672" ]
	}
	, {
		"id": "150817", 
		"name": "gangsta%27+paradise", 
		"adjacencies": [  "150818" ]
	}
	, {
		"id": "150965", 
		"name": "gen+x", 
		"adjacencies": [  "150966" ]
	}
	, {
		"id": "151781", 
		"name": "99+problems", 
		"adjacencies": [  "151782" ,  "151782" ]
	}
	, {
		"id": "151781", 
		"name": "99+problems", 
		"adjacencies": [  "151782" ,  "151782" ]
	}
	, {
		"id": "152405", 
		"name": "krs+one", 
		"adjacencies": [  "152406" ]
	}
	, {
		"id": "152528", 
		"name": "herbie+hancock", 
		"adjacencies": [  "152529" ]
	}
	, {
		"id": "152536", 
		"name": "sugarhill+gang", 
		"adjacencies": [  "152537" ]
	}
	, {
		"id": "152564", 
		"name": "paid+in+full", 
		"adjacencies": [  "152565" ]
	}
	, {
		"id": "152933", 
		"name": "sledgehammer", 
		"adjacencies": [  "152934" ]
	}
	, {
		"id": "153007", 
		"name": "henry+rollins", 
		"adjacencies": [  "153008" ]
	}
	, {
		"id": "153445", 
		"name": "simonyi", 
		"adjacencies": [  "153446" ]
	}
	, {
		"id": "153807", 
		"name": "tautology", 
		"adjacencies": [  "153808" ]
	}
	, {
		"id": "154443", 
		"name": "+Bhut+Jolokia", 
		"adjacencies": [  "154444" ]
	}
	, {
		"id": "154803", 
		"name": "space+quest+II", 
		"adjacencies": [  "154804" ]
	}
	, {
		"id": "154821", 
		"name": "human+growth+hormone", 
		"adjacencies": [  "154822" ]
	}
	, {
		"id": "154829", 
		"name": "wild+hogs", 
		"adjacencies": [  "154830" ]
	}
	, {
		"id": "155122", 
		"name": "tina+fey", 
		"adjacencies": [  "155123" ]
	}
	, {
		"id": "155208", 
		"name": "nick+drake", 
		"adjacencies": [  "155209" ]
	}
	, {
		"id": "155912", 
		"name": "james+brown", 
		"adjacencies": [  "155913" ]
	}
	, {
		"id": "155973", 
		"name": "smokey+robinson", 
		"adjacencies": [  "155974" ]
	}
	, {
		"id": "156132", 
		"name": "pineapple+express", 
		"adjacencies": [  "156133" ]
	}
	, {
		"id": "156136", 
		"name": "library", 
		"adjacencies": [  "156137" ]
	}
	, {
		"id": "156623", 
		"name": "king+of+carrot+flowers", 
		"adjacencies": [  "156624" ]
	}
	, {
		"id": "156627", 
		"name": "sourwood", 
		"adjacencies": [  "156628" ]
	}
	, {
		"id": "156891", 
		"name": "mad+maxx", 
		"adjacencies": [  "156892" ]
	}
	, {
		"id": "157120", 
		"name": "mops", 
		"adjacencies": [  "157121" ]
	}
	, {
		"id": "157249", 
		"name": "DJ+Shadow", 
		"adjacencies": [  "157250" ]
	}
	, {
		"id": "157333", 
		"name": "rick+bayless", 
		"adjacencies": [  "157334" ]
	}
	, {
		"id": "157345", 
		"name": "count+zero", 
		"adjacencies": [  "157346" ]
	}
	, {
		"id": "157587", 
		"name": "gorgonzola", 
		"adjacencies": [  "157588" ]
	}
	, {
		"id": "158026", 
		"name": "short+ribs", 
		"adjacencies": [  "72184" ]
	}
	, {
		"id": "158052", 
		"name": "friendster", 
		"adjacencies": [  "158053" ]
	}
	, {
		"id": "158078", 
		"name": "eric+clapton", 
		"adjacencies": [  "158079" ]
	}
	, {
		"id": "158191", 
		"name": "gida+de+laurentis", 
		"adjacencies": [  "158192" ]
	}
	, {
		"id": "158289", 
		"name": "jim+carroll", 
		"adjacencies": [  "158290" ]
	}
	, {
		"id": "158321", 
		"name": "starship+troopers", 
		"adjacencies": [  "158322" ,  "158322" ]
	}
	, {
		"id": "158321", 
		"name": "starship+troopers", 
		"adjacencies": [  "158322" ,  "158322" ]
	}
	, {
		"id": "158448", 
		"name": "kanban", 
		"adjacencies": [  "158449" ,  "158449" ]
	}
	, {
		"id": "158448", 
		"name": "kanban", 
		"adjacencies": [  "158449" ,  "158449" ]
	}
	, {
		"id": "158685", 
		"name": "gillian+welch", 
		"adjacencies": [  "158686" ]
	}
	, {
		"id": "158846", 
		"name": "midori", 
		"adjacencies": [  "158847" ]
	}
	, {
		"id": "159224", 
		"name": "The_Troubles#Additional_statistics", 
		"adjacencies": [  "159225" ]
	}
	, {
		"id": "159238", 
		"name": "i%27m+on+a+boat", 
		"adjacencies": [  "159239" ]
	}
	, {
		"id": "159244", 
		"name": "gallagher", 
		"adjacencies": [  "159245" ]
	}
	, {
		"id": "159961", 
		"name": "ayds", 
		"adjacencies": [  "159962" ]
	}
	, {
		"id": "160225", 
		"name": "Ke%24ha", 
		"adjacencies": [  "160226" ]
	}
	, {
		"id": "160235", 
		"name": "Windows+NT", 
		"adjacencies": [  "160236" ]
	}
	, {
		"id": "160282", 
		"name": "NERO", 
		"adjacencies": [  "160283" ]
	}
	, {
		"id": "160304", 
		"name": "bret+micheals", 
		"adjacencies": [  "160305" ]
	}
	, {
		"id": "160633", 
		"name": "wim+mertens", 
		"adjacencies": [  "160634" ]
	}
	, {
		"id": "160936", 
		"name": "hominiy", 
		"adjacencies": [  "160937" ]
	}
	, {
		"id": "161302", 
		"name": "jean+grae", 
		"adjacencies": [  "161303" ]
	}
	, {
		"id": "161329", 
		"name": "List_of_the_biggest_selling_R&B/Hip_Hop_albums_of_all_time_in_the_United_States", 
		"adjacencies": [  "161336" ]
	}
	, {
		"id": "161580", 
		"name": "vanilla+ice", 
		"adjacencies": [  "161581" ]
	}
	, {
		"id": "161585", 
		"name": "pharcyde", 
		"adjacencies": [  "161586" ]
	}
	, {
		"id": "161635", 
		"name": "mc+lyte", 
		"adjacencies": [  "161636" ]
	}
	, {
		"id": "161639", 
		"name": "my+name+is", 
		"adjacencies": [  "161640" ]
	}
	, {
		"id": "161650", 
		"name": "work+it", 
		"adjacencies": [  "161651" ]
	}
	, {
		"id": "161770", 
		"name": "fibre+channel", 
		"adjacencies": [  "161771" ]
	}
	, {
		"id": "162094", 
		"name": "737", 
		"adjacencies": [  "162095" ]
	}
	, {
		"id": "162128", 
		"name": "Burj+Dubai", 
		"adjacencies": [  "162129" ]
	}
	, {
		"id": "162344", 
		"name": "dr.+dre", 
		"adjacencies": [  "162345" ]
	}
	, {
		"id": "162900", 
		"name": "ITA+software", 
		"adjacencies": [  "135823" ]
	}
	, {
		"id": "163035", 
		"name": "secrets+of+aspen", 
		"adjacencies": [  "163036" ]
	}
	, {
		"id": "163127", 
		"name": "Andy_Martin_(American_politician)", 
		"adjacencies": [  "163128" ,  "163129" ]
	}
	, {
		"id": "163161", 
		"name": "nightshift", 
		"adjacencies": [  "163162" ]
	}
	, {
		"id": "163441", 
		"name": "List_of_assigned_/8_IP_address_blocks", 
		"adjacencies": [  "163442" ,  "163443" ]
	}
	, {
		"id": "164168", 
		"name": "best+in+show", 
		"adjacencies": [  "164169" ]
	}
	, {
		"id": "164374", 
		"name": "leidenfrost", 
		"adjacencies": [  "164375" ]
	}
	, {
		"id": "164939", 
		"name": "mike+doughty", 
		"adjacencies": [  "138490" ]
	}
	, {
		"id": "164951", 
		"name": "squarepusher", 
		"adjacencies": [  "164952" ]
	}
	, {
		"id": "164987", 
		"name": "mk+ultra", 
		"adjacencies": [  "164988" ]
	}
	, {
		"id": "165314", 
		"name": "morgan+freeman", 
		"adjacencies": [  "165315" ]
	}
	, {
		"id": "165434", 
		"name": "maus", 
		"adjacencies": [  "165435" ]
	}
	, {
		"id": "166019", 
		"name": "peanut+allergies", 
		"adjacencies": [  "166020" ,  "166020" ]
	}
	, {
		"id": "166019", 
		"name": "peanut+allergies", 
		"adjacencies": [  "166020" ,  "166020" ]
	}
	, {
		"id": "166033", 
		"name": "jumbo+frames", 
		"adjacencies": [  "166034" ]
	}
	, {
		"id": "166446", 
		"name": "rage+against+the+machine", 
		"adjacencies": [  "166447" ]
	}
	, {
		"id": "166586", 
		"name": "ext4", 
		"adjacencies": [  "166587" ]
	}
	, {
		"id": "166636", 
		"name": "french+flag", 
		"adjacencies": [  "166637" ]
	}
	, {
		"id": "166768", 
		"name": "boggle", 
		"adjacencies": [  "166769" ]
	}
	, {
		"id": "166868", 
		"name": "Cin%C3%A9math%C3%A8que+Fran%C3%A7aise", 
		"adjacencies": [  "166869" ]
	}
	, {
		"id": "167790", 
		"name": "belladonna", 
		"adjacencies": [  "167791" ]
	}
	, {
		"id": "167809", 
		"name": "april+1952", 
		"adjacencies": [  "167810" ]
	}
	, {
		"id": "167816", 
		"name": "drugs", 
		"adjacencies": [  "167817" ]
	}
	, {
		"id": "167835", 
		"name": "A-0", 
		"adjacencies": [  "167836" ]
	}
	, {
		"id": "168169", 
		"name": "kevin+brauch", 
		"adjacencies": [  "168170" ]
	}
	, {
		"id": "168184", 
		"name": "moi", 
		"adjacencies": [  "168185" ]
	}
	, {
		"id": "168242", 
		"name": "pop+rivet", 
		"adjacencies": [  "168243" ]
	}
	, {
		"id": "168358", 
		"name": "here+i+am+baby", 
		"adjacencies": [  "168359" ]
	}
	, {
		"id": "168395", 
		"name": "reggea", 
		"adjacencies": [  "168396" ]
	}
	, {
		"id": "168559", 
		"name": "bob+marley", 
		"adjacencies": [  "168560" ]
	}
	, {
		"id": "168563", 
		"name": "stepping+razor", 
		"adjacencies": [  "168564" ]
	}
	, {
		"id": "168687", 
		"name": "burning+spear", 
		"adjacencies": [  "168688" ]
	}
	, {
		"id": "168700", 
		"name": "down+presser+man", 
		"adjacencies": [  "168701" ]
	}
	, {
		"id": "168826", 
		"name": "triumph", 
		"adjacencies": [  "168827" ]
	}
	, {
		"id": "168922", 
		"name": "ark", 
		"adjacencies": [  "168923" ]
	}
	, {
		"id": "169484", 
		"name": "http://en.wikipedia.org/southwest", 
		"adjacencies": [  "169485" ]
	}
	, {
		"id": "169573", 
		"name": "halting", 
		"adjacencies": [  "169574" ]
	}
	, {
		"id": "169974", 
		"name": "HPPA", 
		"adjacencies": [  "169975" ]
	}
	, {
		"id": "170121", 
		"name": "mc+900+ft+jesus", 
		"adjacencies": [  "170122" ]
	}
	, {
		"id": "170121", 
		"name": "mc+900+ft+jesus", 
		"adjacencies": [  "170122" ]
	}
	, {
		"id": "170158", 
		"name": "RIVA_128", 
		"adjacencies": [  "170159" ]
	}
	, {
		"id": "170178", 
		"name": "guitar+player+magazine", 
		"adjacencies": [  "170179" ]
	}
	, {
		"id": "170405", 
		"name": "tom+green", 
		"adjacencies": [  "170406" ]
	}
	, {
		"id": "170800", 
		"name": "Threepeat", 
		"adjacencies": [  "170801" ]
	}
	, {
		"id": "171201", 
		"name": "battle+of+the+year", 
		"adjacencies": [  "171202" ]
	}
	, {
		"id": "171261", 
		"name": "j2ee", 
		"adjacencies": [  "171262" ]
	}
	, {
		"id": "171318", 
		"name": "the+shining", 
		"adjacencies": [  "171319" ]
	}
	, {
		"id": "171513", 
		"name": "sky+burial", 
		"adjacencies": [  "171514" ]
	}
	, {
		"id": "171758", 
		"name": "Santigold", 
		"adjacencies": [  "171759" ]
	}
	, {
		"id": "171994", 
		"name": "sophocles", 
		"adjacencies": [  "171995" ]
	}
	, {
		"id": "172102", 
		"name": "bert+jansch", 
		"adjacencies": [  "172103" ]
	}
	, {
		"id": "172814", 
		"name": "fleece", 
		"adjacencies": [  "172815" ]
	}
	, {
		"id": "172970", 
		"name": "openbsd", 
		"adjacencies": [  "172971" ]
	}
	, {
		"id": "174284", 
		"name": "texts+from+last+night", 
		"adjacencies": [  "174285" ]
	}
	, {
		"id": "174333", 
		"name": "irc", 
		"adjacencies": [  "174334" ]
	}
	, {
		"id": "176190", 
		"name": "antiques+roadshow", 
		"adjacencies": [  "176191" ]
	}
	, {
		"id": "179006", 
		"name": "kings+college", 
		"adjacencies": [  "179007" ]
	}
	, {
		"id": "179154", 
		"name": "stephen+colbert", 
		"adjacencies": [  "179155" ]
	}
	, {
		"id": "179166", 
		"name": "leon+russell", 
		"adjacencies": [  "179167" ]
	}
	, {
		"id": "179335", 
		"name": "shiny+toy+guns", 
		"adjacencies": [  "179336" ]
	}
	, {
		"id": "179397", 
		"name": "the+ting+tings", 
		"adjacencies": [  "179398" ,  "179398" ]
	}
	, {
		"id": "179397", 
		"name": "the+ting+tings", 
		"adjacencies": [  "179398" ,  "179398" ]
	}
	, {
		"id": "179688", 
		"name": "norwegian+airlines", 
		"adjacencies": [  "169490" ,  "198735" ]
	}
	, {
		"id": "179688", 
		"name": "norwegian+airlines", 
		"adjacencies": [  "169490" ,  "198735" ]
	}
	, {
		"id": "180698", 
		"name": "fluticasone", 
		"adjacencies": [  "180699" ]
	}
	, {
		"id": "181867", 
		"name": "arecibo+radio+telescope", 
		"adjacencies": [  "181868" ]
	}
	, {
		"id": "181952", 
		"name": "hadoop", 
		"adjacencies": [  "181953" ]
	}
	, {
		"id": "181998", 
		"name": "pokemon+snap", 
		"adjacencies": [  "181999" ]
	}
	, {
		"id": "182903", 
		"name": "aliens", 
		"adjacencies": [  "182904" ]
	}
	, {
		"id": "183910", 
		"name": "derkham%27s+diseas", 
		"adjacencies": [  "183911" ]
	}
	, {
		"id": "184216", 
		"name": "pit+mine", 
		"adjacencies": [  "184220" ]
	}
	, {
		"id": "184218", 
		"name": "carbuncle", 
		"adjacencies": [  "184219" ]
	}
	, {
		"id": "184808", 
		"name": "wasteland", 
		"adjacencies": [  "184809" ]
	}
	, {
		"id": "184915", 
		"name": "marc+ecko", 
		"adjacencies": [  "184916" ]
	}
	, {
		"id": "184960", 
		"name": "mail+order+bride", 
		"adjacencies": [  "184961" ]
	}
	, {
		"id": "185561", 
		"name": "graceland", 
		"adjacencies": [  "185562" ]
	}
	, {
		"id": "185682", 
		"name": "madness", 
		"adjacencies": [  "185683" ]
	}
	, {
		"id": "185893", 
		"name": "red+dawn", 
		"adjacencies": [  "185894" ]
	}
	, {
		"id": "185934", 
		"name": "USB", 
		"adjacencies": [  "110673" ]
	}
	, {
		"id": "188265", 
		"name": "ghostbusters", 
		"adjacencies": [  "188266" ]
	}
	, {
		"id": "189706", 
		"name": "l7", 
		"adjacencies": [  "189707" ]
	}
	, {
		"id": "190712", 
		"name": "kidney+stones", 
		"adjacencies": [  "190713" ]
	}
	, {
		"id": "191642", 
		"name": "katy+perry", 
		"adjacencies": [  "191643" ]
	}
	, {
		"id": "192825", 
		"name": "singing+bird+box", 
		"adjacencies": [  "192826" ,  "192827" ,  "192836" ]
	}
	, {
		"id": "193153", 
		"name": "blockbuster", 
		"adjacencies": [  "193154" ]
	}
	, {
		"id": "193186", 
		"name": "white+death", 
		"adjacencies": [  "193187" ]
	}
	, {
		"id": "194055", 
		"name": "ronald+jenkees", 
		"adjacencies": [  "194056" ]
	}
	, {
		"id": "194918", 
		"name": "traveller+camp", 
		"adjacencies": [  "194919" ]
	}
	, {
		"id": "195254", 
		"name": "lindsey+vonn", 
		"adjacencies": [  "195255" ]
	}
	, {
		"id": "195580", 
		"name": "oslo", 
		"adjacencies": [  "195581" ]
	}
	, {
		"id": "195631", 
		"name": "ed+hardy", 
		"adjacencies": [  "195632" ]
	}
	, {
		"id": "195910", 
		"name": "wii", 
		"adjacencies": [  "144806" ]
	}
	, {
		"id": "195946", 
		"name": "Flat_white", 
		"adjacencies": [  "195947" ]
	}
	, {
		"id": "196620", 
		"name": "16+and+pregnant", 
		"adjacencies": [  "196621" ]
	}
	, {
		"id": "197091", 
		"name": "Khat", 
		"adjacencies": [  "197092" ]
	}
	, {
		"id": "200035", 
		"name": "somebody%27s+watching+me", 
		"adjacencies": [  "200036" ]
	}
	, {
		"id": "201121", 
		"name": "Castle_of_the_Winds", 
		"adjacencies": [  "201127" ]
	}
	, {
		"id": "203102", 
		"name": "lauren+bacall", 
		"adjacencies": [  "203103" ]
	}
	, {
		"id": "204572", 
		"name": "norway", 
		"adjacencies": [  "204573" ]
	}
	, {
		"id": "204862", 
		"name": "aquavit", 
		"adjacencies": [  "204863" ]
	}
	, {
		"id": "205793", 
		"name": "list+of+system+quality+attributes", 
		"adjacencies": [  "205794" ]
	}
	, {
		"id": "207358", 
		"name": "Software_bug", 
		"adjacencies": [  "207361" ]
	}
	, {
		"id": "207526", 
		"name": "crouched+burial", 
		"adjacencies": [  "207527" ]
	}
	, {
		"id": "207547", 
		"name": "toxoplasmosis", 
		"adjacencies": [  "207548" ]
	}
	, {
		"id": "208025", 
		"name": "anat+baron", 
		"adjacencies": [  "208026" ]
	}
	, {
		"id": "208210", 
		"name": "gordon+ramsey", 
		"adjacencies": [  "208211" ]
	}
	, {
		"id": "208770", 
		"name": "milli+vanilli", 
		"adjacencies": [  "208771" ]
	}
	, {
		"id": "211454", 
		"name": "Disk_quota#Common_UNIX_Disk_Quota_Commands", 
		"adjacencies": [  "211455" ]
	}
	, {
		"id": "212704", 
		"name": "Solar_furnace", 
		"adjacencies": [  "212709" ]
	}
	, {
		"id": "213711", 
		"name": "enigma", 
		"adjacencies": [  "213712" ]
	}
	, {
		"id": "213808", 
		"name": "agile", 
		"adjacencies": [  "213809" ]
	}
	, {
		"id": "214098", 
		"name": "parlimentary+procedure", 
		"adjacencies": [  "214099" ]
	}
	, {
		"id": "216279", 
		"name": "porridge", 
		"adjacencies": [  "216280" ]
	}
	, {
		"id": "217488", 
		"name": "swap+cooler", 
		"adjacencies": [  "217489" ]
	}
	, {
		"id": "217507", 
		"name": "lte", 
		"adjacencies": [  "217508" ]
	}
	, {
		"id": "217699", 
		"name": "kevin+federline", 
		"adjacencies": [  "217700" ]
	}
	, {
		"id": "217786", 
		"name": "gatling+gun", 
		"adjacencies": [  "217787" ]
	}
	, {
		"id": "219471", 
		"name": "between+two+worlds", 
		"adjacencies": [  "219472" ]
	}
	, {
		"id": "219477", 
		"name": "italy", 
		"adjacencies": [  "219478" ]
	}
	, {
		"id": "223840", 
		"name": "design+patterns", 
		"adjacencies": [  "223841" ]
	}
	, {
		"id": "225937", 
		"name": "wisdom+teeth", 
		"adjacencies": [  "225938" ]
	}
	, {
		"id": "226865", 
		"name": "flow+rida", 
		"adjacencies": [  "226866" ]
	}
	, {
		"id": "227033", 
		"name": "Consistency_model", 
		"adjacencies": [  "227039" ]
	}
	, {
		"id": "227182", 
		"name": "Hutaree", 
		"adjacencies": [  "227183" ]
	}
	, {
		"id": "227658", 
		"name": "pomplamoose", 
		"adjacencies": [  "227659" ]
	}
	, {
		"id": "227813", 
		"name": "juggalo", 
		"adjacencies": [  "227814" ]
	}
	, {
		"id": "228054", 
		"name": "M_(disambiguation)", 
		"adjacencies": [  "228065" ]
	}
	, {
		"id": "228064", 
		"name": "Table_of_logic_symbols", 
		"adjacencies": [  "228066" ]
	}
	, {
		"id": "122219", 
		"name": "List_of_serial_killers_by_country", 
		"adjacencies": [  "122220" ,  "122221" ,  "122228" ]
	}
	, {
		"id": "122392", 
		"name": "Cellular_frequencies", 
		"adjacencies": [  "122394" ]
	}
	, {
		"id": "122405", 
		"name": "Sui_iuris", 
		"adjacencies": [  "122406" ]
	}
	, {
		"id": "122414", 
		"name": "Don%27t_Let_Me_Be_Misunderstood", 
		"adjacencies": [  "122415" ]
	}
	, {
		"id": "125400", 
		"name": "Welcome_to_the_Jungle#cite_note-HTGTH-5", 
		"adjacencies": [  "125401" ]
	}
	, {
		"id": "129180", 
		"name": "Parakeet", 
		"adjacencies": [  "129181" ]
	}
	, {
		"id": "130800", 
		"name": "Ternary_operation", 
		"adjacencies": [  "130801" ]
	}
	, {
		"id": "132477", 
		"name": "Brewer_&_Shipley", 
		"adjacencies": [  "132478" ]
	}
	, {
		"id": "140307", 
		"name": "Transmission_Control_Protocol#Congestion_control", 
		"adjacencies": [  "140308" ]
	}
	, {
		"id": "140312", 
		"name": "Data_segment", 
		"adjacencies": [  "140313" ]
	}
	, {
		"id": "141671", 
		"name": "Turing_completeness", 
		"adjacencies": [  "141672" ]
	}
	, {
		"id": "141738", 
		"name": "1994_Fairchild_Air_Force_Base_B-52_crash", 
		"adjacencies": [  "141768" ]
	}
	, {
		"id": "142112", 
		"name": "B%C3%A9chamel_sauce", 
		"adjacencies": [  "142113" ]
	}
	, {
		"id": "142493", 
		"name": "Kari_Ann_Peniche", 
		"adjacencies": [  "142501" ]
	}
	, {
		"id": "147009", 
		"name": "Us_constitution#Amendments", 
		"adjacencies": [  "147012" ]
	}
	, {
		"id": "147160", 
		"name": "Runlevel", 
		"adjacencies": [  "147161" ]
	}
	, {
		"id": "150928", 
		"name": "Immanentize_the_eschaton", 
		"adjacencies": [  "150929" ]
	}
	, {
		"id": "152881", 
		"name": "File:Tyrannosaurusscale.png", 
		"adjacencies": [  "152882" ]
	}
	, {
		"id": "156644", 
		"name": "Father_and_Son_(song)", 
		"adjacencies": [  "156645" ]
	}
	, {
		"id": "158698", 
		"name": "Vundo", 
		"adjacencies": [  "158699" ,  "158700" ]
	}
	, {
		"id": "160774", 
		"name": "List_of_WiiWare_games", 
		"adjacencies": [  "160775" ]
	}
	, {
		"id": "161625", 
		"name": "East_Coast-West_Coast_hip_hop_rivalry", 
		"adjacencies": [  "161626" ]
	}
	, {
		"id": "163380", 
		"name": "Cable_lacing", 
		"adjacencies": [  "163381" ,  "163419" ]
	}
	, {
		"id": "163440", 
		"name": "IP_address", 
		"adjacencies": [  "163441" ]
	}
	, {
		"id": "166084", 
		"name": "Steatopygia", 
		"adjacencies": [  "166085" ,  "166086" ]
	}
	, {
		"id": "167063", 
		"name": "The_Settlers_of_Catan", 
		"adjacencies": [  "167064" ,  "167064" ,  "167066" ,  "167067" ,  "167068" ,  "167090" ]
	}
	, {
		"id": "169480", 
		"name": "Michael_Stonebraker", 
		"adjacencies": [  "169481" ]
	}
	, {
		"id": "179519", 
		"name": "Guitar_tunings", 
		"adjacencies": [  "179521" ]
	}
	, {
		"id": "194011", 
		"name": "Agile_software_development", 
		"adjacencies": [  "213812" ,  "213813" ]
	}
	, {
		"id": "126685", 
		"name": "Matt_Zimmerman_(technologist)", 
		"adjacencies": [  "126686" ]
	}
	, {
		"id": "205794", 
		"name": "List_of_system_quality_attributes", 
		"adjacencies": [  "205795" ,  "205795" ,  "205796" ,  "205803" ,  "205807" ,  "205808" ,  "205814" ,  "205817" ,  "205797" ,  "205801" ,  "205801" ,  "205802" ,  "205804" ]
	}
	, {
		"id": "212897", 
		"name": "Virtual_Router_Redundancy_Protocol", 
		"adjacencies": [  "212898" ]
	}
	, {
		"id": "227816", 
		"name": "Miracles_(Insane_Clown_Posse_song)", 
		"adjacencies": [  "228487" ,  "228489" ]
	}
	, {
		"id": "59687", 
		"name": "Weird_al", 
		"adjacencies": [  "153947" ]
	}
	, {
		"id": "72184", 
		"name": "Short_ribs", 
		"adjacencies": [  "158027" ,  "158028" ]
	}
	, {
		"id": "73490", 
		"name": "Mucinex", 
		"adjacencies": [  ]
	}
	, {
		"id": "91304", 
		"name": "Automatic_variable", 
		"adjacencies": [  ]
	}
	, {
		"id": "109888", 
		"name": "Frontier_Airlines", 
		"adjacencies": [  ]
	}
	, {
		"id": "110673", 
		"name": "USB", 
		"adjacencies": [  "186125" ]
	}
	, {
		"id": "114748", 
		"name": "Iron_chef", 
		"adjacencies": [  "161026" ]
	}
	, {
		"id": "121184", 
		"name": "DJ_AM", 
		"adjacencies": [  "121185" ]
	}
	, {
		"id": "121185", 
		"name": "Crack_cocaine", 
		"adjacencies": [  "121186" ,  "121187" ,  "121188" ,  "121189" ]
	}
	, {
		"id": "121186", 
		"name": "Formication", 
		"adjacencies": [  ]
	}
	, {
		"id": "121187", 
		"name": "Delusional_parasitosis", 
		"adjacencies": [  ]
	}
	, {
		"id": "121188", 
		"name": "File:Smoking_Crack.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "121189", 
		"name": "Crack_epidemic_(United_States)", 
		"adjacencies": [  "121190" ,  "121249" ,  "121250" ]
	}
	, {
		"id": "121190", 
		"name": "Crack_house", 
		"adjacencies": [  ]
	}
	, {
		"id": "121249", 
		"name": "Lorenzo_Nichols", 
		"adjacencies": [  ]
	}
	, {
		"id": "121250", 
		"name": "Washington_Heights,_Manhattan", 
		"adjacencies": [  ]
	}
	, {
		"id": "122058", 
		"name": "Elvis_Presely", 
		"adjacencies": [  ]
	}
	, {
		"id": "122104", 
		"name": "Autoharp", 
		"adjacencies": [  ]
	}
	, {
		"id": "122159", 
		"name": "Shaped_notes", 
		"adjacencies": [  "122160" ,  "122162" ,  "122163" ]
	}
	, {
		"id": "122160", 
		"name": "File:Star_in_the_east.png", 
		"adjacencies": [  "122161" ]
	}
	, {
		"id": "122162", 
		"name": "File:7-note-shape-note-hymnal-2.png", 
		"adjacencies": [  ]
	}
	, {
		"id": "122163", 
		"name": "Sacred_Harp", 
		"adjacencies": [  ]
	}
	, {
		"id": "122166", 
		"name": "Mother_Maybelle", 
		"adjacencies": [  "122167" ]
	}
	, {
		"id": "122167", 
		"name": "Carter_Family_picking", 
		"adjacencies": [  "122172" ]
	}
	, {
		"id": "122172", 
		"name": "Walking_bass", 
		"adjacencies": [  ]
	}
	, {
		"id": "122220", 
		"name": "Kristen_Gilbert", 
		"adjacencies": [  "122372" ]
	}
	, {
		"id": "122221", 
		"name": "Maxim_Petrov", 
		"adjacencies": [  ]
	}
	, {
		"id": "122228", 
		"name": "Alexander_Pichushkin", 
		"adjacencies": [  ]
	}
	, {
		"id": "122372", 
		"name": "Angel_of_Death", 
		"adjacencies": [  ]
	}
	, {
		"id": "122394", 
		"name": "File:QRC_Typical_Cellular_Channelization_and_Frequencies.png", 
		"adjacencies": [  "122395" ]
	}
	, {
		"id": "122406", 
		"name": "de+facto", 
		"adjacencies": [  "122407" ]
	}
	, {
		"id": "122407", 
		"name": "De_facto", 
		"adjacencies": [  "122408" ]
	}
	, {
		"id": "122408", 
		"name": "De_jure", 
		"adjacencies": [  ]
	}
	, {
		"id": "122415", 
		"name": "500_Greatest_Songs_of_All_Time", 
		"adjacencies": [  ]
	}
	, {
		"id": "122570", 
		"name": "Serial_killer", 
		"adjacencies": [  "122580" ,  "122581" ,  "122585" ]
	}
	, {
		"id": "122580", 
		"name": "Elizabeth_B%C3%A1thory", 
		"adjacencies": [  ]
	}
	, {
		"id": "122581", 
		"name": "Gilles_de_Rais", 
		"adjacencies": [  ]
	}
	, {
		"id": "122585", 
		"name": "List_of_serial_killers_by_number_of_victims", 
		"adjacencies": [  "122656" ,  "122657" ]
	}
	, {
		"id": "122656", 
		"name": "Leonard_Lake", 
		"adjacencies": [  "122658" ]
	}
	, {
		"id": "122657", 
		"name": "Charles_Ng", 
		"adjacencies": [  "122659" ,  "122660" ]
	}
	, {
		"id": "122658", 
		"name": "The_Collector", 
		"adjacencies": [  "122667" ,  "122668" ]
	}
	, {
		"id": "122659", 
		"name": "Notre_Dame_de_Namur_University", 
		"adjacencies": [  ]
	}
	, {
		"id": "122667", 
		"name": "Christopher_Wilder", 
		"adjacencies": [  ]
	}
	, {
		"id": "122668", 
		"name": "Robert_Berdella", 
		"adjacencies": [  ]
	}
	, {
		"id": "123134", 
		"name": "Malta", 
		"adjacencies": [  "123135" ,  "123136" ]
	}
	, {
		"id": "123135", 
		"name": "Giardia", 
		"adjacencies": [  "123136" ]
	}
	, {
		"id": "123136", 
		"name": "Giardia", 
		"adjacencies": [  ]
	}
	, {
		"id": "123136", 
		"name": "Giardia", 
		"adjacencies": [  ]
	}
	, {
		"id": "123630", 
		"name": "GSLB", 
		"adjacencies": [  "123631" ]
	}
	, {
		"id": "123631", 
		"name": "Cloud_computing", 
		"adjacencies": [  "123643" ]
	}
	, {
		"id": "123643", 
		"name": "CDN", 
		"adjacencies": [  "123644" ]
	}
	, {
		"id": "123644", 
		"name": "CDN", 
		"adjacencies": [  "123645" ]
	}
	, {
		"id": "123645", 
		"name": "Content_Delivery_Network", 
		"adjacencies": [  "123646" ]
	}
	, {
		"id": "123645", 
		"name": "Content_Delivery_Network", 
		"adjacencies": [  "123646" ]
	}
	, {
		"id": "123646", 
		"name": "Akamai_Technologies", 
		"adjacencies": [  "123645" ,  "123647" ]
	}
	, {
		"id": "123647", 
		"name": "File:Akamaiprocess.png", 
		"adjacencies": [  ]
	}
	, {
		"id": "123782", 
		"name": "Jailhouse_rock", 
		"adjacencies": [  "123783" ]
	}
	, {
		"id": "123783", 
		"name": "Jailhouse_Rock_(song)", 
		"adjacencies": [  "123795" ]
	}
	, {
		"id": "123786", 
		"name": "Wake_Up_Little_Susie", 
		"adjacencies": [  ]
	}
	, {
		"id": "123789", 
		"name": "Johnny_B_Goode", 
		"adjacencies": [  "123790" ]
	}
	, {
		"id": "123790", 
		"name": "what%27d+i+say", 
		"adjacencies": [  "123791" ]
	}
	, {
		"id": "123791", 
		"name": "What%27d_I_Say", 
		"adjacencies": [  ]
	}
	, {
		"id": "123794", 
		"name": "Nowhere_to_run", 
		"adjacencies": [  ]
	}
	, {
		"id": "123795", 
		"name": "i+put+a+spell+on+you", 
		"adjacencies": [  "123796" ]
	}
	, {
		"id": "123796", 
		"name": "I_Put_A_Spell_On_You", 
		"adjacencies": [  "123826" ]
	}
	, {
		"id": "123804", 
		"name": "Black_water", 
		"adjacencies": [  "123805" ]
	}
	, {
		"id": "123805", 
		"name": "Black_Water_(song)", 
		"adjacencies": [  "123806" ]
	}
	, {
		"id": "123806", 
		"name": "The_Doobie_Brothers", 
		"adjacencies": [  "123807" ,  "123808" ]
	}
	, {
		"id": "123807", 
		"name": "File:Doobie_brothers.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "123808", 
		"name": "saturday+in+the+park", 
		"adjacencies": [  "123809" ]
	}
	, {
		"id": "123809", 
		"name": "Saturday_in_the_Park", 
		"adjacencies": [  "123810" ]
	}
	, {
		"id": "123810", 
		"name": "Saturday_in_the_Park_(song)", 
		"adjacencies": [  "123816" ]
	}
	, {
		"id": "123813", 
		"name": "Doobie_Brothers", 
		"adjacencies": [  "123814" ]
	}
	, {
		"id": "123814", 
		"name": "Doobie_Brothers#Band", 
		"adjacencies": [  "123815" ]
	}
	, {
		"id": "123815", 
		"name": "Michael_McDonald_(singer)", 
		"adjacencies": [  ]
	}
	, {
		"id": "123816", 
		"name": "five+stairsteps", 
		"adjacencies": [  "123817" ]
	}
	, {
		"id": "123817", 
		"name": "Five_stairsteps", 
		"adjacencies": [  "123818" ]
	}
	, {
		"id": "123818", 
		"name": "MC5", 
		"adjacencies": [  "123819" ,  "123819" ]
	}
	, {
		"id": "123818", 
		"name": "MC5", 
		"adjacencies": [  "123819" ,  "123819" ]
	}
	, {
		"id": "123819", 
		"name": "MC5", 
		"adjacencies": [  "123820" ,  "123822" ]
	}
	, {
		"id": "123819", 
		"name": "MC5", 
		"adjacencies": [  "123820" ,  "123822" ]
	}
	, {
		"id": "123820", 
		"name": "baby+please+don%27t+go", 
		"adjacencies": [  "123821" ]
	}
	, {
		"id": "123821", 
		"name": "Baby_please_don%27t_go", 
		"adjacencies": [  "123818" ]
	}
	, {
		"id": "123822", 
		"name": "Kick_Out_The_Jams", 
		"adjacencies": [  ]
	}
	, {
		"id": "123825", 
		"name": "Otis_redding", 
		"adjacencies": [  "123829" ]
	}
	, {
		"id": "123826", 
		"name": "marvin+gay", 
		"adjacencies": [  "123827" ]
	}
	, {
		"id": "123827", 
		"name": "Marvin_Gay", 
		"adjacencies": [  "123828" ]
	}
	, {
		"id": "123828", 
		"name": "What%27s_Going_On", 
		"adjacencies": [  "123842" ]
	}
	, {
		"id": "123829", 
		"name": "(Sittin%27_On)_The_Dock_of_the_Bay", 
		"adjacencies": [  "123830" ]
	}
	, {
		"id": "123830", 
		"name": "dream+on", 
		"adjacencies": [  "123831" ]
	}
	, {
		"id": "123831", 
		"name": "Dream_on", 
		"adjacencies": [  "123832" ]
	}
	, {
		"id": "123832", 
		"name": "Dream_On_(Aerosmith_song)", 
		"adjacencies": [  "123833" ]
	}
	, {
		"id": "123833", 
		"name": "paint+it%2C+balck", 
		"adjacencies": [  "123834" ]
	}
	, {
		"id": "123834", 
		"name": "paint+it%2C+black", 
		"adjacencies": [  "123835" ]
	}
	, {
		"id": "123835", 
		"name": "Paint_It,_Black", 
		"adjacencies": [  "123836" ]
	}
	, {
		"id": "123836", 
		"name": "go+your+own+way", 
		"adjacencies": [  "123837" ]
	}
	, {
		"id": "123837", 
		"name": "Go_Your_Own_Way", 
		"adjacencies": [  "123838" ]
	}
	, {
		"id": "123838", 
		"name": "brandy", 
		"adjacencies": [  "123839" ]
	}
	, {
		"id": "123839", 
		"name": "Brandy", 
		"adjacencies": [  "123840" ]
	}
	, {
		"id": "123840", 
		"name": "Brandy_(disambiguation)", 
		"adjacencies": [  "123841" ]
	}
	, {
		"id": "123841", 
		"name": "Brandy_(You%27re_a_Fine_Girl)", 
		"adjacencies": [  ]
	}
	, {
		"id": "123842", 
		"name": "lola", 
		"adjacencies": [  "123843" ]
	}
	, {
		"id": "123843", 
		"name": "Lola", 
		"adjacencies": [  "123844" ]
	}
	, {
		"id": "123844", 
		"name": "Lola_(song)", 
		"adjacencies": [  "123861" ]
	}
	, {
		"id": "123861", 
		"name": "what%27s+so+funny+about", 
		"adjacencies": [  "123862" ,  "123863" ]
	}
	, {
		"id": "123862", 
		"name": "What%27s_So_Funny_About_Truth,_Justice_%26_the_American_Way%3F", 
		"adjacencies": [  ]
	}
	, {
		"id": "123863", 
		"name": "http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=what%27s+so+funny+about+peace+love+and+understanding&fulltext=Search", 
		"adjacencies": [  "123864" ,  "123866" ]
	}
	, {
		"id": "123864", 
		"name": "http://en.wikipedia.org/w/index.php?title=What%27s_so_funny_about_peace_love_and_understanding&action=edit&redlink=1", 
		"adjacencies": [  "123865" ]
	}
	, {
		"id": "123865", 
		"name": "What%27s_so_funny_about_peace_love_and_understanding", 
		"adjacencies": [  ]
	}
	, {
		"id": "123866", 
		"name": "what%27s+so+funny+%27bout+peace+love+and+understanding&fulltext=Search&redirs=1", 
		"adjacencies": [  "123867" ]
	}
	, {
		"id": "123867", 
		"name": "(What%27s_So_Funny_%27Bout)_Peace,_Love,_and_Understanding", 
		"adjacencies": [  "123879" ]
	}
	, {
		"id": "123879", 
		"name": "london+calling", 
		"adjacencies": [  "123880" ]
	}
	, {
		"id": "123880", 
		"name": "London_calling", 
		"adjacencies": [  "123881" ]
	}
	, {
		"id": "123881", 
		"name": "London_Calling_(song)", 
		"adjacencies": [  "123882" ]
	}
	, {
		"id": "123882", 
		"name": "school%27s+out", 
		"adjacencies": [  "123883" ]
	}
	, {
		"id": "123883", 
		"name": "School%27s_Out", 
		"adjacencies": [  "123884" ]
	}
	, {
		"id": "123884", 
		"name": "School%27s_Out_(song)", 
		"adjacencies": [  "123885" ]
	}
	, {
		"id": "123885", 
		"name": "The_Muppet_Show", 
		"adjacencies": [  ]
	}
	, {
		"id": "125374", 
		"name": "Slash", 
		"adjacencies": [  "125375" ]
	}
	, {
		"id": "125375", 
		"name": "Slash_(musician)", 
		"adjacencies": [  "125397" ,  "125377" ]
	}
	, {
		"id": "125397", 
		"name": "Welcome_to_the_Jungle", 
		"adjacencies": [  "125398" ,  "125399" ,  "125400" ]
	}
	, {
		"id": "125398", 
		"name": "Ludovico_technique", 
		"adjacencies": [  "125408" ]
	}
	, {
		"id": "125399", 
		"name": "The_Top_500_Heavy_Metal_Songs_of_All_Time", 
		"adjacencies": [  "125402" ]
	}
	, {
		"id": "125400", 
		"name": "Welcome_to_the_Jungle#cite_note-HTGTH-5", 
		"adjacencies": [  "125401" ]
	}
	, {
		"id": "125402", 
		"name": "Iron_Maiden", 
		"adjacencies": [  "125403" ,  "125404" ,  "125405" ]
	}
	, {
		"id": "125403", 
		"name": "Bruce_Dickinson", 
		"adjacencies": [  ]
	}
	, {
		"id": "125404", 
		"name": "File:G-ojib-ironmaiden.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "125405", 
		"name": "Best_selling_music_artists", 
		"adjacencies": [  "125406" ]
	}
	, {
		"id": "125406", 
		"name": "Jean_Michel_Jarre", 
		"adjacencies": [  "125407" ]
	}
	, {
		"id": "125407", 
		"name": "Charlotte_Rampling", 
		"adjacencies": [  ]
	}
	, {
		"id": "125408", 
		"name": "A_Clockwork_Orange", 
		"adjacencies": [  "125409" ]
	}
	, {
		"id": "125409", 
		"name": "Dystopian_novel", 
		"adjacencies": [  "125411" ]
	}
	, {
		"id": "125411", 
		"name": "List_of_dystopian_literature", 
		"adjacencies": [  "125412" ,  "125413" ,  "125414" ]
	}
	, {
		"id": "125412", 
		"name": "The_Giver", 
		"adjacencies": [  ]
	}
	, {
		"id": "125413", 
		"name": "Battle_Royale", 
		"adjacencies": [  "125415" ]
	}
	, {
		"id": "125414", 
		"name": "The_Shockwave_Rider", 
		"adjacencies": [  ]
	}
	, {
		"id": "125415", 
		"name": "Battle_Royale_(film)", 
		"adjacencies": [  ]
	}
	, {
		"id": "125603", 
		"name": "http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=mermaid+avenue&fulltext=Search", 
		"adjacencies": [  "125604" ]
	}
	, {
		"id": "125604", 
		"name": "Mermaid_Avenue", 
		"adjacencies": [  ]
	}
	, {
		"id": "127694", 
		"name": "Raven_Rock_Mountain_Complex", 
		"adjacencies": [  ]
	}
	, {
		"id": "127754", 
		"name": "philip+glass", 
		"adjacencies": [  "127755" ]
	}
	, {
		"id": "127755", 
		"name": "Philip_Glass", 
		"adjacencies": [  "127756" ]
	}
	, {
		"id": "127756", 
		"name": "Leonard_Cohen", 
		"adjacencies": [  "127757" ]
	}
	, {
		"id": "127757", 
		"name": "Lou_Reed", 
		"adjacencies": [  ]
	}
	, {
		"id": "128350", 
		"name": "Louie,_Louie", 
		"adjacencies": [  "128351" ]
	}
	, {
		"id": "128350", 
		"name": "Louie,_Louie", 
		"adjacencies": [  "128351" ]
	}
	, {
		"id": "128351", 
		"name": "Richard_Berry", 
		"adjacencies": [  ]
	}
	, {
		"id": "129181", 
		"name": "Budgerigar", 
		"adjacencies": [  ]
	}
	, {
		"id": "129512", 
		"name": "Printf", 
		"adjacencies": [  ]
	}
	, {
		"id": "130801", 
		"name": "%3F:", 
		"adjacencies": [  ]
	}
	, {
		"id": "130850", 
		"name": "Telephone_switch", 
		"adjacencies": [  "130852" ]
	}
	, {
		"id": "130852", 
		"name": "Electronic_Switching_System", 
		"adjacencies": [  ]
	}
	, {
		"id": "130856", 
		"name": "5ESS_switch", 
		"adjacencies": [  "130859" ,  "130860" ,  "131538" ,  "131539" ,  "131540" ,  "131541" ,  "131542" ]
	}
	, {
		"id": "130859", 
		"name": "4ESS_switch", 
		"adjacencies": [  "130856" ]
	}
	, {
		"id": "130860", 
		"name": "1ESS_switch", 
		"adjacencies": [  ]
	}
	, {
		"id": "131538", 
		"name": "UNIX-RTR", 
		"adjacencies": [  ]
	}
	, {
		"id": "131539", 
		"name": "Switching_Control_Center_System", 
		"adjacencies": [  ]
	}
	, {
		"id": "131540", 
		"name": "Recent_Change_Memory_Administration_Center", 
		"adjacencies": [  ]
	}
	, {
		"id": "131541", 
		"name": "Class_5_telephone_switch", 
		"adjacencies": [  ]
	}
	, {
		"id": "131551", 
		"name": "Baby_Jessica", 
		"adjacencies": [  "131552" ]
	}
	, {
		"id": "131552", 
		"name": "Jessica_McClure", 
		"adjacencies": [  ]
	}
	, {
		"id": "132166", 
		"name": "Josef_Mengele", 
		"adjacencies": [  ]
	}
	, {
		"id": "132317", 
		"name": "Vmware", 
		"adjacencies": [  ]
	}
	, {
		"id": "132478", 
		"name": "Nixon%27s_Enemies_List", 
		"adjacencies": [  ]
	}
	, {
		"id": "132889", 
		"name": "Bespoke", 
		"adjacencies": [  "132890" ]
	}
	, {
		"id": "132890", 
		"name": "Bristol_Cars", 
		"adjacencies": [  ]
	}
	, {
		"id": "134543", 
		"name": "Isacc_hayes", 
		"adjacencies": [  ]
	}
	, {
		"id": "134549", 
		"name": "Curtis_Mayfield", 
		"adjacencies": [  "134550" ]
	}
	, {
		"id": "134550", 
		"name": "Super_Fly_(film)", 
		"adjacencies": [  "134555" ]
	}
	, {
		"id": "134555", 
		"name": "Four+Tops", 
		"adjacencies": [  "134556" ]
	}
	, {
		"id": "134556", 
		"name": "Four_Tops", 
		"adjacencies": [  ]
	}
	, {
		"id": "134559", 
		"name": "Sly_and_the_family_stone", 
		"adjacencies": [  "134566" ]
	}
	, {
		"id": "134562", 
		"name": "Gil_scott-heron", 
		"adjacencies": [  "134568" ]
	}
	, {
		"id": "134565", 
		"name": "The_Jackson_Sisters", 
		"adjacencies": [  "134573" ]
	}
	, {
		"id": "134566", 
		"name": "temptations", 
		"adjacencies": [  "134567" ]
	}
	, {
		"id": "134567", 
		"name": "Temptations", 
		"adjacencies": [  ]
	}
	, {
		"id": "134568", 
		"name": "Edwin+Starr", 
		"adjacencies": [  "134569" ]
	}
	, {
		"id": "134569", 
		"name": "Edwin_Starr", 
		"adjacencies": [  "134570" ]
	}
	, {
		"id": "134570", 
		"name": "grand+funk+railroad", 
		"adjacencies": [  "134571" ]
	}
	, {
		"id": "134571", 
		"name": "Grand_Funk_Railroad", 
		"adjacencies": [  ]
	}
	, {
		"id": "134573", 
		"name": "George+Baker+Selection", 
		"adjacencies": [  "134574" ]
	}
	, {
		"id": "134574", 
		"name": "George_Baker_Selection", 
		"adjacencies": [  "134576" ]
	}
	, {
		"id": "134576", 
		"name": "buffalo+springfield", 
		"adjacencies": [  "134577" ]
	}
	, {
		"id": "134577", 
		"name": "Buffalo_Springfield", 
		"adjacencies": [  "134578" ,  "134579" ,  "134602" ]
	}
	, {
		"id": "134578", 
		"name": "Louie%2C+Louie", 
		"adjacencies": [  "128350" ]
	}
	, {
		"id": "134579", 
		"name": "Richie_Furay", 
		"adjacencies": [  "134580" ]
	}
	, {
		"id": "134580", 
		"name": "Mamas+and+the+Papas", 
		"adjacencies": [  "134581" ]
	}
	, {
		"id": "134581", 
		"name": "Mamas_and_the_Papas", 
		"adjacencies": [  "134582" ]
	}
	, {
		"id": "134582", 
		"name": "youngbloods", 
		"adjacencies": [  "134583" ]
	}
	, {
		"id": "134583", 
		"name": "Youngbloods", 
		"adjacencies": [  "134584" ]
	}
	, {
		"id": "134584", 
		"name": "The_Youngbloods", 
		"adjacencies": [  ]
	}
	, {
		"id": "134599", 
		"name": "Joan_Baez", 
		"adjacencies": [  ]
	}
	, {
		"id": "134602", 
		"name": "elton+john", 
		"adjacencies": [  "134603" ]
	}
	, {
		"id": "134603", 
		"name": "Elton_john", 
		"adjacencies": [  "134604" ]
	}
	, {
		"id": "134604", 
		"name": "Daniel_(song)", 
		"adjacencies": [  ]
	}
	, {
		"id": "135527", 
		"name": "Sex_Rehab_with_Dr._Drew", 
		"adjacencies": [  "135528" ,  "135529" ,  "135530" ,  "142493" ]
	}
	, {
		"id": "135527", 
		"name": "Sex_Rehab_with_Dr._Drew", 
		"adjacencies": [  "135528" ,  "135529" ,  "135530" ,  "142493" ]
	}
	, {
		"id": "135528", 
		"name": "Penny_Flame", 
		"adjacencies": [  ]
	}
	, {
		"id": "135529", 
		"name": "Duncan_Roy", 
		"adjacencies": [  ]
	}
	, {
		"id": "135530", 
		"name": "Phil_Varone", 
		"adjacencies": [  ]
	}
	, {
		"id": "135744", 
		"name": "William%27s_syndrome", 
		"adjacencies": [  ]
	}
	, {
		"id": "135812", 
		"name": "Sabre", 
		"adjacencies": [  "135813" ]
	}
	, {
		"id": "135813", 
		"name": "Sabre_(disambiguation)", 
		"adjacencies": [  "135814" ,  "135815" ]
	}
	, {
		"id": "135814", 
		"name": "Sabre_Holdings", 
		"adjacencies": [  ]
	}
	, {
		"id": "135815", 
		"name": "Sabre_(computer_system)", 
		"adjacencies": [  "135816" ,  "135819" ,  "135820" ,  "135821" ,  "135826" ]
	}
	, {
		"id": "135816", 
		"name": "Sabre_Travel_Network", 
		"adjacencies": [  ]
	}
	, {
		"id": "135819", 
		"name": "Amadeus_IT_Group", 
		"adjacencies": [  "135822" ]
	}
	, {
		"id": "135820", 
		"name": "Travelocity", 
		"adjacencies": [  ]
	}
	, {
		"id": "135821", 
		"name": "Code_sharing", 
		"adjacencies": [  ]
	}
	, {
		"id": "135822", 
		"name": "Travel_technology", 
		"adjacencies": [  "135823" ]
	}
	, {
		"id": "135823", 
		"name": "ITA_Software", 
		"adjacencies": [  "162901" ]
	}
	, {
		"id": "135823", 
		"name": "ITA_Software", 
		"adjacencies": [  "162901" ]
	}
	, {
		"id": "135826", 
		"name": "Semi_Automatic_Ground_Environment", 
		"adjacencies": [  "135827" ]
	}
	, {
		"id": "135827", 
		"name": "DEW_Line", 
		"adjacencies": [  "135828" ]
	}
	, {
		"id": "135828", 
		"name": "Ballistic_Missile_Early_Warning_System", 
		"adjacencies": [  "135829" ,  "135830" ]
	}
	, {
		"id": "135829", 
		"name": "JOVIAL", 
		"adjacencies": [  ]
	}
	, {
		"id": "135830", 
		"name": "PAVE_PAWS", 
		"adjacencies": [  "135831" ]
	}
	, {
		"id": "135831", 
		"name": "Cape_Cod_Air_Force_Station", 
		"adjacencies": [  "135832" ]
	}
	, {
		"id": "135832", 
		"name": "File:PAVE_PAWS_Cape_Cod_AFS_1986.jpg", 
		"adjacencies": [  "135833" ]
	}
	, {
		"id": "136036", 
		"name": "Alison_Sweeney", 
		"adjacencies": [  "136037" ]
	}
	, {
		"id": "136037", 
		"name": "Caroline_Rhea", 
		"adjacencies": [  ]
	}
	, {
		"id": "136151", 
		"name": "Boston", 
		"adjacencies": [  "136152" ,  "136152" ]
	}
	, {
		"id": "136151", 
		"name": "Boston", 
		"adjacencies": [  "136152" ,  "136152" ]
	}
	, {
		"id": "136152", 
		"name": "Boston_(disambiguation)", 
		"adjacencies": [  "136153" ,  "136153" ]
	}
	, {
		"id": "136152", 
		"name": "Boston_(disambiguation)", 
		"adjacencies": [  "136153" ,  "136153" ]
	}
	, {
		"id": "136153", 
		"name": "Boston_(band)", 
		"adjacencies": [  "136154" ,  "139124" ,  "168830" ]
	}
	, {
		"id": "136153", 
		"name": "Boston_(band)", 
		"adjacencies": [  "136154" ,  "139124" ,  "168830" ]
	}
	, {
		"id": "136153", 
		"name": "Boston_(band)", 
		"adjacencies": [  "136154" ,  "139124" ,  "168830" ]
	}
	, {
		"id": "136154", 
		"name": "Classic_rock", 
		"adjacencies": [  ]
	}
	, {
		"id": "136843", 
		"name": "Cogent", 
		"adjacencies": [  "136844" ]
	}
	, {
		"id": "136844", 
		"name": "Cogent_Communications", 
		"adjacencies": [  "136845" ]
	}
	, {
		"id": "137620", 
		"name": "Ice_T", 
		"adjacencies": [  "137621" ,  "137622" ]
	}
	, {
		"id": "137621", 
		"name": "Gangsta_Rap_(album)", 
		"adjacencies": [  "137623" ]
	}
	, {
		"id": "137622", 
		"name": "Gift_(1993_film)", 
		"adjacencies": [  ]
	}
	, {
		"id": "137623", 
		"name": "File:IceTGangstaRap.jpg", 
		"adjacencies": [  "137624" ]
	}
	, {
		"id": "137944", 
		"name": "Beastie_boys", 
		"adjacencies": [  "137945" ]
	}
	, {
		"id": "137945", 
		"name": "Kate_Schellenbach", 
		"adjacencies": [  "137946" ]
	}
	, {
		"id": "137946", 
		"name": "DJ_Hurricane", 
		"adjacencies": [  "137947" ]
	}
	, {
		"id": "137947", 
		"name": "Mix_Master_Mike", 
		"adjacencies": [  "137948" ,  "137949" ,  "137950" ,  "137951" ]
	}
	, {
		"id": "137948", 
		"name": "DJ_Qbert", 
		"adjacencies": [  "138064" ]
	}
	, {
		"id": "137949", 
		"name": "Doctor_Dre", 
		"adjacencies": [  ]
	}
	, {
		"id": "137950", 
		"name": "Rick_Rubin", 
		"adjacencies": [  "151872" ]
	}
	, {
		"id": "137950", 
		"name": "Rick_Rubin", 
		"adjacencies": [  "151872" ]
	}
	, {
		"id": "137951", 
		"name": "Invisibl_Skratch_Piklz", 
		"adjacencies": [  ]
	}
	, {
		"id": "138064", 
		"name": "Scratch_(film)", 
		"adjacencies": [  "138065" ]
	}
	, {
		"id": "138065", 
		"name": "Z-Trip", 
		"adjacencies": [  ]
	}
	, {
		"id": "138209", 
		"name": "Best_selling_artists", 
		"adjacencies": [  "138247" ]
	}
	, {
		"id": "138228", 
		"name": "Bad_Company", 
		"adjacencies": [  "139197" ]
	}
	, {
		"id": "138228", 
		"name": "Bad_Company", 
		"adjacencies": [  "139197" ]
	}
	, {
		"id": "138232", 
		"name": "Supergroup", 
		"adjacencies": [  "138233" ]
	}
	, {
		"id": "138233", 
		"name": "Supergroup_(music)", 
		"adjacencies": [  "138234" ,  "138328" ,  "138329" ,  "138330" ,  "138331" ,  "138332" ]
	}
	, {
		"id": "138234", 
		"name": "Bad_Company_(album)", 
		"adjacencies": [  ]
	}
	, {
		"id": "138247", 
		"name": "Foreigner", 
		"adjacencies": [  "138248" ]
	}
	, {
		"id": "138248", 
		"name": "Foreigner", 
		"adjacencies": [  "138249" ,  "138249" ]
	}
	, {
		"id": "138248", 
		"name": "Foreigner", 
		"adjacencies": [  "138249" ,  "138249" ]
	}
	, {
		"id": "138249", 
		"name": "Foreigner_(band)", 
		"adjacencies": [  "139185" ]
	}
	, {
		"id": "138249", 
		"name": "Foreigner_(band)", 
		"adjacencies": [  "139185" ]
	}
	, {
		"id": "138328", 
		"name": "Duff_McKagan", 
		"adjacencies": [  ]
	}
	, {
		"id": "138329", 
		"name": "Praxis_(band)", 
		"adjacencies": [  "138389" ,  "138390" ]
	}
	, {
		"id": "138330", 
		"name": "Ol%27_Dirty_Bastard", 
		"adjacencies": [  ]
	}
	, {
		"id": "138331", 
		"name": "Q-Tip_(rapper)", 
		"adjacencies": [  ]
	}
	, {
		"id": "138332", 
		"name": "Mos_Def", 
		"adjacencies": [  ]
	}
	, {
		"id": "138389", 
		"name": "Bill_Laswell", 
		"adjacencies": [  ]
	}
	, {
		"id": "138390", 
		"name": "fuel+cell", 
		"adjacencies": [  "138391" ]
	}
	, {
		"id": "138391", 
		"name": "Fuel_cell", 
		"adjacencies": [  ]
	}
	, {
		"id": "138394", 
		"name": "Apollo_13", 
		"adjacencies": [  ]
	}
	, {
		"id": "138489", 
		"name": "Doughty", 
		"adjacencies": [  "138490" ]
	}
	, {
		"id": "138490", 
		"name": "Mike_Doughty", 
		"adjacencies": [  ]
	}
	, {
		"id": "138490", 
		"name": "Mike_Doughty", 
		"adjacencies": [  ]
	}
	, {
		"id": "138566", 
		"name": "Hawaii", 
		"adjacencies": [  "138567" ,  "138568" ,  "138569" ]
	}
	, {
		"id": "138567", 
		"name": "Haleakala_National_Park", 
		"adjacencies": [  ]
	}
	, {
		"id": "138568", 
		"name": "Leprosy", 
		"adjacencies": [  ]
	}
	, {
		"id": "138569", 
		"name": "USS_Arizona_Memorial", 
		"adjacencies": [  "138570" ]
	}
	, {
		"id": "138570", 
		"name": "File:USS_Arizona_oil_seepage.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "138946", 
		"name": "Kiss", 
		"adjacencies": [  "138947" ]
	}
	, {
		"id": "138947", 
		"name": "Kiss_(disambiguation)", 
		"adjacencies": [  "138948" ]
	}
	, {
		"id": "138948", 
		"name": "Kiss_(band)", 
		"adjacencies": [  ]
	}
	, {
		"id": "139094", 
		"name": "Journey", 
		"adjacencies": [  "139095" ]
	}
	, {
		"id": "139095", 
		"name": "Journey_(band)", 
		"adjacencies": [  "139096" ]
	}
	, {
		"id": "139096", 
		"name": "Don%27t_Stop_Believin%27", 
		"adjacencies": [  ]
	}
	, {
		"id": "139099", 
		"name": "Kansas", 
		"adjacencies": [  "139100" ]
	}
	, {
		"id": "139100", 
		"name": "Kansas_(disambiguation)", 
		"adjacencies": [  "139101" ]
	}
	, {
		"id": "139101", 
		"name": "Kansas_(band)", 
		"adjacencies": [  "139102" ]
	}
	, {
		"id": "139102", 
		"name": "Carry_On_Wayward_Son", 
		"adjacencies": [  ]
	}
	, {
		"id": "139117", 
		"name": "REO_Speedwagon", 
		"adjacencies": [  ]
	}
	, {
		"id": "139120", 
		"name": "Take_the_long_way_home", 
		"adjacencies": [  "139121" ]
	}
	, {
		"id": "139121", 
		"name": "Supertramp", 
		"adjacencies": [  ]
	}
	, {
		"id": "139124", 
		"name": "Rockman_(music)", 
		"adjacencies": [  ]
	}
	, {
		"id": "139127", 
		"name": "KISS_(band)", 
		"adjacencies": [  "139149" ]
	}
	, {
		"id": "139130", 
		"name": "Queen", 
		"adjacencies": [  "139131" ]
	}
	, {
		"id": "139131", 
		"name": "Queen_(band)", 
		"adjacencies": [  "139132" ]
	}
	, {
		"id": "139132", 
		"name": "We_Are_the_Champions", 
		"adjacencies": [  "139147" ]
	}
	, {
		"id": "139147", 
		"name": "The+Who", 
		"adjacencies": [  "139148" ]
	}
	, {
		"id": "139148", 
		"name": "The_Who", 
		"adjacencies": [  ]
	}
	, {
		"id": "139149", 
		"name": "Another+Brick+in+the+Wall", 
		"adjacencies": [  "139150" ]
	}
	, {
		"id": "139150", 
		"name": "Another_Brick_in_the_Wall", 
		"adjacencies": [  ]
	}
	, {
		"id": "139185", 
		"name": "bad+company", 
		"adjacencies": [  "138228" ]
	}
	, {
		"id": "139197", 
		"name": "Fleetwood+Mac", 
		"adjacencies": [  "139198" ]
	}
	, {
		"id": "139198", 
		"name": "Fleetwood_Mac", 
		"adjacencies": [  "139199" ]
	}
	, {
		"id": "139199", 
		"name": "Rumours", 
		"adjacencies": [  ]
	}
	, {
		"id": "139653", 
		"name": "The_Bangles", 
		"adjacencies": [  ]
	}
	, {
		"id": "140308", 
		"name": "Congestion_control", 
		"adjacencies": [  ]
	}
	, {
		"id": "140313", 
		"name": "Stack_(data_structure)", 
		"adjacencies": [  "140314" ]
	}
	, {
		"id": "140314", 
		"name": "local+variables", 
		"adjacencies": [  "140315" ]
	}
	, {
		"id": "140315", 
		"name": "Local_variables", 
		"adjacencies": [  "91304" ]
	}
	, {
		"id": "140393", 
		"name": "Donut", 
		"adjacencies": [  "140394" ]
	}
	, {
		"id": "140394", 
		"name": "Dunkin%27_Donuts", 
		"adjacencies": [  ]
	}
	, {
		"id": "140601", 
		"name": "Radix_sort", 
		"adjacencies": [  ]
	}
	, {
		"id": "141271", 
		"name": "Waas", 
		"adjacencies": [  "141272" ]
	}
	, {
		"id": "141272", 
		"name": "WAAS_(disambiguation)", 
		"adjacencies": [  "141273" ]
	}
	, {
		"id": "141273", 
		"name": "Wide_area_application_services", 
		"adjacencies": [  "141274" ]
	}
	, {
		"id": "141274", 
		"name": "WAN_optimization", 
		"adjacencies": [  "141279" ]
	}
	, {
		"id": "141342", 
		"name": "Greenspun%27s_Tenth_Rule", 
		"adjacencies": [  "141343" ]
	}
	, {
		"id": "141343", 
		"name": "Philip_Greenspun", 
		"adjacencies": [  ]
	}
	, {
		"id": "141556", 
		"name": "Orb_weaver", 
		"adjacencies": [  ]
	}
	, {
		"id": "141562", 
		"name": "Dazzler_(weapon)", 
		"adjacencies": [  "141564" ,  "141566" ]
	}
	, {
		"id": "141563", 
		"name": "Strait_of_Juan_de_Fuca_laser_incident", 
		"adjacencies": [  ]
	}
	, {
		"id": "141564", 
		"name": "Flashbang", 
		"adjacencies": [  ]
	}
	, {
		"id": "141566", 
		"name": "Terra-3", 
		"adjacencies": [  ]
	}
	, {
		"id": "141672", 
		"name": "Computable_function", 
		"adjacencies": [  ]
	}
	, {
		"id": "142004", 
		"name": "Davy_crockett", 
		"adjacencies": [  ]
	}
	, {
		"id": "142113", 
		"name": "Roux", 
		"adjacencies": [  "142114" ]
	}
	, {
		"id": "142114", 
		"name": "Clarified_butter", 
		"adjacencies": [  "142115" ]
	}
	, {
		"id": "142115", 
		"name": "Ghee", 
		"adjacencies": [  ]
	}
	, {
		"id": "142159", 
		"name": "Large_hadron_collider", 
		"adjacencies": [  "142160" ,  "142161" ]
	}
	, {
		"id": "142160", 
		"name": "Higgs_boson", 
		"adjacencies": [  "142162" ]
	}
	, {
		"id": "142161", 
		"name": "Katherine_McAlpine", 
		"adjacencies": [  ]
	}
	, {
		"id": "142162", 
		"name": "Feynman_diagram", 
		"adjacencies": [  "142163" ]
	}
	, {
		"id": "142163", 
		"name": "Richard_Feynman", 
		"adjacencies": [  "142173" ,  "142174" ]
	}
	, {
		"id": "142173", 
		"name": "Isolation_tank", 
		"adjacencies": [  ]
	}
	, {
		"id": "142174", 
		"name": "John_C._Lilly", 
		"adjacencies": [  ]
	}
	, {
		"id": "142246", 
		"name": "Disco", 
		"adjacencies": [  "142294" ,  "142323" ,  "142324" ]
	}
	, {
		"id": "142246", 
		"name": "Disco", 
		"adjacencies": [  "142294" ,  "142323" ,  "142324" ]
	}
	, {
		"id": "142246", 
		"name": "Disco", 
		"adjacencies": [  "142294" ,  "142323" ,  "142324" ]
	}
	, {
		"id": "142294", 
		"name": "Number-one_dance_hits_of_1978_(USA)", 
		"adjacencies": [  ]
	}
	, {
		"id": "142297", 
		"name": "Kc_and_the_sunshine_band", 
		"adjacencies": [  "142246" ,  "142321" ]
	}
	, {
		"id": "142297", 
		"name": "Kc_and_the_sunshine_band", 
		"adjacencies": [  "142246" ,  "142321" ]
	}
	, {
		"id": "142316", 
		"name": "bernadette+peters", 
		"adjacencies": [  "142317" ]
	}
	, {
		"id": "142317", 
		"name": "Bernadette_Peters", 
		"adjacencies": [  ]
	}
	, {
		"id": "142321", 
		"name": "donna+summers", 
		"adjacencies": [  "142322" ]
	}
	, {
		"id": "142322", 
		"name": "Donna_Summers", 
		"adjacencies": [  ]
	}
	, {
		"id": "142323", 
		"name": "Barry_Gibb", 
		"adjacencies": [  ]
	}
	, {
		"id": "142324", 
		"name": "Chic_(band)", 
		"adjacencies": [  ]
	}
	, {
		"id": "142385", 
		"name": "Hotel_rwanda", 
		"adjacencies": [  "142386" ]
	}
	, {
		"id": "142386", 
		"name": "Van+mccoy", 
		"adjacencies": [  "142387" ]
	}
	, {
		"id": "142387", 
		"name": "Van_Mccoy", 
		"adjacencies": [  "142394" ]
	}
	, {
		"id": "142390", 
		"name": "Turn_the_beat_around", 
		"adjacencies": [  "142391" ]
	}
	, {
		"id": "142391", 
		"name": "Vicki_Sue_Robinson", 
		"adjacencies": [  "142392" ]
	}
	, {
		"id": "142392", 
		"name": "the+trammps", 
		"adjacencies": [  "142393" ]
	}
	, {
		"id": "142393", 
		"name": "The_Trammps", 
		"adjacencies": [  "142409" ]
	}
	, {
		"id": "142394", 
		"name": "sister+sledge", 
		"adjacencies": [  "142395" ]
	}
	, {
		"id": "142395", 
		"name": "Sister_Sledge", 
		"adjacencies": [  "142407" ]
	}
	, {
		"id": "142404", 
		"name": "Gloria_Gaynor", 
		"adjacencies": [  "142405" ]
	}
	, {
		"id": "142405", 
		"name": "I_Will_Survive", 
		"adjacencies": [  ]
	}
	, {
		"id": "142407", 
		"name": "village+people", 
		"adjacencies": [  "142408" ]
	}
	, {
		"id": "142408", 
		"name": "Village_people", 
		"adjacencies": [  "142436" ]
	}
	, {
		"id": "142409", 
		"name": "funkytown", 
		"adjacencies": [  "142410" ]
	}
	, {
		"id": "142410", 
		"name": "Funkytown", 
		"adjacencies": [  "142411" ,  "142412" ,  "142428" ]
	}
	, {
		"id": "142411", 
		"name": "Selena", 
		"adjacencies": [  "142425" ]
	}
	, {
		"id": "142412", 
		"name": "Yolanda_Sald%C3%ADvar", 
		"adjacencies": [  ]
	}
	, {
		"id": "142425", 
		"name": "shake+your+grove+thing", 
		"adjacencies": [  "142426" ]
	}
	, {
		"id": "142426", 
		"name": "shake+your+groove+thing", 
		"adjacencies": [  "142427" ]
	}
	, {
		"id": "142427", 
		"name": "Shake_Your_Groove_Thing", 
		"adjacencies": [  "142432" ]
	}
	, {
		"id": "142428", 
		"name": "kool+%26+the+gang", 
		"adjacencies": [  "142429" ]
	}
	, {
		"id": "142429", 
		"name": "Kool_%26_the_gang", 
		"adjacencies": [  "142442" ]
	}
	, {
		"id": "142432", 
		"name": "rose+royce", 
		"adjacencies": [  "142433" ]
	}
	, {
		"id": "142433", 
		"name": "Rose_Royce", 
		"adjacencies": [  "142434" ,  "142444" ]
	}
	, {
		"id": "142434", 
		"name": "Norman_Whitfield", 
		"adjacencies": [  ]
	}
	, {
		"id": "142436", 
		"name": "alcia+bridge", 
		"adjacencies": [  "142437" ]
	}
	, {
		"id": "142437", 
		"name": "alicia+bridges", 
		"adjacencies": [  "142438" ]
	}
	, {
		"id": "142438", 
		"name": "Alicia_Bridges", 
		"adjacencies": [  "142439" ]
	}
	, {
		"id": "142439", 
		"name": "Hot+Stuff", 
		"adjacencies": [  "142440" ]
	}
	, {
		"id": "142440", 
		"name": "Hot_Stuff", 
		"adjacencies": [  "142441" ]
	}
	, {
		"id": "142441", 
		"name": "Hot_Stuff_(Donna_Summer_song)", 
		"adjacencies": [  ]
	}
	, {
		"id": "142442", 
		"name": "dancing+machine", 
		"adjacencies": [  "142443" ]
	}
	, {
		"id": "142443", 
		"name": "Dancing_Machine", 
		"adjacencies": [  ]
	}
	, {
		"id": "142444", 
		"name": "le+freak", 
		"adjacencies": [  "142445" ]
	}
	, {
		"id": "142445", 
		"name": "Le_Freak", 
		"adjacencies": [  ]
	}
	, {
		"id": "142448", 
		"name": "Bee_gees", 
		"adjacencies": [  ]
	}
	, {
		"id": "142490", 
		"name": "Miss_Oregon", 
		"adjacencies": [  "142492" ]
	}
	, {
		"id": "142492", 
		"name": "Sex+Rehab+with+Dr.+Drew", 
		"adjacencies": [  "135527" ]
	}
	, {
		"id": "142493", 
		"name": "Kari_Ann_Peniche", 
		"adjacencies": [  "142501" ]
	}
	, {
		"id": "142501", 
		"name": "Mindy_McCready", 
		"adjacencies": [  ]
	}
	, {
		"id": "142581", 
		"name": "emily+haines", 
		"adjacencies": [  "142582" ]
	}
	, {
		"id": "142582", 
		"name": "Emily_Haines", 
		"adjacencies": [  ]
	}
	, {
		"id": "142629", 
		"name": "Sarah_palin", 
		"adjacencies": [  ]
	}
	, {
		"id": "143057", 
		"name": "Piccolo", 
		"adjacencies": [  ]
	}
	, {
		"id": "143332", 
		"name": "John_George_Haigh", 
		"adjacencies": [  ]
	}
	, {
		"id": "143426", 
		"name": "Adlerian", 
		"adjacencies": [  ]
	}
	, {
		"id": "143568", 
		"name": "Norah_jones", 
		"adjacencies": [  ]
	}
	, {
		"id": "143666", 
		"name": "Babbage%27s", 
		"adjacencies": [  ]
	}
	, {
		"id": "143839", 
		"name": "Pulp_fiction", 
		"adjacencies": [  "143840" ,  "143840" ]
	}
	, {
		"id": "143839", 
		"name": "Pulp_fiction", 
		"adjacencies": [  "143840" ,  "143840" ]
	}
	, {
		"id": "143840", 
		"name": "Pulp_Fiction_(film)", 
		"adjacencies": [  "143841" ]
	}
	, {
		"id": "143840", 
		"name": "Pulp_Fiction_(film)", 
		"adjacencies": [  "143841" ]
	}
	, {
		"id": "143841", 
		"name": "Maria_de_Medeiros", 
		"adjacencies": [  ]
	}
	, {
		"id": "143852", 
		"name": "One_dollar_bill", 
		"adjacencies": [  "143853" ]
	}
	, {
		"id": "143853", 
		"name": "United_States_one-dollar_bill", 
		"adjacencies": [  "143854" ,  "143855" ,  "143856" ,  "143857" ]
	}
	, {
		"id": "143854", 
		"name": "Educational_Series", 
		"adjacencies": [  "143859" ,  "143860" ]
	}
	, {
		"id": "143855", 
		"name": "Federal_Reserve_Bank_Note", 
		"adjacencies": [  ]
	}
	, {
		"id": "143856", 
		"name": "Great_Seal_of_the_United_States", 
		"adjacencies": [  "143858" ]
	}
	, {
		"id": "143857", 
		"name": "Eye_of_Providence", 
		"adjacencies": [  ]
	}
	, {
		"id": "143858", 
		"name": "Rule_of_tincture", 
		"adjacencies": [  ]
	}
	, {
		"id": "143859", 
		"name": "File:1896$5obv.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "143860", 
		"name": "File:1896$2obv.jpg", 
		"adjacencies": [  "143861" ]
	}
	, {
		"id": "144380", 
		"name": "Sugar_and_spice", 
		"adjacencies": [  "144381" ]
	}
	, {
		"id": "144381", 
		"name": "Sugar_and_Spice_(song)", 
		"adjacencies": [  ]
	}
	, {
		"id": "144474", 
		"name": "Binary_tree", 
		"adjacencies": [  ]
	}
	, {
		"id": "144496", 
		"name": "Sand+Bubbler+Crab", 
		"adjacencies": [  "144497" ]
	}
	, {
		"id": "144497", 
		"name": "Sand_Bubbler_Crab", 
		"adjacencies": [  "144498" ]
	}
	, {
		"id": "144502", 
		"name": "Ethernet", 
		"adjacencies": [  "144505" ,  "144506" ,  "144522" ]
	}
	, {
		"id": "144505", 
		"name": "Internet_Group_Management_Protocol", 
		"adjacencies": [  ]
	}
	, {
		"id": "144506", 
		"name": "MAC_address", 
		"adjacencies": [  ]
	}
	, {
		"id": "144522", 
		"name": "DNS", 
		"adjacencies": [  "144523" ]
	}
	, {
		"id": "144523", 
		"name": "DNS", 
		"adjacencies": [  "144524" ]
	}
	, {
		"id": "144524", 
		"name": "Domain_Name_System", 
		"adjacencies": [  ]
	}
	, {
		"id": "144685", 
		"name": "Akon", 
		"adjacencies": [  "144686" ,  "144688" ]
	}
	, {
		"id": "144686", 
		"name": "Brittany+Gastineau", 
		"adjacencies": [  "144687" ]
	}
	, {
		"id": "144687", 
		"name": "Brittany_Gastineau", 
		"adjacencies": [  ]
	}
	, {
		"id": "144688", 
		"name": "ludo", 
		"adjacencies": [  "144689" ]
	}
	, {
		"id": "144689", 
		"name": "Ludo", 
		"adjacencies": [  "144690" ]
	}
	, {
		"id": "144690", 
		"name": "Ludo_(band)", 
		"adjacencies": [  ]
	}
	, {
		"id": "144801", 
		"name": "Nes", 
		"adjacencies": [  "144802" ]
	}
	, {
		"id": "144802", 
		"name": "Nintendo_Entertainment_System", 
		"adjacencies": [  "144803" ]
	}
	, {
		"id": "144803", 
		"name": "Super_Nintendo_Entertainment_System", 
		"adjacencies": [  "144804" ]
	}
	, {
		"id": "144804", 
		"name": "Nintendo_64", 
		"adjacencies": [  "144805" ]
	}
	, {
		"id": "144805", 
		"name": "Nintendo_GameCube", 
		"adjacencies": [  "144806" ]
	}
	, {
		"id": "144806", 
		"name": "Wii", 
		"adjacencies": [  ]
	}
	, {
		"id": "144806", 
		"name": "Wii", 
		"adjacencies": [  ]
	}
	, {
		"id": "144828", 
		"name": "Mims", 
		"adjacencies": [  "144844" ]
	}
	, {
		"id": "144831", 
		"name": "Aubrey_O%27Day", 
		"adjacencies": [  ]
	}
	, {
		"id": "144844", 
		"name": "Mims_(rapper)", 
		"adjacencies": [  "144853" ]
	}
	, {
		"id": "144853", 
		"name": "miss+hawiann+tropics", 
		"adjacencies": [  "144854" ]
	}
	, {
		"id": "144854", 
		"name": "miss+hawaiian+tropic", 
		"adjacencies": [  "144855" ]
	}
	, {
		"id": "144855", 
		"name": "Miss_Hawaiian_Tropic", 
		"adjacencies": [  "144856" ]
	}
	, {
		"id": "144856", 
		"name": "Rebecca_DiPietro", 
		"adjacencies": [  ]
	}
	, {
		"id": "144910", 
		"name": "Marillion", 
		"adjacencies": [  "144912" ]
	}
	, {
		"id": "144912", 
		"name": "The_Silmarillion", 
		"adjacencies": [  "144913" ,  "144914" ]
	}
	, {
		"id": "144913", 
		"name": "Silmaril", 
		"adjacencies": [  "144918" ]
	}
	, {
		"id": "144914", 
		"name": "401k", 
		"adjacencies": [  "144915" ]
	}
	, {
		"id": "144915", 
		"name": "401k", 
		"adjacencies": [  "144916" ,  "144917" ]
	}
	, {
		"id": "144916", 
		"name": "403(b)", 
		"adjacencies": [  ]
	}
	, {
		"id": "144917", 
		"name": "457_plan", 
		"adjacencies": [  ]
	}
	, {
		"id": "144918", 
		"name": "Holy_Grail", 
		"adjacencies": [  "144919" ]
	}
	, {
		"id": "144919", 
		"name": "Holy_Chalice", 
		"adjacencies": [  ]
	}
	, {
		"id": "145244", 
		"name": "Joe_Jackson", 
		"adjacencies": [  "145245" ]
	}
	, {
		"id": "145245", 
		"name": "Joe_Jackson_(musician)", 
		"adjacencies": [  ]
	}
	, {
		"id": "145342", 
		"name": "The_Main_Ingredient", 
		"adjacencies": [  ]
	}
	, {
		"id": "145361", 
		"name": "The_Gap_Band", 
		"adjacencies": [  ]
	}
	, {
		"id": "145948", 
		"name": "Pine_nuts", 
		"adjacencies": [  "145949" ]
	}
	, {
		"id": "145949", 
		"name": "Pesto", 
		"adjacencies": [  ]
	}
	, {
		"id": "146292", 
		"name": "rob+reiner", 
		"adjacencies": [  "146293" ]
	}
	, {
		"id": "146293", 
		"name": "Rob_Reiner", 
		"adjacencies": [  ]
	}
	, {
		"id": "146936", 
		"name": "Factorial", 
		"adjacencies": [  ]
	}
	, {
		"id": "147008", 
		"name": "Us_constitution", 
		"adjacencies": [  "147010" ]
	}
	, {
		"id": "147010", 
		"name": "File:Constitution_Pg4of4_AC.jpg", 
		"adjacencies": [  "147011" ]
	}
	, {
		"id": "147012", 
		"name": "decleration+of+independance", 
		"adjacencies": [  "147013" ]
	}
	, {
		"id": "147013", 
		"name": "declaration+of+independence", 
		"adjacencies": [  "147014" ]
	}
	, {
		"id": "147014", 
		"name": "Declaration_of_independence", 
		"adjacencies": [  "147015" ]
	}
	, {
		"id": "147015", 
		"name": "United_States_Declaration_of_Independence", 
		"adjacencies": [  "147016" ]
	}
	, {
		"id": "147016", 
		"name": "File:Us_declaration_independence.jpg", 
		"adjacencies": [  "147017" ]
	}
	, {
		"id": "147040", 
		"name": "Jersey_shore", 
		"adjacencies": [  "147041" ,  "147041" ,  "147041" ,  "147041" ,  "147041" ]
	}
	, {
		"id": "147040", 
		"name": "Jersey_shore", 
		"adjacencies": [  "147041" ,  "147041" ,  "147041" ,  "147041" ,  "147041" ]
	}
	, {
		"id": "147040", 
		"name": "Jersey_shore", 
		"adjacencies": [  "147041" ,  "147041" ,  "147041" ,  "147041" ,  "147041" ]
	}
	, {
		"id": "147040", 
		"name": "Jersey_shore", 
		"adjacencies": [  "147041" ,  "147041" ,  "147041" ,  "147041" ,  "147041" ]
	}
	, {
		"id": "147040", 
		"name": "Jersey_shore", 
		"adjacencies": [  "147041" ,  "147041" ,  "147041" ,  "147041" ,  "147041" ]
	}
	, {
		"id": "147041", 
		"name": "Jersey_Shore_(TV_series)", 
		"adjacencies": [  "147042" ,  "147738" ,  "154396" ]
	}
	, {
		"id": "147041", 
		"name": "Jersey_Shore_(TV_series)", 
		"adjacencies": [  "147042" ,  "147738" ,  "154396" ]
	}
	, {
		"id": "147041", 
		"name": "Jersey_Shore_(TV_series)", 
		"adjacencies": [  "147042" ,  "147738" ,  "154396" ]
	}
	, {
		"id": "147041", 
		"name": "Jersey_Shore_(TV_series)", 
		"adjacencies": [  "147042" ,  "147738" ,  "154396" ]
	}
	, {
		"id": "147041", 
		"name": "Jersey_Shore_(TV_series)", 
		"adjacencies": [  "147042" ,  "147738" ,  "154396" ]
	}
	, {
		"id": "147042", 
		"name": "Jersey_Shore", 
		"adjacencies": [  "147043" ]
	}
	, {
		"id": "147043", 
		"name": "Syringe_Tide", 
		"adjacencies": [  ]
	}
	, {
		"id": "147161", 
		"name": "Init", 
		"adjacencies": [  ]
	}
	, {
		"id": "147426", 
		"name": "UDP", 
		"adjacencies": [  "147427" ]
	}
	, {
		"id": "147427", 
		"name": "User_Datagram_Protocol", 
		"adjacencies": [  ]
	}
	, {
		"id": "147538", 
		"name": "womanizer", 
		"adjacencies": [  "147539" ]
	}
	, {
		"id": "147539", 
		"name": "Womanizer", 
		"adjacencies": [  "147540" ]
	}
	, {
		"id": "147540", 
		"name": "Womanizer_(song)", 
		"adjacencies": [  ]
	}
	, {
		"id": "147738", 
		"name": "Guido_(slang)", 
		"adjacencies": [  ]
	}
	, {
		"id": "147738", 
		"name": "Guido_(slang)", 
		"adjacencies": [  ]
	}
	, {
		"id": "147957", 
		"name": "Wayne%27s_World", 
		"adjacencies": [  "147958" ,  "147971" ]
	}
	, {
		"id": "147958", 
		"name": "Wayne%27s_World_(film)", 
		"adjacencies": [  "147959" ,  "147960" ,  "147964" ]
	}
	, {
		"id": "147959", 
		"name": "Tia_Carrere", 
		"adjacencies": [  ]
	}
	, {
		"id": "147960", 
		"name": "Spindle_(sculpture)", 
		"adjacencies": [  "147961" ]
	}
	, {
		"id": "147961", 
		"name": "Cadillac_Ranch", 
		"adjacencies": [  "147962" ,  "147963" ]
	}
	, {
		"id": "147962", 
		"name": "Brian_Deneke", 
		"adjacencies": [  ]
	}
	, {
		"id": "147963", 
		"name": "Stanley_Marsh_3", 
		"adjacencies": [  ]
	}
	, {
		"id": "147964", 
		"name": "Wayne%27s_World_2", 
		"adjacencies": [  ]
	}
	, {
		"id": "147971", 
		"name": "Church_Lady", 
		"adjacencies": [  ]
	}
	, {
		"id": "148203", 
		"name": "The_Books", 
		"adjacencies": [  ]
	}
	, {
		"id": "148591", 
		"name": "Steven_segal", 
		"adjacencies": [  ]
	}
	, {
		"id": "148670", 
		"name": "Neutrino", 
		"adjacencies": [  "148671" ,  "148672" ]
	}
	, {
		"id": "148671", 
		"name": "Super-Kamiokande", 
		"adjacencies": [  "148673" ]
	}
	, {
		"id": "148672", 
		"name": "Fermion", 
		"adjacencies": [  ]
	}
	, {
		"id": "148673", 
		"name": "Cherenkov_radiation", 
		"adjacencies": [  "148674" ]
	}
	, {
		"id": "148674", 
		"name": "List_of_light_sources", 
		"adjacencies": [  "148675" ,  "148676" ,  "148677" ]
	}
	, {
		"id": "148675", 
		"name": "Foxfire_(bioluminescence)", 
		"adjacencies": [  ]
	}
	, {
		"id": "148676", 
		"name": "Sulfur_lamp", 
		"adjacencies": [  ]
	}
	, {
		"id": "148677", 
		"name": "Tanning_lamp", 
		"adjacencies": [  "148678" ,  "148678" ,  "148679" ]
	}
	, {
		"id": "148678", 
		"name": "Tanning_bed", 
		"adjacencies": [  "148680" ,  "148681" ,  "148685" ]
	}
	, {
		"id": "148678", 
		"name": "Tanning_bed", 
		"adjacencies": [  "148680" ,  "148681" ,  "148685" ]
	}
	, {
		"id": "148679", 
		"name": "Tanning_booth", 
		"adjacencies": [  ]
	}
	, {
		"id": "148680", 
		"name": "Arc_eye", 
		"adjacencies": [  ]
	}
	, {
		"id": "148681", 
		"name": "Sunless_tanning", 
		"adjacencies": [  "148682" ]
	}
	, {
		"id": "148685", 
		"name": "Tanning_addiction", 
		"adjacencies": [  "148686" ]
	}
	, {
		"id": "148686", 
		"name": "guido", 
		"adjacencies": [  "148687" ]
	}
	, {
		"id": "148687", 
		"name": "Guido", 
		"adjacencies": [  "147738" ]
	}
	, {
		"id": "148757", 
		"name": "Dead_Man%27s_Bones", 
		"adjacencies": [  ]
	}
	, {
		"id": "148846", 
		"name": "IPv4", 
		"adjacencies": [  ]
	}
	, {
		"id": "149019", 
		"name": "BeOS", 
		"adjacencies": [  "149020" ]
	}
	, {
		"id": "149020", 
		"name": "Be_File_System", 
		"adjacencies": [  "149021" ]
	}
	, {
		"id": "149021", 
		"name": "Comparison_of_file_systems", 
		"adjacencies": [  "149022" ,  "149023" ,  "149024" ]
	}
	, {
		"id": "149022", 
		"name": "Veritas_File_System", 
		"adjacencies": [  ]
	}
	, {
		"id": "149023", 
		"name": "ZFS", 
		"adjacencies": [  ]
	}
	, {
		"id": "149024", 
		"name": "OCFS2", 
		"adjacencies": [  ]
	}
	, {
		"id": "149417", 
		"name": "Silent_Spring", 
		"adjacencies": [  ]
	}
	, {
		"id": "149468", 
		"name": "Ray_J", 
		"adjacencies": [  "149469" ]
	}
	, {
		"id": "149468", 
		"name": "Ray_J", 
		"adjacencies": [  "149469" ]
	}
	, {
		"id": "149469", 
		"name": "For_the_Love_of_Ray_J_(season_2)", 
		"adjacencies": [  ]
	}
	, {
		"id": "149496", 
		"name": "Stonebreaker", 
		"adjacencies": [  "149497" ,  "149498" ]
	}
	, {
		"id": "149497", 
		"name": "http://en.wikipedia.org/w/index.php?title=Stonebreaker&redirect=no", 
		"adjacencies": [  ]
	}
	, {
		"id": "149498", 
		"name": "PostgreSQL", 
		"adjacencies": [  "149499" ]
	}
	, {
		"id": "149499", 
		"name": "PostgreSQL", 
		"adjacencies": [  ]
	}
	, {
		"id": "149934", 
		"name": "Jay_z", 
		"adjacencies": [  "149949" ]
	}
	, {
		"id": "149949", 
		"name": "Beyonc%C3%A9_Knowles", 
		"adjacencies": [  ]
	}
	, {
		"id": "150672", 
		"name": "Boxee", 
		"adjacencies": [  ]
	}
	, {
		"id": "150818", 
		"name": "Gangsta%27s_Paradise", 
		"adjacencies": [  "150819" ]
	}
	, {
		"id": "150819", 
		"name": "Gangsta%27s_Paradise_(song)", 
		"adjacencies": [  "150821" ]
	}
	, {
		"id": "150821", 
		"name": "Coolio", 
		"adjacencies": [  ]
	}
	, {
		"id": "150929", 
		"name": "Immanence", 
		"adjacencies": [  ]
	}
	, {
		"id": "150966", 
		"name": "Gen_x", 
		"adjacencies": [  "150967" ]
	}
	, {
		"id": "150967", 
		"name": "gen+y", 
		"adjacencies": [  "150968" ]
	}
	, {
		"id": "150968", 
		"name": "Gen_y", 
		"adjacencies": [  ]
	}
	, {
		"id": "151782", 
		"name": "99_problems", 
		"adjacencies": [  "137950" ,  "151783" ]
	}
	, {
		"id": "151782", 
		"name": "99_problems", 
		"adjacencies": [  "137950" ,  "151783" ]
	}
	, {
		"id": "151783", 
		"name": "Vincent_Gallo", 
		"adjacencies": [  ]
	}
	, {
		"id": "152406", 
		"name": "Krs_one", 
		"adjacencies": [  ]
	}
	, {
		"id": "152529", 
		"name": "Herbie_Hancock", 
		"adjacencies": [  "152530" ]
	}
	, {
		"id": "152530", 
		"name": "Scratching", 
		"adjacencies": [  ]
	}
	, {
		"id": "152537", 
		"name": "Sugarhill_Gang", 
		"adjacencies": [  "152538" ]
	}
	, {
		"id": "152538", 
		"name": "Old_school_hip_hop", 
		"adjacencies": [  "152558" ]
	}
	, {
		"id": "152558", 
		"name": "I+need+a+beat", 
		"adjacencies": [  "152559" ]
	}
	, {
		"id": "152559", 
		"name": "I_Need_A_Beat", 
		"adjacencies": [  "152560" ]
	}
	, {
		"id": "152560", 
		"name": "me+myself+and+i", 
		"adjacencies": [  "152561" ]
	}
	, {
		"id": "152561", 
		"name": "Me_Myself_And_I", 
		"adjacencies": [  "152562" ]
	}
	, {
		"id": "152562", 
		"name": "Me_Myself_and_I_(De_La_Soul_song)", 
		"adjacencies": [  "152585" ]
	}
	, {
		"id": "152565", 
		"name": "Paid_in_full", 
		"adjacencies": [  "152566" ,  "152566" ]
	}
	, {
		"id": "152565", 
		"name": "Paid_in_full", 
		"adjacencies": [  "152566" ,  "152566" ]
	}
	, {
		"id": "152566", 
		"name": "Paid_in_Full_(Eric_B._%26_Rakim_song)", 
		"adjacencies": [  "152567" ,  "152582" ]
	}
	, {
		"id": "152566", 
		"name": "Paid_in_Full_(Eric_B._%26_Rakim_song)", 
		"adjacencies": [  "152567" ,  "152582" ]
	}
	, {
		"id": "152567", 
		"name": "just+a+friend", 
		"adjacencies": [  "152568" ]
	}
	, {
		"id": "152568", 
		"name": "Just_A_Friend", 
		"adjacencies": [  "152569" ]
	}
	, {
		"id": "152569", 
		"name": "he%27s+the+DJ", 
		"adjacencies": [  "152570" ]
	}
	, {
		"id": "152570", 
		"name": "He%27s_the_DJ", 
		"adjacencies": [  "152571" ,  "152586" ]
	}
	, {
		"id": "152570", 
		"name": "He%27s_the_DJ", 
		"adjacencies": [  "152571" ,  "152586" ]
	}
	, {
		"id": "152571", 
		"name": "baby+got+back", 
		"adjacencies": [  "152572" ]
	}
	, {
		"id": "152572", 
		"name": "Baby_Got_Back", 
		"adjacencies": [  "152573" ]
	}
	, {
		"id": "152573", 
		"name": "Set+Adrift+on+Memory+Bliss", 
		"adjacencies": [  "152574" ]
	}
	, {
		"id": "152574", 
		"name": "Set_Adrift_on_Memory_Bliss", 
		"adjacencies": [  "152575" ]
	}
	, {
		"id": "152575", 
		"name": "Sound+of+da+police", 
		"adjacencies": [  "152576" ]
	}
	, {
		"id": "152576", 
		"name": "Sound_of_da_Police", 
		"adjacencies": [  "152577" ]
	}
	, {
		"id": "152577", 
		"name": "you+gots+2+chill", 
		"adjacencies": [  "152578" ]
	}
	, {
		"id": "152578", 
		"name": "Strictly_Business", 
		"adjacencies": [  "152579" ]
	}
	, {
		"id": "152579", 
		"name": "walk+this+way", 
		"adjacencies": [  "152580" ]
	}
	, {
		"id": "152580", 
		"name": "Walk_this_way", 
		"adjacencies": [  "152581" ]
	}
	, {
		"id": "152581", 
		"name": "paid+in+full", 
		"adjacencies": [  "152565" ]
	}
	, {
		"id": "152582", 
		"name": "bust+a+move", 
		"adjacencies": [  "152583" ]
	}
	, {
		"id": "152583", 
		"name": "Bust_A_Move", 
		"adjacencies": [  "152584" ]
	}
	, {
		"id": "152584", 
		"name": "Bust_a_Move_(Young_MC_song)", 
		"adjacencies": [  "152602" ]
	}
	, {
		"id": "152585", 
		"name": "he%27s+the+dj", 
		"adjacencies": [  "152570" ]
	}
	, {
		"id": "152586", 
		"name": "DJ_Jazzy_Jeff_%26_The_Fresh_Prince", 
		"adjacencies": [  "152587" ]
	}
	, {
		"id": "152587", 
		"name": "DJ_Jazzy_Jeff", 
		"adjacencies": [  "152593" ]
	}
	, {
		"id": "152593", 
		"name": "funky+cold+medina", 
		"adjacencies": [  "152594" ]
	}
	, {
		"id": "152594", 
		"name": "Funky_Cold_Medina", 
		"adjacencies": [  ]
	}
	, {
		"id": "152602", 
		"name": "epmd", 
		"adjacencies": [  "152603" ]
	}
	, {
		"id": "152603", 
		"name": "Epmd", 
		"adjacencies": [  "152604" ]
	}
	, {
		"id": "152604", 
		"name": "i+get+around", 
		"adjacencies": [  "152605" ]
	}
	, {
		"id": "152605", 
		"name": "I_Get_Around", 
		"adjacencies": [  "152606" ,  "152606" ]
	}
	, {
		"id": "152605", 
		"name": "I_Get_Around", 
		"adjacencies": [  "152606" ,  "152606" ]
	}
	, {
		"id": "152606", 
		"name": "I_Get_Around_(2Pac_song)", 
		"adjacencies": [  "161602" ]
	}
	, {
		"id": "152606", 
		"name": "I_Get_Around_(2Pac_song)", 
		"adjacencies": [  "161602" ]
	}
	, {
		"id": "152882", 
		"name": "Tyrannosaurus", 
		"adjacencies": [  "152883" ]
	}
	, {
		"id": "152883", 
		"name": "File:Largesttheropods.svg", 
		"adjacencies": [  ]
	}
	, {
		"id": "152934", 
		"name": "Sledgehammer", 
		"adjacencies": [  "152935" ]
	}
	, {
		"id": "152935", 
		"name": "Sledgehammer_(disambiguation)", 
		"adjacencies": [  "152936" ]
	}
	, {
		"id": "152936", 
		"name": "Sledgehammer_(song)", 
		"adjacencies": [  "152939" ]
	}
	, {
		"id": "152939", 
		"name": "Games_Without_Frontiers_(song)", 
		"adjacencies": [  "152940" ]
	}
	, {
		"id": "153008", 
		"name": "Henry_rollins", 
		"adjacencies": [  "153037" ]
	}
	, {
		"id": "153037", 
		"name": "Freddie+Mercury", 
		"adjacencies": [  "153038" ]
	}
	, {
		"id": "153038", 
		"name": "Freddie_Mercury", 
		"adjacencies": [  ]
	}
	, {
		"id": "153446", 
		"name": "Simonyi", 
		"adjacencies": [  "153447" ]
	}
	, {
		"id": "153447", 
		"name": "Charles_Simonyi", 
		"adjacencies": [  "153448" ]
	}
	, {
		"id": "153448", 
		"name": "killdall", 
		"adjacencies": [  "153449" ]
	}
	, {
		"id": "153449", 
		"name": "Gary_Kildall", 
		"adjacencies": [  "153450" ]
	}
	, {
		"id": "153450", 
		"name": "john+page", 
		"adjacencies": [  "153451" ,  "153451" ]
	}
	, {
		"id": "153450", 
		"name": "john+page", 
		"adjacencies": [  "153451" ,  "153451" ]
	}
	, {
		"id": "153451", 
		"name": "John_Page", 
		"adjacencies": [  "153450" ,  "153452" ]
	}
	, {
		"id": "153451", 
		"name": "John_Page", 
		"adjacencies": [  "153450" ,  "153452" ]
	}
	, {
		"id": "153452", 
		"name": "brickland", 
		"adjacencies": [  "153453" ]
	}
	, {
		"id": "153453", 
		"name": "http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=dan+brickland&fulltext=Search", 
		"adjacencies": [  "153454" ]
	}
	, {
		"id": "153454", 
		"name": "dan+bricklin&fulltext=Search&redirs=1", 
		"adjacencies": [  "153455" ]
	}
	, {
		"id": "153455", 
		"name": "Dan_Bricklin", 
		"adjacencies": [  "153456" ]
	}
	, {
		"id": "153456", 
		"name": "Jonathan+Sachs", 
		"adjacencies": [  "153457" ]
	}
	, {
		"id": "153457", 
		"name": "Jonathan_Sachs", 
		"adjacencies": [  "153458" ]
	}
	, {
		"id": "153458", 
		"name": "ray+ozzie", 
		"adjacencies": [  "153459" ]
	}
	, {
		"id": "153459", 
		"name": "Ray_Ozzie", 
		"adjacencies": [  "153460" ]
	}
	, {
		"id": "153460", 
		"name": "roizen", 
		"adjacencies": [  "153461" ]
	}
	, {
		"id": "153461", 
		"name": "peter+roizen", 
		"adjacencies": [  "153462" ]
	}
	, {
		"id": "153462", 
		"name": "T/Maker", 
		"adjacencies": [  "153463" ]
	}
	, {
		"id": "153463", 
		"name": "bob+carr", 
		"adjacencies": [  "153464" ]
	}
	, {
		"id": "153464", 
		"name": "Bob_Carr", 
		"adjacencies": [  "153465" ]
	}
	, {
		"id": "153465", 
		"name": "Bob_Carr_(disambiguation)", 
		"adjacencies": [  "153466" ]
	}
	, {
		"id": "153466", 
		"name": "Robert_Carr_(disambiguation)", 
		"adjacencies": [  "153467" ]
	}
	, {
		"id": "153467", 
		"name": "Robert_Carr_(programmer)", 
		"adjacencies": [  "153468" ]
	}
	, {
		"id": "153468", 
		"name": "Jef+Raskin", 
		"adjacencies": [  "153469" ]
	}
	, {
		"id": "153469", 
		"name": "Jef_Raskin", 
		"adjacencies": [  "153470" ]
	}
	, {
		"id": "153470", 
		"name": "Andy+Hertzfeld", 
		"adjacencies": [  "153471" ]
	}
	, {
		"id": "153471", 
		"name": "Andy_Hertzfeld", 
		"adjacencies": [  "153472" ]
	}
	, {
		"id": "153472", 
		"name": "T%C5%8Dru+Iwatani", 
		"adjacencies": [  "153473" ]
	}
	, {
		"id": "153473", 
		"name": "T%C5%8Dru_Iwatani", 
		"adjacencies": [  "153474" ]
	}
	, {
		"id": "153474", 
		"name": "scott+kim", 
		"adjacencies": [  "153475" ]
	}
	, {
		"id": "153475", 
		"name": "Scott_Kim", 
		"adjacencies": [  "153476" ]
	}
	, {
		"id": "153476", 
		"name": "Jaron+Lanier", 
		"adjacencies": [  "153477" ]
	}
	, {
		"id": "153477", 
		"name": "Jaron_Lanier", 
		"adjacencies": [  "153478" ]
	}
	, {
		"id": "153478", 
		"name": "michael+hawly", 
		"adjacencies": [  "153479" ]
	}
	, {
		"id": "153479", 
		"name": "michael+hawley", 
		"adjacencies": [  "153480" ]
	}
	, {
		"id": "153480", 
		"name": "Michael_Hawley", 
		"adjacencies": [  ]
	}
	, {
		"id": "153808", 
		"name": "Tautology", 
		"adjacencies": [  "153809" ]
	}
	, {
		"id": "153809", 
		"name": "Tautology_(logic)", 
		"adjacencies": [  ]
	}
	, {
		"id": "153947", 
		"name": "Straight_Outta_Lynwood", 
		"adjacencies": [  "153948" ]
	}
	, {
		"id": "153948", 
		"name": "White_%26_Nerdy", 
		"adjacencies": [  "153949" ]
	}
	, {
		"id": "153949", 
		"name": "Geek_chic", 
		"adjacencies": [  "153951" ]
	}
	, {
		"id": "153951", 
		"name": "Technosexual", 
		"adjacencies": [  "153952" ]
	}
	, {
		"id": "153952", 
		"name": "Infornography", 
		"adjacencies": [  "153953" ]
	}
	, {
		"id": "153953", 
		"name": "Cyberpunk", 
		"adjacencies": [  ]
	}
	, {
		"id": "154396", 
		"name": "Rubber_room", 
		"adjacencies": [  ]
	}
	, {
		"id": "154444", 
		"name": "Bhut_Jolokia", 
		"adjacencies": [  "154445" ]
	}
	, {
		"id": "154445", 
		"name": "Scoville_scale", 
		"adjacencies": [  ]
	}
	, {
		"id": "154804", 
		"name": "Space_Quest_II", 
		"adjacencies": [  "154809" ,  "154805" ]
	}
	, {
		"id": "154809", 
		"name": "Infamous_Adventures", 
		"adjacencies": [  "154810" ]
	}
	, {
		"id": "154822", 
		"name": "Human_growth_hormone", 
		"adjacencies": [  "154823" ]
	}
	, {
		"id": "154823", 
		"name": "HGH_controversies", 
		"adjacencies": [  ]
	}
	, {
		"id": "154830", 
		"name": "Wild_Hogs", 
		"adjacencies": [  ]
	}
	, {
		"id": "155123", 
		"name": "Tina_fey", 
		"adjacencies": [  "155124" ,  "155125" ]
	}
	, {
		"id": "155124", 
		"name": "Jeff_Richmond", 
		"adjacencies": [  ]
	}
	, {
		"id": "155125", 
		"name": "paula+deen", 
		"adjacencies": [  "155126" ]
	}
	, {
		"id": "155126", 
		"name": "Paula_deen", 
		"adjacencies": [  ]
	}
	, {
		"id": "155209", 
		"name": "Nick_Drake", 
		"adjacencies": [  ]
	}
	, {
		"id": "155913", 
		"name": "James_brown", 
		"adjacencies": [  "155914" ]
	}
	, {
		"id": "155914", 
		"name": "ready+or+not+here+i+come", 
		"adjacencies": [  "155915" ]
	}
	, {
		"id": "155915", 
		"name": "Ready_or_Not_Here_I_Come_(Can%27t_Hide_from_Love)", 
		"adjacencies": [  "155918" ]
	}
	, {
		"id": "155918", 
		"name": "the+main+ingredient", 
		"adjacencies": [  "145342" ]
	}
	, {
		"id": "155974", 
		"name": "Smokey_Robinson", 
		"adjacencies": [  ]
	}
	, {
		"id": "156133", 
		"name": "Pineapple_express", 
		"adjacencies": [  "156134" ]
	}
	, {
		"id": "156134", 
		"name": "Pineapple_Express_(film)", 
		"adjacencies": [  ]
	}
	, {
		"id": "156137", 
		"name": "Library", 
		"adjacencies": [  "156138" ]
	}
	, {
		"id": "156138", 
		"name": "unicorn", 
		"adjacencies": [  "156139" ]
	}
	, {
		"id": "156139", 
		"name": "Unicorn", 
		"adjacencies": [  "156140" ]
	}
	, {
		"id": "156140", 
		"name": "Invisible_Pink_Unicorn", 
		"adjacencies": [  "156141" ]
	}
	, {
		"id": "156141", 
		"name": "Sam_Harris_(author)#Conversational_intolerance", 
		"adjacencies": [  ]
	}
	, {
		"id": "156624", 
		"name": "King_of_Carrot_Flowers", 
		"adjacencies": [  "156625" ]
	}
	, {
		"id": "156625", 
		"name": "The_King_of_Carrot_Flowers_Pt._One", 
		"adjacencies": [  ]
	}
	, {
		"id": "156628", 
		"name": "Sourwood", 
		"adjacencies": [  ]
	}
	, {
		"id": "156645", 
		"name": "Tea_for_the_Tillerman", 
		"adjacencies": [  ]
	}
	, {
		"id": "156892", 
		"name": "mad+max", 
		"adjacencies": [  "156893" ]
	}
	, {
		"id": "156893", 
		"name": "Mad_max", 
		"adjacencies": [  "156894" ]
	}
	, {
		"id": "156894", 
		"name": "Mad_Max_Beyond_Thunderdome", 
		"adjacencies": [  ]
	}
	, {
		"id": "157121", 
		"name": "Mops", 
		"adjacencies": [  "157127" ]
	}
	, {
		"id": "157250", 
		"name": "DJ_Shadow", 
		"adjacencies": [  "157251" ]
	}
	, {
		"id": "157251", 
		"name": "Endtroducing.....", 
		"adjacencies": [  "157258" ]
	}
	, {
		"id": "157258", 
		"name": "james+dean", 
		"adjacencies": [  "157259" ]
	}
	, {
		"id": "157259", 
		"name": "James_Dean", 
		"adjacencies": [  "157262" ]
	}
	, {
		"id": "157262", 
		"name": "Porsche_550", 
		"adjacencies": [  "157263" ]
	}
	, {
		"id": "157263", 
		"name": "Lotus_Seven", 
		"adjacencies": [  ]
	}
	, {
		"id": "157334", 
		"name": "Rick_Bayless", 
		"adjacencies": [  "157335" ]
	}
	, {
		"id": "157335", 
		"name": "hubert+keller", 
		"adjacencies": [  "157336" ]
	}
	, {
		"id": "157336", 
		"name": "Hubert_Keller", 
		"adjacencies": [  ]
	}
	, {
		"id": "157346", 
		"name": "Count_Zero", 
		"adjacencies": [  ]
	}
	, {
		"id": "157588", 
		"name": "Gorgonzola", 
		"adjacencies": [  "157589" ]
	}
	, {
		"id": "157589", 
		"name": "Gorgonzola_cheese", 
		"adjacencies": [  "157640" ]
	}
	, {
		"id": "157640", 
		"name": "Mascarpone", 
		"adjacencies": [  ]
	}
	, {
		"id": "158027", 
		"name": "Pot-au-feu", 
		"adjacencies": [  "158029" ,  "158036" ]
	}
	, {
		"id": "158028", 
		"name": "Ribs_(food)", 
		"adjacencies": [  "158035" ]
	}
	, {
		"id": "158029", 
		"name": "New_England_boiled_dinner", 
		"adjacencies": [  "158030" ]
	}
	, {
		"id": "158030", 
		"name": "Luther_Burbank", 
		"adjacencies": [  ]
	}
	, {
		"id": "158035", 
		"name": "Barbecue_sauce", 
		"adjacencies": [  ]
	}
	, {
		"id": "158036", 
		"name": "Bouquet_garni", 
		"adjacencies": [  "158037" ]
	}
	, {
		"id": "158037", 
		"name": "Pot_au_feu", 
		"adjacencies": [  "158038" ]
	}
	, {
		"id": "158038", 
		"name": "Hot_pot", 
		"adjacencies": [  "158039" ]
	}
	, {
		"id": "158039", 
		"name": "sarah+silverman", 
		"adjacencies": [  "158040" ]
	}
	, {
		"id": "158040", 
		"name": "Sarah_Silverman", 
		"adjacencies": [  ]
	}
	, {
		"id": "158053", 
		"name": "Friendster", 
		"adjacencies": [  "158054" ]
	}
	, {
		"id": "158054", 
		"name": "Social_networking", 
		"adjacencies": [  "158055" ]
	}
	, {
		"id": "158055", 
		"name": "MySpace", 
		"adjacencies": [  ]
	}
	, {
		"id": "158079", 
		"name": "Eric_Clapton", 
		"adjacencies": [  "158080" ,  "158098" ]
	}
	, {
		"id": "158080", 
		"name": "Pattie_Boyd", 
		"adjacencies": [  "158336" ]
	}
	, {
		"id": "158098", 
		"name": "CBE", 
		"adjacencies": [  "158099" ]
	}
	, {
		"id": "158099", 
		"name": "Arkansas+Traveler", 
		"adjacencies": [  "158100" ]
	}
	, {
		"id": "158100", 
		"name": "Arkansas_Traveler", 
		"adjacencies": [  "158101" ,  "158444" ]
	}
	, {
		"id": "158101", 
		"name": "The_Arkansas_Traveler_(song)", 
		"adjacencies": [  "158115" ]
	}
	, {
		"id": "158192", 
		"name": "giada+de+laurentiis", 
		"adjacencies": [  "158193" ]
	}
	, {
		"id": "158193", 
		"name": "Giada_De_Laurentiis", 
		"adjacencies": [  ]
	}
	, {
		"id": "158290", 
		"name": "Jim_Carroll", 
		"adjacencies": [  ]
	}
	, {
		"id": "158322", 
		"name": "Starship_troopers", 
		"adjacencies": [  "158323" ]
	}
	, {
		"id": "158322", 
		"name": "Starship_troopers", 
		"adjacencies": [  "158323" ]
	}
	, {
		"id": "158323", 
		"name": "Starship_Troopers_(disambiguation)", 
		"adjacencies": [  "158324" ]
	}
	, {
		"id": "158324", 
		"name": "Starship_Troopers_(film)", 
		"adjacencies": [  ]
	}
	, {
		"id": "158336", 
		"name": "File:Harrison_and_Pattie_Boyd_from_A_Hard_Day%27s_Night.png", 
		"adjacencies": [  ]
	}
	, {
		"id": "158444", 
		"name": "peanut", 
		"adjacencies": [  "158445" ]
	}
	, {
		"id": "158445", 
		"name": "Peanut", 
		"adjacencies": [  "158446" ]
	}
	, {
		"id": "158446", 
		"name": "George_Washington_Carver", 
		"adjacencies": [  ]
	}
	, {
		"id": "158449", 
		"name": "Kanban", 
		"adjacencies": [  ]
	}
	, {
		"id": "158449", 
		"name": "Kanban", 
		"adjacencies": [  ]
	}
	, {
		"id": "158686", 
		"name": "Gillian_Welch", 
		"adjacencies": [  "158687" ]
	}
	, {
		"id": "158687", 
		"name": "David_Rawlings", 
		"adjacencies": [  ]
	}
	, {
		"id": "158847", 
		"name": "Midori", 
		"adjacencies": [  "158848" ]
	}
	, {
		"id": "158848", 
		"name": "Midori_liqueur", 
		"adjacencies": [  "158849" ]
	}
	, {
		"id": "158849", 
		"name": "watermelon", 
		"adjacencies": [  "158850" ]
	}
	, {
		"id": "158850", 
		"name": "Watermelon", 
		"adjacencies": [  "158851" ]
	}
	, {
		"id": "158851", 
		"name": "Vampire_pumpkins_and_watermelons", 
		"adjacencies": [  ]
	}
	, {
		"id": "159225", 
		"name": "File:Collusion_is_not_an_illusion.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "159239", 
		"name": "I%27m_on_a_boat", 
		"adjacencies": [  "159240" ,  "159260" ]
	}
	, {
		"id": "159240", 
		"name": "Pashmina", 
		"adjacencies": [  ]
	}
	, {
		"id": "159245", 
		"name": "Gallagher", 
		"adjacencies": [  "159246" ]
	}
	, {
		"id": "159246", 
		"name": "Gallagher_(comedian)", 
		"adjacencies": [  "159247" ]
	}
	, {
		"id": "159247", 
		"name": "Veg-O-Matic", 
		"adjacencies": [  ]
	}
	, {
		"id": "159260", 
		"name": "Auto-Tune", 
		"adjacencies": [  ]
	}
	, {
		"id": "159962", 
		"name": "Ayds", 
		"adjacencies": [  ]
	}
	, {
		"id": "160226", 
		"name": "Ke$ha", 
		"adjacencies": [  ]
	}
	, {
		"id": "160236", 
		"name": "Windows_NT", 
		"adjacencies": [  "160237" ]
	}
	, {
		"id": "160237", 
		"name": "Dave_Cutler", 
		"adjacencies": [  ]
	}
	, {
		"id": "160283", 
		"name": "NERO", 
		"adjacencies": [  "160284" ]
	}
	, {
		"id": "160284", 
		"name": "New_England_Role_Playing_Organization", 
		"adjacencies": [  "160285" ]
	}
	, {
		"id": "160285", 
		"name": "Category:Role-playing_game_associations", 
		"adjacencies": [  "160286" ]
	}
	, {
		"id": "160286", 
		"name": "Assassins+guild", 
		"adjacencies": [  "160287" ,  "160288" ]
	}
	, {
		"id": "160287", 
		"name": "Assassin%27s_Guild", 
		"adjacencies": [  ]
	}
	, {
		"id": "160288", 
		"name": "MIT+Assassins+guild", 
		"adjacencies": [  "160289" ,  "160290" ]
	}
	, {
		"id": "160289", 
		"name": "History_of_live_action_role-playing_games", 
		"adjacencies": [  ]
	}
	, {
		"id": "160290", 
		"name": "History_of_alternative_reality_games", 
		"adjacencies": [  ]
	}
	, {
		"id": "160305", 
		"name": "bret+michaels", 
		"adjacencies": [  "160306" ]
	}
	, {
		"id": "160306", 
		"name": "Bret_Michaels", 
		"adjacencies": [  ]
	}
	, {
		"id": "160634", 
		"name": "Wim_Mertens", 
		"adjacencies": [  "160635" ,  "160636" ]
	}
	, {
		"id": "160635", 
		"name": "Struggle_for_Pleasure", 
		"adjacencies": [  ]
	}
	, {
		"id": "160636", 
		"name": "The_Belly_of_an_Architect", 
		"adjacencies": [  ]
	}
	, {
		"id": "160775", 
		"name": "Castlevania:_The_Adventure_ReBirth", 
		"adjacencies": [  ]
	}
	, {
		"id": "160937", 
		"name": "http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=hominy&fulltext=Search", 
		"adjacencies": [  "160938" ]
	}
	, {
		"id": "160938", 
		"name": "Hominy", 
		"adjacencies": [  "160939" ,  "160940" ]
	}
	, {
		"id": "160939", 
		"name": "File:Hominy_(maize).JPG", 
		"adjacencies": [  ]
	}
	, {
		"id": "160940", 
		"name": "Sagamite", 
		"adjacencies": [  "160941" ,  "160942" ]
	}
	, {
		"id": "160941", 
		"name": "Indian_corn", 
		"adjacencies": [  "160943" ]
	}
	, {
		"id": "160942", 
		"name": "Atole", 
		"adjacencies": [  ]
	}
	, {
		"id": "160943", 
		"name": "corn+nuts", 
		"adjacencies": [  "160944" ]
	}
	, {
		"id": "160944", 
		"name": "Corn_nuts", 
		"adjacencies": [  ]
	}
	, {
		"id": "161026", 
		"name": "Iron_Chef_America", 
		"adjacencies": [  "161027" ,  "161193" ]
	}
	, {
		"id": "161027", 
		"name": "Iron_Chef_America:_Supreme_Cuisine", 
		"adjacencies": [  "161028" ]
	}
	, {
		"id": "161193", 
		"name": "Iron_Chef", 
		"adjacencies": [  "161194" ]
	}
	, {
		"id": "161194", 
		"name": "Top_Chef", 
		"adjacencies": [  "161196" ]
	}
	, {
		"id": "161196", 
		"name": "Top_Chef_(season_6)", 
		"adjacencies": [  "161197" ]
	}
	, {
		"id": "161197", 
		"name": "Top_Chef_Masters", 
		"adjacencies": [  "161198" ]
	}
	, {
		"id": "161198", 
		"name": "Top_Chef:_Masters_(season_1)", 
		"adjacencies": [  "161200" ]
	}
	, {
		"id": "161200", 
		"name": "Zooey_Deschanel", 
		"adjacencies": [  ]
	}
	, {
		"id": "161303", 
		"name": "Jean_Grae", 
		"adjacencies": [  ]
	}
	, {
		"id": "161336", 
		"name": "Category:Lists_of_best_seller_albums", 
		"adjacencies": [  "161337" ]
	}
	, {
		"id": "161337", 
		"name": "Best-selling_albums_by_year_in_the_United_States", 
		"adjacencies": [  "161343" ]
	}
	, {
		"id": "161581", 
		"name": "Vanilla_ice", 
		"adjacencies": [  "161582" ]
	}
	, {
		"id": "161582", 
		"name": "let%27s+talk+about+sex", 
		"adjacencies": [  "161583" ]
	}
	, {
		"id": "161583", 
		"name": "Let%27s_Talk_About_Sex", 
		"adjacencies": [  "161608" ]
	}
	, {
		"id": "161586", 
		"name": "Pharcyde", 
		"adjacencies": [  "161587" ]
	}
	, {
		"id": "161587", 
		"name": "Passin%27_Me_By", 
		"adjacencies": [  "161595" ]
	}
	, {
		"id": "161595", 
		"name": "U.N.I.T.Y.", 
		"adjacencies": [  "161596" ]
	}
	, {
		"id": "161596", 
		"name": "U.N.I.T.Y.", 
		"adjacencies": [  "161597" ]
	}
	, {
		"id": "161597", 
		"name": "I+Got+A+Man", 
		"adjacencies": [  "161598" ]
	}
	, {
		"id": "161598", 
		"name": "I_Got_a_Man", 
		"adjacencies": [  "161599" ]
	}
	, {
		"id": "161599", 
		"name": "Insane+in+the+Brain", 
		"adjacencies": [  "161600" ]
	}
	, {
		"id": "161600", 
		"name": "Insane_in_the_Brain", 
		"adjacencies": [  "161601" ]
	}
	, {
		"id": "161601", 
		"name": "I+get+ARound", 
		"adjacencies": [  "152605" ]
	}
	, {
		"id": "161602", 
		"name": "Ruffneck", 
		"adjacencies": [  "161603" ]
	}
	, {
		"id": "161603", 
		"name": "Ruffneck", 
		"adjacencies": [  "161604" ]
	}
	, {
		"id": "161604", 
		"name": "http://en.wikipedia.org/w/index.php?title=Ruffneck_(MC_Lyte_song)&action=edit&redlink=1", 
		"adjacencies": [  "161605" ]
	}
	, {
		"id": "161605", 
		"name": "Ruffneck_(MC_Lyte_song)", 
		"adjacencies": [  "161606" ]
	}
	, {
		"id": "161606", 
		"name": "MC+Lyte", 
		"adjacencies": [  "161607" ]
	}
	, {
		"id": "161607", 
		"name": "MC_Lyte", 
		"adjacencies": [  "161608" ]
	}
	, {
		"id": "161608", 
		"name": "it+was+a+good+day", 
		"adjacencies": [  "161609" ,  "161609" ]
	}
	, {
		"id": "161608", 
		"name": "it+was+a+good+day", 
		"adjacencies": [  "161609" ,  "161609" ]
	}
	, {
		"id": "161609", 
		"name": "It_Was_A_Good_Day", 
		"adjacencies": [  "161610" ]
	}
	, {
		"id": "161609", 
		"name": "It_Was_A_Good_Day", 
		"adjacencies": [  "161610" ]
	}
	, {
		"id": "161610", 
		"name": "juicy", 
		"adjacencies": [  "161611" ]
	}
	, {
		"id": "161611", 
		"name": "Juicy", 
		"adjacencies": [  "161612" ]
	}
	, {
		"id": "161612", 
		"name": "Juicy_(The_Notorious_B.I.G._song)", 
		"adjacencies": [  "161613" ]
	}
	, {
		"id": "161613", 
		"name": "regulate", 
		"adjacencies": [  "161614" ,  "161614" ]
	}
	, {
		"id": "161613", 
		"name": "regulate", 
		"adjacencies": [  "161614" ,  "161614" ]
	}
	, {
		"id": "161614", 
		"name": "Regulate", 
		"adjacencies": [  "161615" ,  "161615" ]
	}
	, {
		"id": "161614", 
		"name": "Regulate", 
		"adjacencies": [  "161615" ,  "161615" ]
	}
	, {
		"id": "161615", 
		"name": "Regulate_(song)", 
		"adjacencies": [  "161620" ]
	}
	, {
		"id": "161615", 
		"name": "Regulate_(song)", 
		"adjacencies": [  "161620" ]
	}
	, {
		"id": "161620", 
		"name": "2pac", 
		"adjacencies": [  "161621" ]
	}
	, {
		"id": "161621", 
		"name": "2pac", 
		"adjacencies": [  "161613" ]
	}
	, {
		"id": "161626", 
		"name": "Get+By", 
		"adjacencies": [  "161627" ]
	}
	, {
		"id": "161627", 
		"name": "Get_By", 
		"adjacencies": [  "161641" ]
	}
	, {
		"id": "161636", 
		"name": "Mc_lyte", 
		"adjacencies": [  ]
	}
	, {
		"id": "161640", 
		"name": "My_Name_Is", 
		"adjacencies": [  "161643" ]
	}
	, {
		"id": "161641", 
		"name": "Lauryn+Hill", 
		"adjacencies": [  "161642" ]
	}
	, {
		"id": "161642", 
		"name": "Lauryn_Hill", 
		"adjacencies": [  ]
	}
	, {
		"id": "161643", 
		"name": "ridin%27", 
		"adjacencies": [  "161644" ]
	}
	, {
		"id": "161644", 
		"name": "Ridin%27", 
		"adjacencies": [  "161645" ]
	}
	, {
		"id": "161645", 
		"name": "Best_Rap_Video", 
		"adjacencies": [  "161646" ]
	}
	, {
		"id": "161646", 
		"name": "aural+pleasure", 
		"adjacencies": [  "161647" ]
	}
	, {
		"id": "161647", 
		"name": "Blazing_Arrow", 
		"adjacencies": [  ]
	}
	, {
		"id": "161651", 
		"name": "Work_it", 
		"adjacencies": [  "161652" ]
	}
	, {
		"id": "161652", 
		"name": "Work_It_(Missy_Elliott_song)", 
		"adjacencies": [  ]
	}
	, {
		"id": "161771", 
		"name": "Fibre_channel", 
		"adjacencies": [  ]
	}
	, {
		"id": "162095", 
		"name": "737", 
		"adjacencies": [  "162096" ]
	}
	, {
		"id": "162096", 
		"name": "Boeing_737", 
		"adjacencies": [  "162113" ]
	}
	, {
		"id": "162113", 
		"name": "777", 
		"adjacencies": [  "162114" ]
	}
	, {
		"id": "162114", 
		"name": "777", 
		"adjacencies": [  "162115" ]
	}
	, {
		"id": "162115", 
		"name": "Boeing_777", 
		"adjacencies": [  "162116" ]
	}
	, {
		"id": "162116", 
		"name": "Boeing_Commercial_Airplanes", 
		"adjacencies": [  "162117" ]
	}
	, {
		"id": "162117", 
		"name": "Boeing_787", 
		"adjacencies": [  ]
	}
	, {
		"id": "162129", 
		"name": "Burj_Dubai", 
		"adjacencies": [  "162130" ,  "162132" ,  "162134" ,  "162139" ]
	}
	, {
		"id": "162130", 
		"name": "File:BurjDubaiHeight.svg", 
		"adjacencies": [  "162131" ]
	}
	, {
		"id": "162132", 
		"name": "File:Comparisonfinal001fx7.png", 
		"adjacencies": [  "162133" ]
	}
	, {
		"id": "162134", 
		"name": "Davit", 
		"adjacencies": [  ]
	}
	, {
		"id": "162139", 
		"name": "Warsaw_Radio_Mast", 
		"adjacencies": [  "162140" ,  "162140" ]
	}
	, {
		"id": "162140", 
		"name": "KVLY-TV_mast", 
		"adjacencies": [  "162141" ]
	}
	, {
		"id": "162140", 
		"name": "KVLY-TV_mast", 
		"adjacencies": [  "162141" ]
	}
	, {
		"id": "162141", 
		"name": "File:KVLY-TV_Mast_Tower_Wide.jpg", 
		"adjacencies": [  "162142" ]
	}
	, {
		"id": "162345", 
		"name": "Dr._Dre", 
		"adjacencies": [  ]
	}
	, {
		"id": "162901", 
		"name": "http://en.wikipedia.org/w/index.php?title=ITA_Software&action=history", 
		"adjacencies": [  ]
	}
	, {
		"id": "163036", 
		"name": "List_of_programs_broadcast_by_VH1", 
		"adjacencies": [  "163037" ]
	}
	, {
		"id": "163037", 
		"name": "http://en.wikipedia.org/w/index.php?title=Secrets_of_Aspen&action=edit&redlink=1", 
		"adjacencies": [  "163038" ]
	}
	, {
		"id": "163038", 
		"name": "Secrets_of_Aspen", 
		"adjacencies": [  ]
	}
	, {
		"id": "163128", 
		"name": "Birth_certificate#Long_forms", 
		"adjacencies": [  ]
	}
	, {
		"id": "163129", 
		"name": "Barack_Obama", 
		"adjacencies": [  ]
	}
	, {
		"id": "163162", 
		"name": "Nightshift", 
		"adjacencies": [  "163163" ]
	}
	, {
		"id": "163163", 
		"name": "Jackie_Wilson", 
		"adjacencies": [  ]
	}
	, {
		"id": "163381", 
		"name": "File:Cable_lacing_close-up.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "163419", 
		"name": "File:Cable_lacing_close-up_2.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "163441", 
		"name": "List_of_assigned_/8_IP_address_blocks", 
		"adjacencies": [  "163442" ,  "163443" ]
	}
	, {
		"id": "163442", 
		"name": "AMPRNet", 
		"adjacencies": [  "163445" ]
	}
	, {
		"id": "163443", 
		"name": "Interop", 
		"adjacencies": [  ]
	}
	, {
		"id": "163445", 
		"name": "Private_network", 
		"adjacencies": [  ]
	}
	, {
		"id": "164169", 
		"name": "Best_in_show", 
		"adjacencies": [  "164170" ]
	}
	, {
		"id": "164170", 
		"name": "Best_in_Show_(film)", 
		"adjacencies": [  "164171" ]
	}
	, {
		"id": "164375", 
		"name": "Leidenfrost", 
		"adjacencies": [  "164376" ]
	}
	, {
		"id": "164376", 
		"name": "Leidenfrost_effect", 
		"adjacencies": [  ]
	}
	, {
		"id": "164952", 
		"name": "Squarepusher", 
		"adjacencies": [  "164953" ,  "164964" ]
	}
	, {
		"id": "164953", 
		"name": "Musique_concr%C3%A8te", 
		"adjacencies": [  ]
	}
	, {
		"id": "164964", 
		"name": "Amen_break", 
		"adjacencies": [  ]
	}
	, {
		"id": "164988", 
		"name": "Mk_ultra", 
		"adjacencies": [  "164989" ,  "164990" ,  "164991" ,  "164992" ,  "165046" ,  "165047" ]
	}
	, {
		"id": "164989", 
		"name": "Frank_Olson", 
		"adjacencies": [  ]
	}
	, {
		"id": "164990", 
		"name": "MKNAOMI", 
		"adjacencies": [  "164994" ]
	}
	, {
		"id": "164991", 
		"name": "MKDELTA", 
		"adjacencies": [  "164993" ]
	}
	, {
		"id": "164992", 
		"name": "Candy_Jones", 
		"adjacencies": [  ]
	}
	, {
		"id": "164993", 
		"name": "Project_ARTICHOKE", 
		"adjacencies": [  ]
	}
	, {
		"id": "164994", 
		"name": "NBC_warfare", 
		"adjacencies": [  "164995" ,  "164996" ]
	}
	, {
		"id": "164995", 
		"name": "Chemical_warfare", 
		"adjacencies": [  "164998" ,  "164999" ]
	}
	, {
		"id": "164996", 
		"name": "Biological_warfare", 
		"adjacencies": [  "165008" ,  "165009" ,  "165010" ]
	}
	, {
		"id": "164998", 
		"name": "File:Poison_gas_attack.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "164999", 
		"name": "Ambergris", 
		"adjacencies": [  "165007" ]
	}
	, {
		"id": "165007", 
		"name": "File:Ambergris.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "165008", 
		"name": "Health_risks_from_dead_bodies", 
		"adjacencies": [  ]
	}
	, {
		"id": "165009", 
		"name": "File:E120_biological_bomblet_cutaway.JPG", 
		"adjacencies": [  ]
	}
	, {
		"id": "165010", 
		"name": "Operation_Whitecoat", 
		"adjacencies": [  ]
	}
	, {
		"id": "165046", 
		"name": "The_Electric_Kool-Aid_Acid_Test", 
		"adjacencies": [  "165048" ,  "165049" ]
	}
	, {
		"id": "165047", 
		"name": "Firestarter", 
		"adjacencies": [  "165050" ]
	}
	, {
		"id": "165048", 
		"name": "Acid_Tests", 
		"adjacencies": [  ]
	}
	, {
		"id": "165049", 
		"name": "Further_(bus)", 
		"adjacencies": [  ]
	}
	, {
		"id": "165050", 
		"name": "Stephen_King", 
		"adjacencies": [  ]
	}
	, {
		"id": "165315", 
		"name": "Morgan_Freeman", 
		"adjacencies": [  ]
	}
	, {
		"id": "165435", 
		"name": "Maus", 
		"adjacencies": [  ]
	}
	, {
		"id": "166020", 
		"name": "Peanut_allergies", 
		"adjacencies": [  ]
	}
	, {
		"id": "166020", 
		"name": "Peanut_allergies", 
		"adjacencies": [  ]
	}
	, {
		"id": "166034", 
		"name": "Jumbo_frames", 
		"adjacencies": [  ]
	}
	, {
		"id": "166085", 
		"name": "Khoisan", 
		"adjacencies": [  ]
	}
	, {
		"id": "166086", 
		"name": "Saartjie_Baartman", 
		"adjacencies": [  ]
	}
	, {
		"id": "166447", 
		"name": "Rage_against_the_machine", 
		"adjacencies": [  ]
	}
	, {
		"id": "166587", 
		"name": "Ext4", 
		"adjacencies": [  "166601" ]
	}
	, {
		"id": "166601", 
		"name": "Journaling_file_system", 
		"adjacencies": [  "166602" ]
	}
	, {
		"id": "166602", 
		"name": "JFS_(file_system)", 
		"adjacencies": [  "166603" ]
	}
	, {
		"id": "166603", 
		"name": "Linux", 
		"adjacencies": [  "166604" ,  "166605" ,  "166606" ,  "166607" ,  "166608" ]
	}
	, {
		"id": "166604", 
		"name": "FVWM", 
		"adjacencies": [  ]
	}
	, {
		"id": "166605", 
		"name": "Maya_(software)", 
		"adjacencies": [  ]
	}
	, {
		"id": "166606", 
		"name": "Shake_(software)", 
		"adjacencies": [  ]
	}
	, {
		"id": "166607", 
		"name": "Unicos#Variants", 
		"adjacencies": [  ]
	}
	, {
		"id": "166608", 
		"name": "SCO-Linux_controversies", 
		"adjacencies": [  ]
	}
	, {
		"id": "166637", 
		"name": "French_flag", 
		"adjacencies": [  ]
	}
	, {
		"id": "166769", 
		"name": "Boggle", 
		"adjacencies": [  ]
	}
	, {
		"id": "166869", 
		"name": "Cin%C3%A9math%C3%A8que_Fran%C3%A7aise", 
		"adjacencies": [  ]
	}
	, {
		"id": "167063", 
		"name": "The_Settlers_of_Catan", 
		"adjacencies": [  "167064" ,  "167064" ,  "167066" ,  "167067" ,  "167068" ,  "167090" ]
	}
	, {
		"id": "167064", 
		"name": "File:Nepomuk_280_-_Osadn%C3%ADci_z_Katanu.jpg", 
		"adjacencies": [  "167065" ,  "167065" ]
	}
	, {
		"id": "167064", 
		"name": "File:Nepomuk_280_-_Osadn%C3%ADci_z_Katanu.jpg", 
		"adjacencies": [  "167065" ,  "167065" ]
	}
	, {
		"id": "167066", 
		"name": "Catan:_Traders_%26_Barbarians", 
		"adjacencies": [  ]
	}
	, {
		"id": "167067", 
		"name": "Cities_and_Knights_of_Catan", 
		"adjacencies": [  "167069" ]
	}
	, {
		"id": "167068", 
		"name": "Seafarers_of_Catan", 
		"adjacencies": [  "167063" ]
	}
	, {
		"id": "167069", 
		"name": "File:Cities_and_Knights_of_Catan.JPG", 
		"adjacencies": [  ]
	}
	, {
		"id": "167090", 
		"name": "GAMES_100#Hall_of_Fame", 
		"adjacencies": [  "167091" ,  "167094" ,  "167095" ]
	}
	, {
		"id": "167091", 
		"name": "Axis_%26_Allies", 
		"adjacencies": [  "167092" ]
	}
	, {
		"id": "167092", 
		"name": "File:Axis_%26_Allies_Map_%26_Pieces.jpg", 
		"adjacencies": [  "167093" ]
	}
	, {
		"id": "167094", 
		"name": "Blockhead!", 
		"adjacencies": [  ]
	}
	, {
		"id": "167095", 
		"name": "Diplomacy_(game)", 
		"adjacencies": [  ]
	}
	, {
		"id": "167791", 
		"name": "Belladonna", 
		"adjacencies": [  "167792" ]
	}
	, {
		"id": "167792", 
		"name": "Atropa_belladonna", 
		"adjacencies": [  "167793" ,  "167798" ]
	}
	, {
		"id": "167793", 
		"name": "File:Atropa_bella-donna1.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "167798", 
		"name": "", 
		"adjacencies": [  "167799" ]
	}
	, {
		"id": "167799", 
		"name": "http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=1952&fulltext=Search", 
		"adjacencies": [  "167800" ]
	}
	, {
		"id": "167800", 
		"name": "1952", 
		"adjacencies": [  "167801" ]
	}
	, {
		"id": "167801", 
		"name": "May_3", 
		"adjacencies": [  ]
	}
	, {
		"id": "167810", 
		"name": "April_1952", 
		"adjacencies": [  ]
	}
	, {
		"id": "167817", 
		"name": "Drugs", 
		"adjacencies": [  "167818" ]
	}
	, {
		"id": "167818", 
		"name": "Drug_control_law", 
		"adjacencies": [  "167819" ,  "167820" ]
	}
	, {
		"id": "167819", 
		"name": "Controlled_Substances_Act#Schedules_of_controlled_substances", 
		"adjacencies": [  ]
	}
	, {
		"id": "167820", 
		"name": "Controlled_Substances_Act", 
		"adjacencies": [  ]
	}
	, {
		"id": "167836", 
		"name": "A-0", 
		"adjacencies": [  "167837" ]
	}
	, {
		"id": "167837", 
		"name": "A-0_System", 
		"adjacencies": [  ]
	}
	, {
		"id": "168170", 
		"name": "Kevin_Brauch", 
		"adjacencies": [  ]
	}
	, {
		"id": "168185", 
		"name": "Moi", 
		"adjacencies": [  "168186" ]
	}
	, {
		"id": "168186", 
		"name": "Threadfin", 
		"adjacencies": [  ]
	}
	, {
		"id": "168243", 
		"name": "Pop_rivet", 
		"adjacencies": [  "168244" ,  "168245" ,  "168258" ]
	}
	, {
		"id": "168244", 
		"name": "Brazing", 
		"adjacencies": [  ]
	}
	, {
		"id": "168245", 
		"name": "Nail_(fastener)", 
		"adjacencies": [  "168246" ,  "168268" ]
	}
	, {
		"id": "168246", 
		"name": "Rail_spike", 
		"adjacencies": [  "168247" ]
	}
	, {
		"id": "168247", 
		"name": "Golden_spike", 
		"adjacencies": [  "168248" ]
	}
	, {
		"id": "168248", 
		"name": "Union_Pacific_No._119", 
		"adjacencies": [  "168249" ]
	}
	, {
		"id": "168249", 
		"name": "4-4-0", 
		"adjacencies": [  "168250" ]
	}
	, {
		"id": "168250", 
		"name": "Steam_locomotive", 
		"adjacencies": [  "168251" ,  "168252" ]
	}
	, {
		"id": "168251", 
		"name": "Locomotive", 
		"adjacencies": [  "168253" ]
	}
	, {
		"id": "168252", 
		"name": "Cow_catcher", 
		"adjacencies": [  ]
	}
	, {
		"id": "168253", 
		"name": "High-speed_rail", 
		"adjacencies": [  "168254" ,  "168255" ,  "168256" ,  "168257" ]
	}
	, {
		"id": "168254", 
		"name": "TGV", 
		"adjacencies": [  ]
	}
	, {
		"id": "168255", 
		"name": "JR-Maglev", 
		"adjacencies": [  ]
	}
	, {
		"id": "168256", 
		"name": "Eschede_train_disaster", 
		"adjacencies": [  ]
	}
	, {
		"id": "168257", 
		"name": "Magnetic_levitation_train", 
		"adjacencies": [  ]
	}
	, {
		"id": "168258", 
		"name": "Shear_stress", 
		"adjacencies": [  "168259" ]
	}
	, {
		"id": "168259", 
		"name": "Direct_shear_test", 
		"adjacencies": [  "168260" ]
	}
	, {
		"id": "168260", 
		"name": "loon", 
		"adjacencies": [  "168261" ]
	}
	, {
		"id": "168261", 
		"name": "Loon", 
		"adjacencies": [  "168262" ]
	}
	, {
		"id": "168262", 
		"name": "Loon_(disambiguation)", 
		"adjacencies": [  "168263" ]
	}
	, {
		"id": "168263", 
		"name": "Loon_Mountain", 
		"adjacencies": [  "168264" ]
	}
	, {
		"id": "168264", 
		"name": "Category:Ski_areas_and_resorts_in_New_Hampshire", 
		"adjacencies": [  "168265" ,  "168267" ]
	}
	, {
		"id": "168265", 
		"name": "Category:Defunct_ski_areas_and_resorts_in_New_Hampshire", 
		"adjacencies": [  "168266" ]
	}
	, {
		"id": "168266", 
		"name": "Temple_Mountain_Ski_Area", 
		"adjacencies": [  ]
	}
	, {
		"id": "168267", 
		"name": "Cannon_Mountain_Ski_Area", 
		"adjacencies": [  ]
	}
	, {
		"id": "168268", 
		"name": "Solomon%27s_Temple", 
		"adjacencies": [  "168269" ,  "168270" ,  "168271" ,  "168389" ]
	}
	, {
		"id": "168269", 
		"name": "Ark_of_the_Covenant", 
		"adjacencies": [  "168272" ,  "168273" ,  "168274" ]
	}
	, {
		"id": "168270", 
		"name": "Showbread", 
		"adjacencies": [  ]
	}
	, {
		"id": "168271", 
		"name": "Cubit", 
		"adjacencies": [  ]
	}
	, {
		"id": "168272", 
		"name": "Rod_of_Aaron", 
		"adjacencies": [  ]
	}
	, {
		"id": "168273", 
		"name": "Manna", 
		"adjacencies": [  ]
	}
	, {
		"id": "168274", 
		"name": "Dome_of_the_Rock", 
		"adjacencies": [  ]
	}
	, {
		"id": "168359", 
		"name": "http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=al+brown&fulltext=Search", 
		"adjacencies": [  "168360" ,  "168361" ]
	}
	, {
		"id": "168360", 
		"name": "Panama_Al_Brown", 
		"adjacencies": [  ]
	}
	, {
		"id": "168361", 
		"name": "Al_Brown%27s_Tunetoppers", 
		"adjacencies": [  ]
	}
	, {
		"id": "168389", 
		"name": "King_Solomon", 
		"adjacencies": [  ]
	}
	, {
		"id": "168396", 
		"name": "Reggea", 
		"adjacencies": [  ]
	}
	, {
		"id": "168560", 
		"name": "Bob_marley", 
		"adjacencies": [  "168561" ]
	}
	, {
		"id": "168561", 
		"name": "Stir_It_Up", 
		"adjacencies": [  ]
	}
	, {
		"id": "168564", 
		"name": "Stepping_razor", 
		"adjacencies": [  "168565" ]
	}
	, {
		"id": "168565", 
		"name": "Peter_Tosh", 
		"adjacencies": [  "168566" ,  "168597" ]
	}
	, {
		"id": "168566", 
		"name": "Reggae", 
		"adjacencies": [  ]
	}
	, {
		"id": "168597", 
		"name": "Steppin%27_Razor", 
		"adjacencies": [  "168689" ]
	}
	, {
		"id": "168688", 
		"name": "Burning_Spear", 
		"adjacencies": [  "168708" ]
	}
	, {
		"id": "168689", 
		"name": "marcus+garvey", 
		"adjacencies": [  "168690" ]
	}
	, {
		"id": "168690", 
		"name": "Marcus_garvey", 
		"adjacencies": [  "168691" ]
	}
	, {
		"id": "168691", 
		"name": "Garveyism", 
		"adjacencies": [  ]
	}
	, {
		"id": "168701", 
		"name": "downpresser++man", 
		"adjacencies": [  "168702" ]
	}
	, {
		"id": "168702", 
		"name": "Downpresser_Man", 
		"adjacencies": [  ]
	}
	, {
		"id": "168708", 
		"name": "desmond+dekker", 
		"adjacencies": [  "168709" ]
	}
	, {
		"id": "168709", 
		"name": "Desmond_Dekker", 
		"adjacencies": [  "168710" ]
	}
	, {
		"id": "168710", 
		"name": "Israelites_(song)", 
		"adjacencies": [  ]
	}
	, {
		"id": "168827", 
		"name": "Triumph", 
		"adjacencies": [  "168828" ]
	}
	, {
		"id": "168828", 
		"name": "Triumph_(band)", 
		"adjacencies": [  ]
	}
	, {
		"id": "168830", 
		"name": "don%27t+stop+believing", 
		"adjacencies": [  "168831" ]
	}
	, {
		"id": "168831", 
		"name": "Don%27t_Stop_Believing", 
		"adjacencies": [  ]
	}
	, {
		"id": "168923", 
		"name": "Ark", 
		"adjacencies": [  "168924" ]
	}
	, {
		"id": "168924", 
		"name": "Noah%27s_Ark", 
		"adjacencies": [  "168925" ,  "168926" ]
	}
	, {
		"id": "168925", 
		"name": "Tabernacle", 
		"adjacencies": [  ]
	}
	, {
		"id": "168926", 
		"name": "Searches_for_Noah%27s_Ark", 
		"adjacencies": [  ]
	}
	, {
		"id": "169485", 
		"name": "southwest", 
		"adjacencies": [  "169486" ]
	}
	, {
		"id": "169486", 
		"name": "Southwest", 
		"adjacencies": [  "169487" ]
	}
	, {
		"id": "169487", 
		"name": "Southwest_Airlines", 
		"adjacencies": [  "169488" ]
	}
	, {
		"id": "169488", 
		"name": "norwegian+airlines", 
		"adjacencies": [  "169489" ]
	}
	, {
		"id": "169489", 
		"name": "norwegian+airline", 
		"adjacencies": [  "169490" ]
	}
	, {
		"id": "169490", 
		"name": "Norwegian_Air_Shuttle", 
		"adjacencies": [  "169491" ]
	}
	, {
		"id": "169490", 
		"name": "Norwegian_Air_Shuttle", 
		"adjacencies": [  "169491" ]
	}
	, {
		"id": "169491", 
		"name": "Republic+Airlines", 
		"adjacencies": [  "169492" ]
	}
	, {
		"id": "169492", 
		"name": "Republic_Airlines", 
		"adjacencies": [  "109888" ]
	}
	, {
		"id": "169574", 
		"name": "Halting_problem", 
		"adjacencies": [  ]
	}
	, {
		"id": "169975", 
		"name": "HPPA", 
		"adjacencies": [  ]
	}
	, {
		"id": "170122", 
		"name": "MC_900_Ft._Jesus", 
		"adjacencies": [  ]
	}
	, {
		"id": "170159", 
		"name": "ATI_Rage", 
		"adjacencies": [  ]
	}
	, {
		"id": "170179", 
		"name": "Guitar_Player_Magazine", 
		"adjacencies": [  "170180" ,  "170208" ,  "170181" ]
	}
	, {
		"id": "170180", 
		"name": "Guitar_Superstar", 
		"adjacencies": [  ]
	}
	, {
		"id": "170208", 
		"name": "John+Frusciante", 
		"adjacencies": [  "170209" ]
	}
	, {
		"id": "170209", 
		"name": "John_Frusciante", 
		"adjacencies": [  "170210" ,  "170407" ]
	}
	, {
		"id": "170210", 
		"name": "John_Frusciante#cite_note-rs100-0", 
		"adjacencies": [  "170211" ]
	}
	, {
		"id": "170406", 
		"name": "Tom_green", 
		"adjacencies": [  ]
	}
	, {
		"id": "170407", 
		"name": "Blood_Sugar_Sex_Magik", 
		"adjacencies": [  "170408" ]
	}
	, {
		"id": "170408", 
		"name": "Mother%27s_Milk", 
		"adjacencies": [  ]
	}
	, {
		"id": "170801", 
		"name": "Triple_Crown", 
		"adjacencies": [  ]
	}
	, {
		"id": "171202", 
		"name": "Battle_of_the_year", 
		"adjacencies": [  "171203" ]
	}
	, {
		"id": "171203", 
		"name": "frontalot", 
		"adjacencies": [  "171204" ]
	}
	, {
		"id": "171204", 
		"name": "Frontalot", 
		"adjacencies": [  "171205" ]
	}
	, {
		"id": "171262", 
		"name": "J2ee", 
		"adjacencies": [  "171265" ]
	}
	, {
		"id": "171265", 
		"name": "Enterprise_JavaBean", 
		"adjacencies": [  ]
	}
	, {
		"id": "171319", 
		"name": "The_Shining", 
		"adjacencies": [  "171320" ,  "171321" ]
	}
	, {
		"id": "171320", 
		"name": "The_Shining_(novel)", 
		"adjacencies": [  "171322" ]
	}
	, {
		"id": "171321", 
		"name": "The_Shining_(film)", 
		"adjacencies": [  ]
	}
	, {
		"id": "171322", 
		"name": "Under_the_Dome", 
		"adjacencies": [  "171323" ]
	}
	, {
		"id": "171514", 
		"name": "Sky_burial", 
		"adjacencies": [  "171515" ,  "171516" ]
	}
	, {
		"id": "171515", 
		"name": "File:Skyburial.JPG", 
		"adjacencies": [  ]
	}
	, {
		"id": "171516", 
		"name": "File:Skeletonskyburial.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "171759", 
		"name": "Santigold", 
		"adjacencies": [  ]
	}
	, {
		"id": "171995", 
		"name": "Sophocles", 
		"adjacencies": [  ]
	}
	, {
		"id": "172103", 
		"name": "Bert_Jansch", 
		"adjacencies": [  ]
	}
	, {
		"id": "172815", 
		"name": "Fleece", 
		"adjacencies": [  "172816" ]
	}
	, {
		"id": "172816", 
		"name": "Polar_fleece", 
		"adjacencies": [  ]
	}
	, {
		"id": "172971", 
		"name": "Openbsd", 
		"adjacencies": [  ]
	}
	, {
		"id": "174285", 
		"name": "Texts_from_last_night", 
		"adjacencies": [  "174286" ]
	}
	, {
		"id": "174286", 
		"name": "NSFW", 
		"adjacencies": [  ]
	}
	, {
		"id": "174334", 
		"name": "Irc", 
		"adjacencies": [  "174335" ]
	}
	, {
		"id": "174335", 
		"name": "Internet_Relay_Chat", 
		"adjacencies": [  "174336" ,  "174338" ]
	}
	, {
		"id": "174336", 
		"name": "K-line", 
		"adjacencies": [  ]
	}
	, {
		"id": "174338", 
		"name": "G-line", 
		"adjacencies": [  ]
	}
	, {
		"id": "176191", 
		"name": "Antiques_roadshow", 
		"adjacencies": [  ]
	}
	, {
		"id": "179007", 
		"name": "Kings_college", 
		"adjacencies": [  "179008" ]
	}
	, {
		"id": "179008", 
		"name": "King%27s_College,_Cambridge", 
		"adjacencies": [  "179009" ]
	}
	, {
		"id": "179009", 
		"name": "King%27s_College_Chapel,_Cambridge", 
		"adjacencies": [  "179010" ]
	}
	, {
		"id": "179010", 
		"name": "University_of_Cambridge", 
		"adjacencies": [  "179014" ]
	}
	, {
		"id": "179014", 
		"name": "Academic_Ranking_of_World_Universities", 
		"adjacencies": [  ]
	}
	, {
		"id": "179155", 
		"name": "Stephen_colbert", 
		"adjacencies": [  ]
	}
	, {
		"id": "179167", 
		"name": "Leon_russell", 
		"adjacencies": [  ]
	}
	, {
		"id": "179336", 
		"name": "Shiny_Toy_Guns", 
		"adjacencies": [  "179339" ,  "179340" ]
	}
	, {
		"id": "179339", 
		"name": "Peter_Schilling", 
		"adjacencies": [  ]
	}
	, {
		"id": "179340", 
		"name": "Major_Tom_(Coming_Home)", 
		"adjacencies": [  "179389" ,  "179390" ]
	}
	, {
		"id": "179389", 
		"name": "New_Wave", 
		"adjacencies": [  "179391" ]
	}
	, {
		"id": "179390", 
		"name": "Synthpop", 
		"adjacencies": [  ]
	}
	, {
		"id": "179391", 
		"name": "New_Wave_music", 
		"adjacencies": [  "179392" ]
	}
	, {
		"id": "179392", 
		"name": "Saint_Etienne_(band)", 
		"adjacencies": [  "179413" ]
	}
	, {
		"id": "179398", 
		"name": "The_ting_tings", 
		"adjacencies": [  "179399" ]
	}
	, {
		"id": "179398", 
		"name": "The_ting_tings", 
		"adjacencies": [  "179399" ]
	}
	, {
		"id": "179399", 
		"name": "That%27s_Not_My_Name", 
		"adjacencies": [  ]
	}
	, {
		"id": "179413", 
		"name": "Sarah_Cracknell", 
		"adjacencies": [  "179414" ]
	}
	, {
		"id": "179414", 
		"name": "File:Saintetienne2.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "179521", 
		"name": "File:Guitar_notes.png", 
		"adjacencies": [  ]
	}
	, {
		"id": "180699", 
		"name": "Fluticasone", 
		"adjacencies": [  "180700" ]
	}
	, {
		"id": "180700", 
		"name": "Glucocorticoid", 
		"adjacencies": [  ]
	}
	, {
		"id": "181868", 
		"name": "Arecibo_radio_telescope", 
		"adjacencies": [  ]
	}
	, {
		"id": "181953", 
		"name": "Hadoop", 
		"adjacencies": [  ]
	}
	, {
		"id": "181999", 
		"name": "Pokemon_Snap", 
		"adjacencies": [  ]
	}
	, {
		"id": "182904", 
		"name": "Aliens", 
		"adjacencies": [  "182905" ]
	}
	, {
		"id": "182905", 
		"name": "Aliens_(film)", 
		"adjacencies": [  "182911" ]
	}
	, {
		"id": "182911", 
		"name": "Alien_(film)", 
		"adjacencies": [  "182912" ]
	}
	, {
		"id": "182912", 
		"name": "Tom_Skerritt", 
		"adjacencies": [  ]
	}
	, {
		"id": "183911", 
		"name": "dercum%27s+disease", 
		"adjacencies": [  "183912" ]
	}
	, {
		"id": "183912", 
		"name": "Dercum%27s_disease", 
		"adjacencies": [  "183913" ]
	}
	, {
		"id": "183913", 
		"name": "Unidentified+Flying+Oddball", 
		"adjacencies": [  "183914" ]
	}
	, {
		"id": "183914", 
		"name": "Unidentified_Flying_Oddball", 
		"adjacencies": [  "183915" ]
	}
	, {
		"id": "183915", 
		"name": "Speed_of_light", 
		"adjacencies": [  "183916" ,  "183917" ]
	}
	, {
		"id": "183916", 
		"name": "Albert_Einstein", 
		"adjacencies": [  ]
	}
	, {
		"id": "183917", 
		"name": "the+daily+prophet", 
		"adjacencies": [  "183918" ]
	}
	, {
		"id": "183918", 
		"name": "The_Daily_Prophet", 
		"adjacencies": [  "183921" ]
	}
	, {
		"id": "183921", 
		"name": "potter+war", 
		"adjacencies": [  ]
	}
	, {
		"id": "184219", 
		"name": "Carbuncle", 
		"adjacencies": [  ]
	}
	, {
		"id": "184220", 
		"name": "Open-pit_mining", 
		"adjacencies": [  "184221" ,  "184222" ,  "184224" ]
	}
	, {
		"id": "184221", 
		"name": "Bingham_Canyon_Mine", 
		"adjacencies": [  ]
	}
	, {
		"id": "184222", 
		"name": "Bagger_288", 
		"adjacencies": [  "184223" ]
	}
	, {
		"id": "184223", 
		"name": "Takraf_RB293", 
		"adjacencies": [  ]
	}
	, {
		"id": "184224", 
		"name": "Mining", 
		"adjacencies": [  ]
	}
	, {
		"id": "184809", 
		"name": "Wasteland", 
		"adjacencies": [  "184810" ]
	}
	, {
		"id": "184810", 
		"name": "Wasteland_(computer_game)", 
		"adjacencies": [  "184811" ,  "184812" ]
	}
	, {
		"id": "184811", 
		"name": "GameFAQs", 
		"adjacencies": [  ]
	}
	, {
		"id": "184916", 
		"name": "Marc_Ecko", 
		"adjacencies": [  "184920" ]
	}
	, {
		"id": "184920", 
		"name": "Barry_Bonds", 
		"adjacencies": [  ]
	}
	, {
		"id": "184961", 
		"name": "Mail_order_bride", 
		"adjacencies": [  "184962" ]
	}
	, {
		"id": "184962", 
		"name": "Romance_scam", 
		"adjacencies": [  ]
	}
	, {
		"id": "185562", 
		"name": "Graceland", 
		"adjacencies": [  "185563" ]
	}
	, {
		"id": "185563", 
		"name": "Graceland_(disambiguation)", 
		"adjacencies": [  "185564" ]
	}
	, {
		"id": "185564", 
		"name": "Graceland_(album)", 
		"adjacencies": [  ]
	}
	, {
		"id": "185683", 
		"name": "Madness", 
		"adjacencies": [  "185684" ]
	}
	, {
		"id": "185684", 
		"name": "Madness_(band)", 
		"adjacencies": [  ]
	}
	, {
		"id": "185894", 
		"name": "Red_dawn", 
		"adjacencies": [  "185931" ]
	}
	, {
		"id": "186125", 
		"name": "List_of_device_bandwidths", 
		"adjacencies": [  ]
	}
	, {
		"id": "188266", 
		"name": "Ghostbusters", 
		"adjacencies": [  "188267" ]
	}
	, {
		"id": "188267", 
		"name": "Ivan_Reitman", 
		"adjacencies": [  "188268" ]
	}
	, {
		"id": "188268", 
		"name": "Juno_(film)", 
		"adjacencies": [  ]
	}
	, {
		"id": "189707", 
		"name": "L7", 
		"adjacencies": [  "189708" ]
	}
	, {
		"id": "189708", 
		"name": "L7_(band)", 
		"adjacencies": [  ]
	}
	, {
		"id": "190713", 
		"name": "Kidney_stones", 
		"adjacencies": [  ]
	}
	, {
		"id": "191643", 
		"name": "Katy_perry", 
		"adjacencies": [  "191644" ]
	}
	, {
		"id": "191644", 
		"name": "Dominique_Swain", 
		"adjacencies": [  "191645" ]
	}
	, {
		"id": "192826", 
		"name": "Mus%C3%A9e_Baud", 
		"adjacencies": [  ]
	}
	, {
		"id": "192827", 
		"name": "Musical_box", 
		"adjacencies": [  ]
	}
	, {
		"id": "192836", 
		"name": "http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=mechanical+singing+bird&fulltext=Search", 
		"adjacencies": [  "192837" ]
	}
	, {
		"id": "192837", 
		"name": "Automaton", 
		"adjacencies": [  "192838" ,  "192839" ]
	}
	, {
		"id": "192838", 
		"name": "Animatronics", 
		"adjacencies": [  ]
	}
	, {
		"id": "192839", 
		"name": "Mechatronics", 
		"adjacencies": [  ]
	}
	, {
		"id": "193154", 
		"name": "Blockbuster", 
		"adjacencies": [  "193155" ]
	}
	, {
		"id": "193155", 
		"name": "Blockbuster_Inc.", 
		"adjacencies": [  ]
	}
	, {
		"id": "193187", 
		"name": "White_death", 
		"adjacencies": [  "193188" ]
	}
	, {
		"id": "193188", 
		"name": "Simo_H%C3%A4yh%C3%A4", 
		"adjacencies": [  ]
	}
	, {
		"id": "194011", 
		"name": "Agile_software_development", 
		"adjacencies": [  "213812" ,  "213813" ]
	}
	, {
		"id": "194056", 
		"name": "Ronald_jenkees", 
		"adjacencies": [  "194057" ]
	}
	, {
		"id": "194057", 
		"name": "List_of_YouTube_celebrities", 
		"adjacencies": [  ]
	}
	, {
		"id": "194919", 
		"name": "http://en.wikipedia.org/w/index.php?title=Special%3ASearch&search=travellers&fulltext=Search", 
		"adjacencies": [  "194920" ]
	}
	, {
		"id": "194920", 
		"name": "Irish_Traveller", 
		"adjacencies": [  "194927" ]
	}
	, {
		"id": "194927", 
		"name": "drone", 
		"adjacencies": [  "194928" ]
	}
	, {
		"id": "194928", 
		"name": "Drone", 
		"adjacencies": [  "194929" ]
	}
	, {
		"id": "194929", 
		"name": "Unmanned_aerial_vehicle", 
		"adjacencies": [  ]
	}
	, {
		"id": "195255", 
		"name": "Lindsey_Vonn", 
		"adjacencies": [  ]
	}
	, {
		"id": "195581", 
		"name": "Oslo", 
		"adjacencies": [  ]
	}
	, {
		"id": "195632", 
		"name": "Ed_hardy", 
		"adjacencies": [  "195633" ]
	}
	, {
		"id": "195633", 
		"name": "Christian_Audigier", 
		"adjacencies": [  "195634" ,  "195635" ]
	}
	, {
		"id": "195634", 
		"name": "File:Christian_Audigier_Photographed_by_Ed_Kavishe_for_fashion_wire_press.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "195635", 
		"name": "affliction", 
		"adjacencies": [  "195636" ]
	}
	, {
		"id": "195636", 
		"name": "Affliction", 
		"adjacencies": [  "195637" ]
	}
	, {
		"id": "195637", 
		"name": "Affliction_Clothing", 
		"adjacencies": [  ]
	}
	, {
		"id": "195947", 
		"name": "Pavlova_(food)", 
		"adjacencies": [  "195952" ]
	}
	, {
		"id": "196621", 
		"name": "16_and_Pregnant", 
		"adjacencies": [  "196622" ,  "196623" ]
	}
	, {
		"id": "196622", 
		"name": "Morgan_J._Freeman", 
		"adjacencies": [  ]
	}
	, {
		"id": "196623", 
		"name": "Reality_television", 
		"adjacencies": [  ]
	}
	, {
		"id": "197092", 
		"name": "File:Qat_man.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "198735", 
		"name": "Norwegian_(airline)", 
		"adjacencies": [  ]
	}
	, {
		"id": "200036", 
		"name": "Somebody%27s_watching_me", 
		"adjacencies": [  ]
	}
	, {
		"id": "201127", 
		"name": "File:Cotw-screen.gif", 
		"adjacencies": [  ]
	}
	, {
		"id": "203103", 
		"name": "Lauren_Bacall", 
		"adjacencies": [  "203104" ]
	}
	, {
		"id": "203104", 
		"name": "File:Marilyn_Monroe,_Betty_Grable_and_Lauren_Bacall_in_How_to_Marry_a_Millionaire_trailer.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "204573", 
		"name": "Norway", 
		"adjacencies": [  ]
	}
	, {
		"id": "204863", 
		"name": "Aquavit", 
		"adjacencies": [  "204864" ]
	}
	, {
		"id": "204864", 
		"name": "Akvavit", 
		"adjacencies": [  ]
	}
	, {
		"id": "205794", 
		"name": "List_of_system_quality_attributes", 
		"adjacencies": [  "205795" ,  "205795" ,  "205796" ,  "205803" ,  "205807" ,  "205808" ,  "205814" ,  "205817" ,  "205797" ,  "205801" ,  "205801" ,  "205802" ,  "205804" ]
	}
	, {
		"id": "205795", 
		"name": "Dependability", 
		"adjacencies": [  ]
	}
	, {
		"id": "205795", 
		"name": "Dependability", 
		"adjacencies": [  ]
	}
	, {
		"id": "205796", 
		"name": "Reliability_(computer_networking)", 
		"adjacencies": [  ]
	}
	, {
		"id": "205803", 
		"name": "Effectiveness", 
		"adjacencies": [  ]
	}
	, {
		"id": "205807", 
		"name": "Extensibility", 
		"adjacencies": [  ]
	}
	, {
		"id": "205808", 
		"name": "Flexibility_(engineering)", 
		"adjacencies": [  ]
	}
	, {
		"id": "205814", 
		"name": "Interoperability", 
		"adjacencies": [  ]
	}
	, {
		"id": "205817", 
		"name": "Learnability", 
		"adjacencies": [  ]
	}
	, {
		"id": "207527", 
		"name": "Wayland%27s_Smithy", 
		"adjacencies": [  "207528" ,  "207529" ]
	}
	, {
		"id": "207528", 
		"name": "Long_barrow", 
		"adjacencies": [  ]
	}
	, {
		"id": "207548", 
		"name": "Toxoplasmosis", 
		"adjacencies": [  "207549" ,  "207550" ]
	}
	, {
		"id": "207549", 
		"name": "Arthur_Ashe", 
		"adjacencies": [  "207551" ,  "207552" ]
	}
	, {
		"id": "207550", 
		"name": "Louis_Wain", 
		"adjacencies": [  "207604" ]
	}
	, {
		"id": "207551", 
		"name": "Arthur_Ashe_for_Courage_Award", 
		"adjacencies": [  "207625" ,  "207626" ,  "207627" ]
	}
	, {
		"id": "207552", 
		"name": "Tommie_Smith", 
		"adjacencies": [  "207553" ]
	}
	, {
		"id": "207553", 
		"name": "1968_Olympics_Black_Power_salute", 
		"adjacencies": [  "207554" ,  "207555" ,  "207556" ]
	}
	, {
		"id": "207554", 
		"name": "Middle_Passage", 
		"adjacencies": [  "207557" ]
	}
	, {
		"id": "207555", 
		"name": "W%C5%82adys%C5%82aw_Kozakiewicz", 
		"adjacencies": [  ]
	}
	, {
		"id": "207556", 
		"name": "Doug_Roby", 
		"adjacencies": [  ]
	}
	, {
		"id": "207557", 
		"name": "Slave_ship", 
		"adjacencies": [  "207622" ,  "207624" ]
	}
	, {
		"id": "207604", 
		"name": "Visual_agnosia", 
		"adjacencies": [  ]
	}
	, {
		"id": "207622", 
		"name": "File:NavioNegreiro.gif", 
		"adjacencies": [  "207623" ]
	}
	, {
		"id": "207624", 
		"name": "File:Slave-ship.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "207625", 
		"name": "Loretta_Claiborne", 
		"adjacencies": [  ]
	}
	, {
		"id": "207626", 
		"name": "Dean_Smith", 
		"adjacencies": [  ]
	}
	, {
		"id": "207627", 
		"name": "Billie_Jean_King", 
		"adjacencies": [  "207628" ]
	}
	, {
		"id": "207628", 
		"name": "Ilana_Kloss", 
		"adjacencies": [  ]
	}
	, {
		"id": "208026", 
		"name": "Beer_Wars", 
		"adjacencies": [  ]
	}
	, {
		"id": "208211", 
		"name": "Gordon_Ramsey", 
		"adjacencies": [  "208212" ]
	}
	, {
		"id": "208212", 
		"name": "Gordon_Ramsay", 
		"adjacencies": [  "208213" ]
	}
	, {
		"id": "208213", 
		"name": "Alain_Ducasse", 
		"adjacencies": [  ]
	}
	, {
		"id": "208771", 
		"name": "Milli_Vanilli", 
		"adjacencies": [  "208772" ]
	}
	, {
		"id": "208772", 
		"name": "Diane_Warren", 
		"adjacencies": [  ]
	}
	, {
		"id": "212709", 
		"name": "Energy_tower_(downdraft)", 
		"adjacencies": [  ]
	}
	, {
		"id": "213712", 
		"name": "Enigma", 
		"adjacencies": [  "213713" ,  "213714" ]
	}
	, {
		"id": "213713", 
		"name": "Enigma_(UK_band)", 
		"adjacencies": [  ]
	}
	, {
		"id": "213714", 
		"name": "Enigma_(musical_project)", 
		"adjacencies": [  ]
	}
	, {
		"id": "213809", 
		"name": "Agile", 
		"adjacencies": [  "213810" ]
	}
	, {
		"id": "213810", 
		"name": "Agile_management", 
		"adjacencies": [  "194011" ,  "213811" ]
	}
	, {
		"id": "213811", 
		"name": "Agile_Manifesto", 
		"adjacencies": [  "213827" ]
	}
	, {
		"id": "213812", 
		"name": "Lean_software_development", 
		"adjacencies": [  ]
	}
	, {
		"id": "213813", 
		"name": "Timeboxing", 
		"adjacencies": [  ]
	}
	, {
		"id": "214099", 
		"name": "Parlimentary_procedure", 
		"adjacencies": [  "214100" ]
	}
	, {
		"id": "214100", 
		"name": "Robert%27s_Rules_of_Order", 
		"adjacencies": [  "214101" ]
	}
	, {
		"id": "214101", 
		"name": "Parliamentary_procedure_in_the_corporate_world", 
		"adjacencies": [  "214550" ]
	}
	, {
		"id": "214550", 
		"name": "canonical", 
		"adjacencies": [  "214551" ]
	}
	, {
		"id": "214551", 
		"name": "Canonical", 
		"adjacencies": [  "214552" ]
	}
	, {
		"id": "214552", 
		"name": "Canonical_Ltd", 
		"adjacencies": [  "214553" ,  "214554" ,  "214555" ,  "214572" ]
	}
	, {
		"id": "214553", 
		"name": "Quickly_(software)", 
		"adjacencies": [  ]
	}
	, {
		"id": "214554", 
		"name": "File:Mark-shuttleworth-launchpad-wiesbaden-big.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "214555", 
		"name": "Launchpad_(website)", 
		"adjacencies": [  ]
	}
	, {
		"id": "214572", 
		"name": "Ubuntu_(operating_system)", 
		"adjacencies": [  ]
	}
	, {
		"id": "216280", 
		"name": "Porridge", 
		"adjacencies": [  "216281" ,  "216285" ]
	}
	, {
		"id": "216281", 
		"name": "Steel-cut_oats", 
		"adjacencies": [  "216282" ,  "216283" ,  "216311" ]
	}
	, {
		"id": "216282", 
		"name": "File:Steel_Cut_Oats_008_A.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "216283", 
		"name": "Rolled_oats", 
		"adjacencies": [  "216284" ]
	}
	, {
		"id": "216284", 
		"name": "Sherman_Trap", 
		"adjacencies": [  ]
	}
	, {
		"id": "216285", 
		"name": "ibex", 
		"adjacencies": [  "216286" ]
	}
	, {
		"id": "216286", 
		"name": "Ibex", 
		"adjacencies": [  ]
	}
	, {
		"id": "216311", 
		"name": "Rice", 
		"adjacencies": [  "216312" ]
	}
	, {
		"id": "216312", 
		"name": "Microbes", 
		"adjacencies": [  ]
	}
	, {
		"id": "217489", 
		"name": "swamp+cooler", 
		"adjacencies": [  "217490" ]
	}
	, {
		"id": "217490", 
		"name": "Swamp_cooler", 
		"adjacencies": [  "217491" ]
	}
	, {
		"id": "217491", 
		"name": "Sacrificial_anode", 
		"adjacencies": [  ]
	}
	, {
		"id": "217508", 
		"name": "LTE", 
		"adjacencies": [  "217509" ]
	}
	, {
		"id": "217509", 
		"name": "Compaq_LTE", 
		"adjacencies": [  "217510" ]
	}
	, {
		"id": "217510", 
		"name": "Category:History_of_computing_hardware", 
		"adjacencies": [  "217511" ]
	}
	, {
		"id": "217511", 
		"name": "History_of_computing_hardware", 
		"adjacencies": [  ]
	}
	, {
		"id": "217700", 
		"name": "Kevin_Federline", 
		"adjacencies": [  "217701" ]
	}
	, {
		"id": "217701", 
		"name": "Shar_Jackson", 
		"adjacencies": [  "217702" ]
	}
	, {
		"id": "217702", 
		"name": "Angie_Everhart", 
		"adjacencies": [  ]
	}
	, {
		"id": "217787", 
		"name": "Gatling_gun", 
		"adjacencies": [  "217788" ,  "217790" ]
	}
	, {
		"id": "217788", 
		"name": "M61_Vulcan", 
		"adjacencies": [  "217789" ]
	}
	, {
		"id": "217789", 
		"name": "Phalanx_CIWS", 
		"adjacencies": [  ]
	}
	, {
		"id": "217790", 
		"name": "Tracer_ammunition", 
		"adjacencies": [  "217791" ,  "217792" ,  "217793" ]
	}
	, {
		"id": "217791", 
		"name": "File:Tracer_fire_at_MCB_Camp_Pendleton_DM-ST-89-00210.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "217792", 
		"name": "File:HMMWV_Tracer_Fire.JPEG", 
		"adjacencies": [  ]
	}
	, {
		"id": "217793", 
		"name": "File:7.62_NATO_tracer_rounds,_in_stripper_clip.JPG", 
		"adjacencies": [  ]
	}
	, {
		"id": "219472", 
		"name": "Between_Two_Worlds", 
		"adjacencies": [  "219473" ]
	}
	, {
		"id": "219473", 
		"name": "Between_Two_Worlds_(disambiguation)", 
		"adjacencies": [  "219474" ]
	}
	, {
		"id": "219474", 
		"name": "Roxana+Saberi", 
		"adjacencies": [  "219475" ]
	}
	, {
		"id": "219475", 
		"name": "Roxana_Saberi", 
		"adjacencies": [  ]
	}
	, {
		"id": "219478", 
		"name": "Italy", 
		"adjacencies": [  ]
	}
	, {
		"id": "223841", 
		"name": "Design_patterns", 
		"adjacencies": [  "223850" ,  "223851" ]
	}
	, {
		"id": "223850", 
		"name": "Design_pattern_(computer_science)", 
		"adjacencies": [  ]
	}
	, {
		"id": "223851", 
		"name": "Anti-pattern", 
		"adjacencies": [  ]
	}
	, {
		"id": "225938", 
		"name": "Wisdom_teeth", 
		"adjacencies": [  ]
	}
	, {
		"id": "226866", 
		"name": "flo+rida", 
		"adjacencies": [  "226867" ]
	}
	, {
		"id": "226867", 
		"name": "Flo_rida", 
		"adjacencies": [  ]
	}
	, {
		"id": "227039", 
		"name": "Undecidable", 
		"adjacencies": [  ]
	}
	, {
		"id": "227183", 
		"name": "Hutaree", 
		"adjacencies": [  "227184" ,  "227185" ]
	}
	, {
		"id": "227184", 
		"name": "Neologism", 
		"adjacencies": [  ]
	}
	, {
		"id": "227185", 
		"name": "Christian_Patriot_movement", 
		"adjacencies": [  "227186" ,  "227187" ,  "227188" ]
	}
	, {
		"id": "227186", 
		"name": "Militia_movement_(United_States)", 
		"adjacencies": [  "227189" ]
	}
	, {
		"id": "227187", 
		"name": "Christian_Identity", 
		"adjacencies": [  ]
	}
	, {
		"id": "227188", 
		"name": "The_Order_(group)", 
		"adjacencies": [  ]
	}
	, {
		"id": "227189", 
		"name": "Ruby_Ridge", 
		"adjacencies": [  "227190" ]
	}
	, {
		"id": "227190", 
		"name": "Boundary_County,_Idaho", 
		"adjacencies": [  ]
	}
	, {
		"id": "227659", 
		"name": "Pomplamoose", 
		"adjacencies": [  "227660" ,  "227661" ]
	}
	, {
		"id": "227660", 
		"name": "Julia_Nunes", 
		"adjacencies": [  ]
	}
	, {
		"id": "227661", 
		"name": "Mechanical_license", 
		"adjacencies": [  ]
	}
	, {
		"id": "227814", 
		"name": "Juggalo", 
		"adjacencies": [  "227815" ,  "227816" ]
	}
	, {
		"id": "227815", 
		"name": "File:Insane_Clown_Posse_concert.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "227816", 
		"name": "Miracles_(Insane_Clown_Posse_song)", 
		"adjacencies": [  "228487" ,  "228489" ]
	}
	, {
		"id": "228065", 
		"name": "Corna", 
		"adjacencies": [  ]
	}
	, {
		"id": "228066", 
		"name": "Unicode_Mathematical_Operators", 
		"adjacencies": [  "228067" ]
	}
	, {
		"id": "228067", 
		"name": "Unicode_Symbols", 
		"adjacencies": [  "228074" ]
	}
	, {
		"id": "228487", 
		"name": "Glade_(brand)#Plug-Ins", 
		"adjacencies": [  ]
	}
	, {
		"id": "122161", 
		"name": "6/6e/Star_in_the_east.png", 
		"adjacencies": [  ]
	}
	, {
		"id": "122395", 
		"name": "8/82/QRC_Typical_Cellular_Channelization_and_Frequencies.png", 
		"adjacencies": [  ]
	}
	, {
		"id": "122660", 
		"name": "http://www.crimelibrary.com/serial_killers/predators/ng/call_1.html", 
		"adjacencies": [  ]
	}
	, {
		"id": "125377", 
		"name": "http://www.fretbase.com/blog/2009/08/time-magazine-picks-the-10-best-electric-guitar-players-including-yngwie/", 
		"adjacencies": [  ]
	}
	, {
		"id": "125401", 
		"name": "http://www.heretodaygonetohell.com/releases/appetite-for-destruction/welcome-to-the-jungle.html", 
		"adjacencies": [  ]
	}
	, {
		"id": "126686", 
		"name": "https://launchpad.net/~mdz", 
		"adjacencies": [  ]
	}
	, {
		"id": "131542", 
		"name": "http://web.mit.edu/is/tel/5ess.html", 
		"adjacencies": [  ]
	}
	, {
		"id": "135833", 
		"name": "0/0a/PAVE_PAWS_Cape_Cod_AFS_1986.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "136845", 
		"name": "http://www.cogentco.com/img/other/networkmap_large.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "137624", 
		"name": "1/16/IceTGangstaRap.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "141279", 
		"name": "http://www.networkcomputing.com/showArticle.jhtml?articleID=199601085&queryText=199601085", 
		"adjacencies": [  ]
	}
	, {
		"id": "141768", 
		"name": "http://www.youtube.com/watch?v=UJb08ZzejAA", 
		"adjacencies": [  ]
	}
	, {
		"id": "143028", 
		"name": "http://www.digitas.harvard.edu/~perspy/old/issues/1995/apr/campaff.html", 
		"adjacencies": [  ]
	}
	, {
		"id": "143861", 
		"name": "5/5a/1896%242obv.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "144498", 
		"name": "http://www.eol.org/pages/7165", 
		"adjacencies": [  ]
	}
	, {
		"id": "147011", 
		"name": "9/98/Constitution_Pg4of4_AC.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "147017", 
		"name": "0/07/Us_declaration_independence.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "148682", 
		"name": "http://home.howstuffworks.com/question639.htm", 
		"adjacencies": [  ]
	}
	, {
		"id": "151872", 
		"name": "http://www.mtv.com/bands/r/rubin_rick/news_feature_040503/", 
		"adjacencies": [  ]
	}
	, {
		"id": "152940", 
		"name": "http://www.realworldremixed.com/download.php", 
		"adjacencies": [  ]
	}
	, {
		"id": "154805", 
		"name": "http://www.adventuregamers.com/underground/newsitem.php?id=1424", 
		"adjacencies": [  ]
	}
	, {
		"id": "154810", 
		"name": "http://www.infamous-adventures.com/forum/index.php?topic=1096.0", 
		"adjacencies": [  ]
	}
	, {
		"id": "157127", 
		"name": "http://www.rtca.org/CMS_DOC/MOPS.asp", 
		"adjacencies": [  ]
	}
	, {
		"id": "158115", 
		"name": "http://www.floridamemory.com/Collections/folklife/folklife_cd.cfm", 
		"adjacencies": [  ]
	}
	, {
		"id": "158699", 
		"name": "http://www.bleepingcomputer.com/combofix/how-to-use-combofix", 
		"adjacencies": [  ]
	}
	, {
		"id": "158700", 
		"name": "http://www.symantec.com/security_response/writeup.jsp?docid=2004-112111-3912-99", 
		"adjacencies": [  ]
	}
	, {
		"id": "161028", 
		"name": "http://ds.ign.com/articles/905/905964p1.html", 
		"adjacencies": [  ]
	}
	, {
		"id": "161343", 
		"name": "http://web.archive.org/web/20080117191431/http://www.billboard.com/bbcom/charts/yearend_chart_display.jsp?f=The+Billboard+200&g=Year-end+Albums&year=1956", 
		"adjacencies": [  ]
	}
	, {
		"id": "162131", 
		"name": "8/88/BurjDubaiHeight.svg", 
		"adjacencies": [  ]
	}
	, {
		"id": "162133", 
		"name": "a/a4/Comparisonfinal001fx7.png", 
		"adjacencies": [  ]
	}
	, {
		"id": "162142", 
		"name": "d/dd/KVLY-TV_Mast_Tower_Wide.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "164171", 
		"name": "http://www.imdb.com/title/tt0218839/", 
		"adjacencies": [  ]
	}
	, {
		"id": "167065", 
		"name": "d/d4/Nepomuk_280_-_Osadn%C3%ADci_z_Katanu.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "167065", 
		"name": "d/d4/Nepomuk_280_-_Osadn%C3%ADci_z_Katanu.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "167093", 
		"name": "5/5d/Axis_%26_Allies_Map_%26_Pieces.jpg", 
		"adjacencies": [  ]
	}
	, {
		"id": "169481", 
		"name": "http://www.csail.mit.edu/user/1547", 
		"adjacencies": [  ]
	}
	, {
		"id": "170181", 
		"name": "http://www.guitarplayer.com/", 
		"adjacencies": [  ]
	}
	, {
		"id": "170211", 
		"name": "http://www.rollingstone.com/news/story/5937559/the_100_greatest_guitarists_of_all_time/print", 
		"adjacencies": [  ]
	}
	, {
		"id": "171205", 
		"name": "http://frontalot.com/info.html", 
		"adjacencies": [  ]
	}
	, {
		"id": "171323", 
		"name": "http://www.stephenking.com/library/unpublished/cannibals_the.html", 
		"adjacencies": [  ]
	}
	, {
		"id": "184812", 
		"name": "http://www.gamefaqs.com/564602", 
		"adjacencies": [  ]
	}
	, {
		"id": "185931", 
		"name": "http://nrd.nationalreview.com/article/?q=YWQ4MDlhMWRkZDQ5YmViMDM1Yzc0MTE3ZTllY2E3MGM=", 
		"adjacencies": [  ]
	}
	, {
		"id": "191645", 
		"name": "http://www.imdb.com/name/nm0000663/", 
		"adjacencies": [  ]
	}
	, {
		"id": "195952", 
		"name": "http://en.wikibooks.org/wiki/Cookbook", 
		"adjacencies": [  ]
	}
	, {
		"id": "205797", 
		"name": "http://en.wiktionary.org/wiki/deployability", 
		"adjacencies": [  ]
	}
	, {
		"id": "205801", 
		"name": "http://en.wiktionary.org/wiki/distributability", 
		"adjacencies": [  ]
	}
	, {
		"id": "205801", 
		"name": "http://en.wiktionary.org/wiki/distributability", 
		"adjacencies": [  ]
	}
	, {
		"id": "205802", 
		"name": "http://en.wiktionary.org/wiki/durability", 
		"adjacencies": [  ]
	}
	, {
		"id": "205804", 
		"name": "http://en.wiktionary.org/wiki/efficiency", 
		"adjacencies": [  ]
	}
	, {
		"id": "207361", 
		"name": "http://mspresso.wordpress.com/2008/03/31/what-gets-measured-gets-done/", 
		"adjacencies": [  ]
	}
	, {
		"id": "207529", 
		"name": "http://stable.toolserver.org/geohack/geohack.php?pagename=Wayland%27s_Smithy&params=51.56645_N_-1.59575_E_", 
		"adjacencies": [  ]
	}
	, {
		"id": "207623", 
		"name": "4/4d/NavioNegreiro.gif", 
		"adjacencies": [  ]
	}
	, {
		"id": "211455", 
		"name": "http://sourceforge.net/projects/linuxquota/", 
		"adjacencies": [  ]
	}
	, {
		"id": "212898", 
		"name": "http://www.redbooks.ibm.com/redpapers/pdfs/redp3657.pdf", 
		"adjacencies": [  ]
	}
	, {
		"id": "213827", 
		"name": "http://agilemanifesto.org/", 
		"adjacencies": [  ]
	}
	, {
		"id": "228074", 
		"name": "http://www.unicode.org/charts/", 
		"adjacencies": [  ]
	}
	, {
		"id": "228489", 
		"name": "http://www.cracked.com/video_18171_the-insane-clown-posses-new-glade-plug-in-ad.", 
		"adjacencies": [  ]
	}
	, {
		"id": "0", 
		"name": "/", 
		"adjacencies": [  "59686" ,  "73489" ,  "114747" ,  "121183" ,  "122057" ,  "122103" ,  "122158" ,  "122165" ,  "122569" ,  "123133" ,  "123629" ,  "123781" ,  "123785" ,  "123788" ,  "123793" ,  "123803" ,  "123812" ,  "123824" ,  "125373" ,  "125602" ,  "126685" ,  "127689" ,  "127753" ,  "128349" ,  "129511" ,  "130849" ,  "130856" ,  "131550" ,  "132150" ,  "132316" ,  "132888" ,  "134542" ,  "134548" ,  "134558" ,  "134561" ,  "134564" ,  "134598" ,  "135526" ,  "135743" ,  "135811" ,  "136035" ,  "136150" ,  "136150" ,  "136842" ,  "137619" ,  "137943" ,  "138208" ,  "138227" ,  "138231" ,  "138393" ,  "138488" ,  "138565" ,  "138945" ,  "139093" ,  "139098" ,  "139116" ,  "139119" ,  "139123" ,  "139126" ,  "139129" ,  "139176" ,  "139652" ,  "140392" ,  "140600" ,  "141270" ,  "141336" ,  "141555" ,  "141560" ,  "142003" ,  "142158" ,  "142245" ,  "142245" ,  "142296" ,  "142315" ,  "142382" ,  "142384" ,  "142389" ,  "142403" ,  "142447" ,  "142489" ,  "142580" ,  "142628" ,  "143026" ,  "143056" ,  "143329" ,  "143425" ,  "143567" ,  "143665" ,  "143838" ,  "143838" ,  "143851" ,  "144379" ,  "144473" ,  "144495" ,  "144501" ,  "144684" ,  "144800" ,  "144827" ,  "144830" ,  "144909" ,  "145243" ,  "145360" ,  "145947" ,  "146291" ,  "146935" ,  "147007" ,  "147039" ,  "147039" ,  "147039" ,  "147039" ,  "147039" ,  "147425" ,  "147537" ,  "147956" ,  "148202" ,  "148590" ,  "148669" ,  "148756" ,  "148839" ,  "149018" ,  "149416" ,  "149467" ,  "149467" ,  "149495" ,  "149933" ,  "150671" ,  "150817" ,  "150965" ,  "151781" ,  "151781" ,  "152405" ,  "152528" ,  "152536" ,  "152564" ,  "152933" ,  "153007" ,  "153445" ,  "153807" ,  "154443" ,  "154803" ,  "154821" ,  "154829" ,  "155122" ,  "155208" ,  "155912" ,  "155973" ,  "156132" ,  "156136" ,  "156623" ,  "156627" ,  "156891" ,  "157120" ,  "157249" ,  "157333" ,  "157345" ,  "157587" ,  "158026" ,  "158052" ,  "158078" ,  "158191" ,  "158289" ,  "158321" ,  "158321" ,  "158448" ,  "158448" ,  "158685" ,  "158846" ,  "159224" ,  "159238" ,  "159244" ,  "159961" ,  "160225" ,  "160235" ,  "160282" ,  "160304" ,  "160633" ,  "160936" ,  "161302" ,  "161329" ,  "161580" ,  "161585" ,  "161635" ,  "161639" ,  "161650" ,  "161770" ,  "162094" ,  "162128" ,  "162344" ,  "162900" ,  "163035" ,  "163127" ,  "163161" ,  "163441" ,  "164168" ,  "164374" ,  "164939" ,  "164951" ,  "164987" ,  "165314" ,  "165434" ,  "166019" ,  "166019" ,  "166033" ,  "166446" ,  "166586" ,  "166636" ,  "166768" ,  "166868" ,  "167790" ,  "167809" ,  "167816" ,  "167835" ,  "168169" ,  "168184" ,  "168242" ,  "168358" ,  "168395" ,  "168559" ,  "168563" ,  "168687" ,  "168700" ,  "168826" ,  "168922" ,  "169484" ,  "169573" ,  "169974" ,  "170121" ,  "170121" ,  "170158" ,  "170178" ,  "170405" ,  "170800" ,  "171201" ,  "171261" ,  "171318" ,  "171513" ,  "171758" ,  "171994" ,  "172102" ,  "172814" ,  "172970" ,  "174284" ,  "174333" ,  "176190" ,  "179006" ,  "179154" ,  "179166" ,  "179335" ,  "179397" ,  "179397" ,  "179688" ,  "179688" ,  "180698" ,  "181867" ,  "181952" ,  "181998" ,  "182903" ,  "183910" ,  "184216" ,  "184218" ,  "184808" ,  "184915" ,  "184960" ,  "185561" ,  "185682" ,  "185893" ,  "185934" ,  "188265" ,  "189706" ,  "190712" ,  "191642" ,  "192825" ,  "193153" ,  "193186" ,  "194055" ,  "194918" ,  "195254" ,  "195580" ,  "195631" ,  "195910" ,  "195946" ,  "196620" ,  "197091" ,  "200035" ,  "201121" ,  "203102" ,  "204572" ,  "204862" ,  "205793" ,  "207358" ,  "207526" ,  "207547" ,  "208025" ,  "208210" ,  "208770" ,  "211454" ,  "212704" ,  "213711" ,  "213808" ,  "214098" ,  "216279" ,  "217488" ,  "217507" ,  "217699" ,  "217786" ,  "219471" ,  "219477" ,  "223840" ,  "225937" ,  "226865" ,  "227033" ,  "227182" ,  "227658" ,  "227813" ,  "228054" ,  "228064" ,  "122219" ,  "122392" ,  "122405" ,  "122414" ,  "125400" ,  "129180" ,  "130800" ,  "132477" ,  "140307" ,  "140312" ,  "141671" ,  "141738" ,  "142112" ,  "142493" ,  "147009" ,  "147160" ,  "150928" ,  "152881" ,  "156644" ,  "158698" ,  "160774" ,  "161625" ,  "163380" ,  "163440" ,  "166084" ,  "167063" ,  "169480" ,  "179519" ,  "194011" ,  "126685" ,  "205794" ,  "212897" ,  "227816" ]
	}
 ];



    //end
    var infovis = document.getElementById('infovis');
    var w = infovis.offsetWidth, h = infovis.offsetHeight;
    //init canvas
    //Create a new canvas instance.
    var canvas = new Canvas('mycanvas', {
        'injectInto': 'infovis',
        'width': w,
        'height': h
    });
    //end
    //init Hypertree
    var ht = new Hypertree(canvas, {
        //By setting overridable=true,
        //Node and Edge global properties can be
        //overriden for each node/edge.
        Node: {
            overridable: true,
            'transform': false,
            color: "#f00"
        },
        
        Edge: {
            overridable: true,
            color: "#088"
        },
        
        //Change the animation transition type
        transition: Trans.Back.easeOut,
        duration:1000,
        
        //This method is called right before plotting an
        //edge. This method is useful for adding individual
        //styles to edges.
        onBeforePlotLine: function(adj){
            //Set random lineWidth for edges.
            if (!adj.data.$lineWidth) 
                adj.data.$lineWidth = Math.random() * 5 + 1;
        },
        
        onBeforeCompute: function(node){
            Log.write("centering");
        },
        //Attach event handlers.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.style.cursor = "pointer";
            domElement.onclick = function () {
                ht.onClick(node.id, { hideLabels: false });
            };
        },
        
        //This method is called when moving/placing a label.
        //You can add some positioning offsets to the labels here.
        onPlaceLabel: function(domElement, node){
            var width = domElement.offsetWidth;
            var intX = parseInt(domElement.style.left);
            intX -= width / 2;
            domElement.style.left = intX + 'px';
        },
        
        onAfterCompute: function(){
            Log.write("done");

            //Make the relations list shown in the right column.
            var node = Graph.Util.getClosestNodeToOrigin(ht.graph, "pos");
            var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
            html += "<ul>";
            Graph.Util.eachAdjacency(node, function(adj){
                var child = adj.nodeTo;
                html += "<li>" + child.name + "</li>";
            });
            html += "</ul>";
        }
    });
    //load JSON graph.
    ht.loadJSON(json, 2);
    //compute positions and plot
    ht.refresh();
    //end
    ht.controller.onBeforeCompute(Graph.Util.getNode(ht.graph, ht.root));
    ht.controller.onAfterCompute();
}

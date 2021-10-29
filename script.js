function replace(poradie) {
    remove();
    add(poradie);
}

function remove() {
    var removeDiv = document.getElementById("remove");
    removeDiv.remove();
}

function add(poradie) {
    if (poradie == 1) {
        var nadpis = "SigmaGame"
    }
    else if (poradie == 2) {
        var nadpis = "Download"
    }
    else if (poradie == 3) {
        var nadpis = "Tvorcovia"
    }
    
    adding = document.getElementById("add");
    removable_content = document.createElement("div");
    removable_content.id = "remove";
    content = document.createElement("H1");
    text = document.createTextNode(nadpis);
    content.appendChild(text);
    removable_content.appendChild(content);
    adding.appendChild(removable_content);
    removing = document.getElementById("remove");

    if (poradie == 1){
        videoelement = document.createElement("VIDEO");
        videoelement.setAttribute("id", "video1");
        videoelement.setAttribute("controls", "true");
        
        var sourceMP4 = document.createElement("source"); 
        sourceMP4.type = "video/mp4";
        sourceMP4.src = "Nisemonogatari_episode_8_Toothbrush_scene.mp4";
        videoelement.appendChild(sourceMP4);
        removing.appendChild(videoelement)
    }
}
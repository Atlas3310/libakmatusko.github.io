function replace(stranka) {
    remove();
    add(stranka);
}

function remove() {
    var removeDiv = document.getElementById("remove");
    removeDiv.remove();
}

let SigmaGame = "SigmaGame"
let Download = "Download"
let Tvorcovia = "Tvorcovia"

function add(stranka) {
    adding = document.getElementById("add");
    removable_content = document.createElement("div");
    removable_content.id = "remove";
    content = document.createElement("H1");
    text = document.createTextNode(stranka);
    content.appendChild(text);
    removable_content.appendChild(content);
    adding.appendChild(removable_content);
}
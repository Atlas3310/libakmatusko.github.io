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

    if (poradie == 2){
        download_a = document.createElement("A");
        download_a.href = "New_success_intermediate_workbok_answer.pdf";
        download_a.target = "_blank";
        download_a.download = "Anj_pdf";
        download_a_text = document.createElement("H2");
        download_a_text.appendChild(document.createTextNode("Hru stiahni Tu!"));
        download_a.appendChild(download_a_text);
        //ostatne subory
        other_downloads = document.createElement("BUTTON");
        other_downloads.class = "buttons";
        other_downloads.onclick = download_table();
        other_downloads.appendChild(document.createTextNode("Ostatné súbory na stiahnutie."));
        //tabulka na ostatne subory
        //table = document.createElement("TABLE");
        //tbody = document.createElement("TBODY");
        //table.appendChild("tbody")
        //actual yobrayovanie
        removing.appendChild(download_a);
        removing.appendChild(other_downloads);
    }
}

function download_table() {
    removing = document.getElementById("remove");

    table = document.createElement("TABLE");
    removing.appendChild(table)
    tbody = document.createElement("TBODY");
    table.appendChild(tbody)
     
        var i;
        for(i = 0; i < files_to_download.length; i++){
            newRow = tbody.insertRow();
            nazov = newRow.insertCell(0);
            link = newRow.insertCell(1);
            newNameText = document.createTextNode(files_to_download[i].name)
            newLinkText = document.createTextNode(files_to_download[i].link)
            nazov.appendChild(newNameText)
            link.appendChild(newLinkText)
        }
}

class file {
    constructor(name, link){
        this.name = name;
        this.link = link;
    }
}

const files_to_download = [new file("ban <user> [reason]", "bans user  "), new file("unbans user   ", "ban_members")];
function replace(poradie) {
    if (visibleTable == true){
        document.getElementById("download_table2").id = "download_table1";
        visibleTable = false
    }
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
    removable_content.aling = "senter";
    content = document.createElement("H1");
    text = document.createTextNode(nadpis);
    content.appendChild(text);
    removable_content.appendChild(content);
    adding.appendChild(removable_content);
    removing = document.getElementById("remove");

    if (poradie == 1){
        hlavna_stranka()
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
        other_downloads.id = "other_downloads";
        other_downloads.setAttribute("onclick","downloadsTable();");
        //other_downloads.setAttribute("onclick","download_table();");
        other_downloads.appendChild(document.createTextNode("Ostatné súbory na stiahnutie."));
        //tabulka na ostatne subory
        
        //actual yobrayovanie
        removing.appendChild(download_a);
        removing.appendChild(other_downloads);
    }
    if (poradie == 3){
        removing = document.getElementById("remove");
        vecera = document.createElement("IMG");
        vecera.id = "vecera"
        removing.appendChild(vecera);
        text_o_nas =document.createElement("DIV");
        text_o_nas.id = text_o_nas;
        text_o_nas.innerHTML = "Toto same my, štiria autori SigmaGame: <a href=#Abby>Abby Beblavá</a>, <a href=#Martin>Martin Kozár</a>, <a href=#Matus>Matúš Libák</a>, <a href=#Leo>Leo Oros</a><br><br>";
        removing.appendChild(text_o_nas);
        vsetci()
    }
}
//hlavna stranka
function hlavna_stranka(){
    popis = document.createElement("P");
    popis.innerHTML = "<b>SigmaGame je umenie vo všetkých jeho formách. Oko, ucho a meč musia pracovať ako jeden. Je to úloha iba pre najlepších.<br>Skús či si jedným z nich</br>";
    removing.append(popis);
    videoelement = document.createElement("VIDEO");
    videoelement.setAttribute("id", "video1");
    videoelement.setAttribute("controls", "true");        
    sourceMP4 = document.createElement("source"); 
    sourceMP4.type = "video/mp4";
    sourceMP4.src = "Nisemonogatari_episode_8_Toothbrush_scene.mp4";
    videoelement.appendChild(sourceMP4);
    removing.appendChild(videoelement)
    medzera = document.createElement("P");
    medzera.innerHTML = "<br><br>";
    removing.append(medzera);
}
//o nas
function vsetci(){
    Abby()
    Martin()
    Matus()
    Leo()
}
function Abby(){
    removing = document.getElementById("remove");
    AbbyDiv = document.createElement("DIV")
    AbbyDiv.id = "Abby"
    AbbyDiv.innerHTML = "Som Abby"
    removing.appendChild(AbbyDiv)
}
function Martin(){
    removing = document.getElementById("remove");
    MartinDiv = document.createElement("DIV")
    MartinDiv.id = "Martin"
    MartinDiv.innerHTML = "Som Martin"
    removing.appendChild(MartinDiv)
}
function Matus(){
    removing = document.getElementById("remove");
    MatusDiv = document.createElement("DIV")
    MatusDiv.id = "Matus"
    MatusDiv.innerHTML = "Som Matus"
    removing.appendChild(MatusDiv)
}
function Leo(){
    removing = document.getElementById("remove");
    LeoDiv = document.createElement("DIV")
    LeoDiv.id = "Leo"
    LeoDiv.innerHTML = "Som Leo"
    removing.appendChild(LeoDiv)
}


let visibleTable = false
function downloadsTable() {
    if (visibleTable == true){
        document.getElementById("download_table2").id = "download_table1";
        visibleTable = false
    }
    else if (visibleTable == false){
        document.getElementById("download_table1").id = "download_table2";
        visibleTable = true
    }
}


//nacitanie prvej stranky
add(1)
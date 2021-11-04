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
        vecera.id = "vecera";
        vecera.src = "Screenshot_2021-11-03_at_07.38.49.png";
        vecera_link = document.createElement("A");
        vecera_link.href = "Screenshot_2021-11-03_at_07.38.49.png";
        vecera_link.target = "_blank";
        vecera_link.append(vecera);
        removing.appendChild(vecera_link);
        text_o_nas =document.createElement("DIV");
        text_o_nas.id = text_o_nas;
        text_o_nas.innerHTML = "<br>Toto same my, štiria autori SigmaGame: <a href=#Abby>Abby Beblavá</a>, <a href=#Martin>Martin Kozár</a>, <a href=#Matus>Matúš Libák</a>, <a href=#Leo>Leo Oros</a><br><br>Sme zo školy Alejová 1 v Košiciach. Baví nás informatiaka a toto je naša prvá spoločná súťaž.<br><br><br>";
        removing.appendChild(text_o_nas);
        vsetci();
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
    QR()
}
function Abby(){
    removing = document.getElementById("remove");
    AbbyDiv = document.createElement("DIV")
    AbbyDiv.id = "Abby"
    AbbyDiv.innerHTML = "Abbygail Beblavá<br>Dizajn, obrázky a vlastne vsetka art robota.<br>Vie totiž kresliť.<br><a href = mailto: abby.beblava@gmail.com>Email</a><br><br>"
    removing.appendChild(AbbyDiv)
}
function Martin(){
    removing = document.getElementById("remove");
    MartinDiv = document.createElement("DIV")
    MartinDiv.id = "Martin"
    MartinDiv.innerHTML = "Martin Kozár<br>Hudba, beaty a vsetky sound efekty.<br>Ma hudobny sluch.<br><a href = mailto: martin.kozar2005@gmail.com>Email</a><br><br>"
    removing.appendChild(MartinDiv)
}
function Matus(){
    removing = document.getElementById("remove");
    MatusDiv = document.createElement("DIV")
    MatusDiv.id = "Matus"
    MatusDiv.innerHTML = "Matúš Libák<br>Stranka a prezentacia a dobry dojem.<br>Vie robit stranky a prezentovať.<br><a href = mailto: libak.matusko@gmail.com>Email</a><br><br>"
    removing.appendChild(MatusDiv)
}
function Leo(){
    removing = document.getElementById("remove");
    LeoDiv = document.createElement("DIV")
    LeoDiv.id = "Leo"
    LeoDiv.innerHTML = "Leo Oros<br>Zaklad hry a herne mechaniky<br>Vie programovať.<br><a href = mailto: leo7968@gmail.com>Email</a><br><br>"
    removing.appendChild(LeoDiv)
}
function QR() {
    removing = document.getElementById("remove");
    QRDiv = document.createElement("DIV")
    QRDiv.id = "QR"
    QRDiv.innerHTML = "<span class='tooltiptext'>Príspevok 5€</span><br>Podporte nás<br><br>(Skenuj bankovou aplikáciou.)<br>"
    vecera = document.createElement("IMG");
    vecera.id = "qr";
    vecera.src = "ČSOB Smart platba – PAY by square.png";
    vecera_link = document.createElement("A");
    vecera_link.href = "ČSOB Smart platba – PAY by square.png";
    vecera_link.target = "_blank";
    vecera_link.append(vecera);
    QRDiv.appendChild(vecera_link);
    //QRDiv.innerHTML = '<span class='tooltiptext'>Dobrovoľny príspevok.<br>(Skenuj bankovou aplikáciou.)</span>';
    removing.appendChild(QRDiv);
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
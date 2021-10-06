blabla = [];
function sub(){
    var welp1 = document.getElementById("nothing1").value;
    var welp2 = document.getElementById("nothing2").value;
    var welp3 = document.getElementById("nothing3").value;
    var welp4 = document.getElementById("nothing4").value;

    blabla.push(welp1);
    blabla.push(welp2);
    blabla.push(welp3);
    blabla.push(welp4);

    console.log(blabla);
    document.getElementById("bottydiv").innerHTML = blabla;
    document.getElementById("click").style.display = "none";
    document.getElementById("distorter").style.display = "inline-block"
}

function sorter(){
    blabla.sort();
    console.log(blabla);
    document.getElementById("bottydiv").innerHTML = blabla;
}
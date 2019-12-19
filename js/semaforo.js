function semaforo() {
    "use strict";
    
    var s1 = document.ruas.s1.value;
    var s2 = document.ruas.s2.value;
    var texto = document.getElementById("resultado");
    
    if (s1 == "sim" && s2 == "sim") {
        texto.innerHTML = "A é preferencial";
        document.getElementById("ra").src = "images/semaforo_03.png";
        document.getElementById("rb").src =  "images/semaforo_07.png";
    }
    if (s1 == "sim" && s2 == "nao") {
        texto.innerHTML = "Passa A";
        document.getElementById("ra").src = "images/semaforo_03.png";
        document.getElementById("rb").src =  "images/semaforo_07.png";
    }
    if (s2 == "sim" && s1 == "nao") {
        texto.innerHTML = "Passa B";
        document.getElementById("ra").src = "images/semaforo_07.png";
        document.getElementById("rb").src =  "images/semaforo_03.png";
    }
    if (s1 == "nao" && s2 == "nao") {
        texto.innerHTML = "Semaforos desligados, ninguém passa!!!";
        document.getElementById("ra").src = "images/semaforo_01.png";
        document.getElementById("rb").src =  "images/semaforo_01.png";
    }
}
/*
    SENSOR 1: s1;
    SENSOR 2: s2;

    s1, aciona apartir de 15°
    s2, aciona apartir de 20°
*/
function temperatura() {
    "use strict";
    temps1.innerHTML = s1.value + "°";
    temps2.innerHTML = s2.value + "°";
    
    //Mudança de Temperaturas
    if(s1.value >= 15 && s2.value >= 20){
        document.getElementById("aq").src = "images/heater_off.png";
        resultado_aq.innerHTML = "OFF";
        document.getElementById("re").src = "images/cooler_on.png";
        resultado_aq.innerHTML = "ON";
        resultado.innerHTML = "Temperatura acima da média";
    }
    
    //o teste abaixo foi REFORÇADO para que não resultasse em "FALHA NOS SENSORES"
    else if(s1.value >= 15 && s1.value < 20 && s2.value < 20 && s2.value > 15){
        document.getElementById("aq").src = "images/heater_off.png";
        resultado_aq.innerHTML = "OFF";
        document.getElementById("re").src = "images/cooler_off.png";
        resultado_aq.innerHTML = "OFF";
        resultado.innerHTML = "Temperatura ambiente";
    }
    
    else if(s1.value < 15 && s2.value < 20){
        document.getElementById("aq").src = "images/heater_on.png";
        resultado_aq.innerHTML = "ON";
        document.getElementById("re").src = "images/cooler_off.png";
        resultado_aq.innerHTML = "OFF";
        resultado.innerHTML = "Temperatura abaixo da média";
    }
    
    //Caso os testes não confirmem com os resultados acima ele indicará "FALHA NOS SENSORES"
    else{
        document.getElementById("aq").src = "images/heater_off.png";
        resultado_aq.innerHTML = "OFF";
        document.getElementById("re").src = "images/cooler_off.png";
        resultado_aq.innerHTML = "OFF";
        resultado.innerHTML = "Falha nos sensores";
    }
}
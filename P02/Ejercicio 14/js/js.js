window.onload = function fecha() {
    var dia = new Date();

    var weekday = new Array(7);
    weekday[0] =  "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "Miercoles";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";

    var diaText = weekday[dia.getDay()];

    document.getElementById("fecha").innerHTML = diaText;
};
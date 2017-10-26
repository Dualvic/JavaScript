window.onload = function fecha() {

    var fecha = new Date("Wed Mar 21 2009 12:15:00 GMT+0100 (CET)");

    var date = new Date();
    var hora = date.getHours() + ":" + date.getMinutes();
    var dia = date.getDate();
    var mes = date.getMonth() + 1;
    var anho = date.getFullYear();


    document.getElementById("fecha").innerHTML = fecha;
    document.getElementById("fechaEnunciado").innerHTML = dia + "/" + mes + "/" + anho + " " + hora;
};
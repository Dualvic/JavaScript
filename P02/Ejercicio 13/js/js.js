window.onload = function fecha() {

var date = new Date();
var hora = date.getHours() + ":" + date.getMinutes();
var dia = date.getDate() + 3;
var mes = date.getMonth() + 1;
var anho = date.getFullYear();

document.getElementById("fechaEnunciado").innerHTML = dia + "/" + mes + "/" + anho + " " + hora;

var date = new Date();
    var hora = date.getHours() + ":" + date.getMinutes();
    var dia = date.getDate();
    var mes = date.getMonth() + 5;
    var anho = date.getFullYear();

    document.getElementById("fechaEnunciado2").innerHTML = dia + "/" + mes + "/" + anho + " " + hora;

var date = new Date();
var hora = date.getHours() + ":" + date.getMinutes();
var dia = date.getDate();
var mes = date.getMonth() + 1;
var anho = date.getFullYear() - 10;

document.getElementById("fechaEnunciado3").innerHTML = dia + "/" + mes + "/" + anho + " " + hora;
};
window.onload = function fecha() {
    let date = new Date();
    let hora = date.getHours() + ":" + date.getMinutes();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let anho = date.getFullYear();


    document.getElementById("fecha").innerHTML = dia + "-" + mes + "-" + anho + " " + hora;

};
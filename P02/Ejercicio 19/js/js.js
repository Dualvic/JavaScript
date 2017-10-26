let momentoActual = new Date();

let hour = momentoActual.getHours();
let minutes = momentoActual.getMinutes();
let seconds = momentoActual.getSeconds();

let horaImprimible = hour + " : " + minutes + " : " + seconds;

function mueveReloj(){
    let momentoActual = new Date();
    let hour = momentoActual.getHours();
    let minutes = momentoActual.getMinutes();
    let seconds = momentoActual.getSeconds();

    let horaImprimible = hour + " : " + minutes + " : " + seconds;

    document.form_reloj.reloj.value = horaImprimible;
    setTimeout("mueveReloj()",1000);
}




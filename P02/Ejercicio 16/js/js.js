function calculate() {

    let fecha = document.getElementById("fecha").value;

    let fechaActual = new Date();
    let nacimiento = new Date(fecha);
    let año = fechaActual.getFullYear() - nacimiento.getFullYear();
    let mes = fechaActual.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < nacimiento.getDate())) {
        año--;
    }

    document.getElementById("result").innerHTML = "Edad: " + año;
}
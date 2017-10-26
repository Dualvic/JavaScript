function compare() {

    let fecha = document.getElementById("fecha").value;
    let fechaComparar = document.getElementById("fechaComparar").value;

    let fechaToDate = new Date(fecha);
    let fechaCompararToDate = new Date(fechaComparar);

    if (fechaToDate > fechaCompararToDate) {
        document.getElementById("result").innerHTML = 'Resultado: ' + fechaToDate;
    } else {
        document.getElementById("result").innerHTML = 'Resultado: ' + fechaCompararToDate;
    }

}
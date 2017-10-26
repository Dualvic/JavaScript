window.onload = function () {
    var initDate = moment("2015-01-01T01:00:01");
    var endDate = moment("2015-02-14T02:05:23");

    var resultadoDias = endDate.diff(initDate, 'days');
    var resultadoHoras = endDate.diff(initDate, 'hours');
    var resultadoSegundos = endDate.diff(initDate, 'seconds');

    document.getElementById("sample").innerHTML = "Diferencia de " +  resultadoDias + " dias, " + resultadoHoras + " horas y " + resultadoSegundos + " segundos";
};
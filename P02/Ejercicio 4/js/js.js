function calculate() {

    var a = parseInt(document.getElementById("a").value);
    var pi = 3.1415;

    resultR = pi*(a*a);
    resultL = 2 * pi* a;

    document.getElementById("result").innerHTML = "El radio es: " + resultR.toString() + " y la Longitud es: " + resultL.toString();

}
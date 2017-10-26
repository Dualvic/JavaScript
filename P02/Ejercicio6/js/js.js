function splitEmail() {
    var str = document.getElementById("email").value;

    var split = str.split("@");

    document.getElementById("result1").innerHTML = "El usuario es: " + split[0];
    document.getElementById("result2").innerHTML = "El dominio es: " + split[1];
}
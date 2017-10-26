function sliceEmail() {
    let str = document.getElementById("email").value;

    let index = str.indexOf("@");
    let user = str.slice(0, index);
    let domin = str.slice(index +1, str.length);

    document.getElementById("result1").innerHTML = "El usuario es: " + user;
    document.getElementById("result2").innerHTML = "El dominio es: " + domin;
}
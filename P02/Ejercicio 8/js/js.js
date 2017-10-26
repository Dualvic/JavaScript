function splitValue() {

    let str = "The reference contains descriptions and examples of all string properties and methods.";
    let index = str.length / 2;

    let text1 = str.substring(0, index);

    let text2 = str.substring(index);

    document.getElementById("result1").innerHTML = "Primer Texto:  " + text1;
    document.getElementById("result2").innerHTML = "Segundo texto: " + text2;
}
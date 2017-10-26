function calculate() {

    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);


    result = b/-a;

    document.getElementById("result").innerHTML = result.toString();

}
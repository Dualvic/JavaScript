function check() {

    let valors = [true, 5, false, "hola", "Adios", 2];

    let resultText;
    let resultNumber;

    if (valors[3].length > valors[4].length) {
        resultText = valor[3];
    } else {
        resultText = valor[4];
    }

    resultNumber = valor[1] + valor[5];

    document.getElementById("resultText").innerHTML = 'Texto mas largo: ' + resultText;
    document.getElementById("resultNum").innerHTML = 'Texto mas largo: ' + resultNumber;

}

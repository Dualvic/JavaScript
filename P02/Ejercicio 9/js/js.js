function calculate() {

    let value = document.getElementById("value").value;

    let result = parseInt(value,8);

    document.getElementById("result").innerHTML = 'El resultado es :' +  result;
}
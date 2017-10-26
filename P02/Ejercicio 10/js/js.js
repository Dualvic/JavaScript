function throwDice() {

    let dice = document.getElementById("caras").value;

    dice = parseInt(dice);

    result = Math.floor(Math.random() * dice) + 1;

    document.getElementById("result").innerHTML = 'Ha salido: ' + result;

}
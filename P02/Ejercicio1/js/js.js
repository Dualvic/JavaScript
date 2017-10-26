var isOpen = false;

function changeImage() {

    if (!isOpen) {
        document.getElementById("sobre").src="./img/sobre_Abierto.jpg";
        isOpen = true;
    } else {
        document.getElementById("sobre").src="./img/sobre_cerrado.jpg";
        isOpen =  false;
    }
}
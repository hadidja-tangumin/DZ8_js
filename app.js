const colorSquare = document.getElementById("color-square");

function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function updateColor() {
    const randomColor = generateRandomColor();
    colorSquare.style.backgroundColor = randomColor;
    colorSquare.textContent = randomColor;
}

colorSquare.addEventListener("click", updateColor);

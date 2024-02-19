const graphics = document.querySelector(".graphics");
const ctx = graphics.getContext("2d");

graphics.width = 300;
graphics.height = 300;

var pixelSize;

var maxRed;
var maxGreen;
var maxBlue;

var speed;

function randomColor() {
    const red = Math.round(Math.random() * maxRed);
    const green = Math.round(Math.random() * maxGreen);
    const blue = Math.round(Math.random() * maxBlue);

    return `rgb(${red}, ${green}, ${blue})`;
}

function getInputs() {

    pixelSize = parseInt(document.querySelectorAll(".pixelsize")[1].value);
    document.querySelectorAll(".pixelsize")[0].innerText = `Pixel Size: ${pixelSize}`;

    maxRed = parseInt(document.querySelectorAll(".maxred")[1].value);
    document.querySelectorAll(".maxred")[0].innerText = `Max Red: ${maxRed}`;

    maxGreen = parseInt(document.querySelectorAll(".maxgreen")[1].value);
    document.querySelectorAll(".maxgreen")[0].innerText = `Max Green: ${maxGreen}`;

    maxBlue = parseInt(document.querySelectorAll(".maxblue")[1].value);
    document.querySelectorAll(".maxblue")[0].innerText = `Max Blue: ${maxBlue}`;

    speed = parseFloat(document.querySelectorAll(".speed")[1].value);
    document.querySelectorAll(".speed")[0].innerText = `Speed (secs): ${speed}`;

    requestAnimationFrame(getInputs);

}

document.querySelectorAll(".speed")[1].onchange = () => {
    clearInterval(loopInt);
    loopInt = setInterval(loop, speed * 1000);
}

function loop() {

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, graphics.width, graphics.height);

    for (var y = 0; y < graphics.height; y += pixelSize) {
        for (var x = 0; x < graphics.width; x += pixelSize) {
            ctx.fillStyle = randomColor();
            ctx.fillRect(x, y, pixelSize, pixelSize);
        }
    }

}

var loopInt = setInterval(loop, 50);

getInputs();
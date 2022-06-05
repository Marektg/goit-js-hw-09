const startBnt = document.querySelector('button[data-start=""]');
const stopBnt = document.querySelector('button[data-stop=""]');
const body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// startBnt.setAttribute("onclick", "timeChangeColor");


let timeChangeColor;
function changeColor() {

    body.style.backgroundColor = `${getRandomHexColor()}`;

}

startBnt.addEventListener("click", () => {
      timeChangeColor = setInterval(changeColor, 1000);
    startBnt.disabled = true;
});
stopBnt.addEventListener("click", () => { clearInterval(timeChangeColor); startBnt.disabled = false; });

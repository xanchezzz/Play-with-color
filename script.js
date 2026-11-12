document.getElementById("heading1");
heading1.innerHTML = "Play with colors";
heading1.style.color = "black";
heading1.style.fontSize = "30px"
document.getElementById("btn");
btn.style.color = "black";
function generatorcolor(){
    const randomcolor = "#"+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomcolor;
    document.getElementById("btn").style.backgroundColor = randomcolor;
}
const slider = document.querySelector("#myRange");
slider.addEventListener("input", () => {
    const hue = slider.value;
    document.body.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
})

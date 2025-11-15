function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
function changeRandomColor(current) {
    current.target.style.backgroundColor = getRandomColor();
}
function createGrid() {
    let n = parseInt(prompt("Enter a number : "));
    if(n >100){
        alert("Enter a value less than 100");
        return Error;
    }
    let a = [];
    let maincont = document.querySelector(".maincont");
    maincont.textContent = '';
    maincont.style.width = "644px";
    maincont.style.height = "644px";
    maincont.style.boxSizing = "border-box";
    maincont.style.border = "2px solid black";
    let mhw = 640/n;
    n = n*n;
    for (let i = 0; i < n; i++) {
        a[i] = document.createElement("div");
        maincont.appendChild(a[i]);
        a[i].style.width = mhw+"px";
        a[i].style.height = mhw+"px";
        a[i].addEventListener('mouseover', changeRandomColor);
    }
}
let submitbtn = document.querySelector("#buttonno");
submitbtn.addEventListener('click',createGrid);
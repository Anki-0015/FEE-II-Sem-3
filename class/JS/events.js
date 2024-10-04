var btn = document.querySelectorAll("button");
console.dir(btn);
for (btns of btn){
    button.onclick(btn);
    console.log("ok");
}

btn.onclick = function () {
    console.log("button clicked");
};
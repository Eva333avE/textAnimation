const text = document.querySelector(".text"),
    strText = text.textContent,
    splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
    if (splitText[i] === " ") {
        text.innerHTML += " ";
    }
    console.log(text.innerHTML);
}    

let char = 0;
let timer = setInterval(addClassToEachSpan, 50);

function addClassToEachSpan() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }    
}

function complete() {
    clearInterval(timer);
    timer = null;
}
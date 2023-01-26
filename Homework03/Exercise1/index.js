let changeColor = (element, color) => {
    element.style.color = color;
    if(color === ""){
        element.style.color = "black"
    }

}

let fontSize = (element, textSize) =>{
    element.style.fontSize = `${textSize}px`;
    if(textSize === ""){
        element.style.fontSize = "24px"
    }
}



let button = document.getElementById("button");
button.addEventListener("click", () =>{
    let inputColor = document.getElementById("color").value;
    let fontSizeInput = document.getElementById("textSize").value;
    let resultHeader = document.getElementsByTagName("h1")[0]
    changeColor(resultHeader, inputColor);
    fontSize(resultHeader, fontSizeInput);
})
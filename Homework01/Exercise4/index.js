function titleGenerator(){
    let color = document.getElementById("color").value;
    let fontSize = document.getElementById("fontSize").value;
    let items = document.getElementById("text").value;

    let headerGenerator = document.createElement("h1");
    headerGenerator.style.color = color
    headerGenerator.style.fontSize = fontSize
    headerGenerator.innerText = items

    document.body.appendChild(headerGenerator);

}

let button = document.getElementById("result");
button.addEventListener("click", titleGenerator)

function generateList(){
    let color = document.getElementById("color").value;
    let fontSize = document.getElementById("fontSize").value;
    let items = document.getElementById("items").value;

    let ul = document.createElement("ul");
    ul.style.color = color;
    ul.style.fontSize = fontSize;

    let arrayItem = items.split(",");
    for(let i = 0; i < arrayItem.length; i++){
        let listItem = document.createElement("li");
        listItem.innerHTML = arrayItem[i];
        ul.appendChild(listItem);
    }
    document.body.appendChild(ul);
    
}
let button = document.getElementById("result")
button.addEventListener("click", generateList)

let names = ["Aleksandar", "Hristijan", "Marko", "Darko", "Nikola"]
let button = document.getElementById("btn");
let result = document.getElementById("result");


button.addEventListener("click", function(){
    result.innerHTML = "";
    for(let i = 0; i < names.length; i++){
        let list = document.createElement("li");
        list.innerHTML = names[i];
        result.appendChild(list);
    }
})
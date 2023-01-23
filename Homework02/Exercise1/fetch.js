let button = document.getElementById("button");
let resultList = document.getElementsByTagName("ul")[0];
button.addEventListener("click", function () {
    fetch("https://swapi.dev/api/films")
        .then(response => response.json())
        .then(data => {

            for (let film of data.results) {
                let item = document.createElement("li");
                item.innerText = film.title;
                resultList.appendChild(item);
            }
        });




})
$(document).ready(function(){

    let button = document.getElementById("button");
    let resultList = document.getElementsByTagName("ul")[0];
    button.addEventListener("click", function(){
        $.ajax({
            url:"https://swapi.dev/api/films",
            success: function(response){
                let film = response.results;
                for(let i = 0; i < film.length; i++){
                let li = document.createElement("li");
                li.innerText = film[i].title;
                resultList.appendChild(li);
                }
            }
        })
    })

})
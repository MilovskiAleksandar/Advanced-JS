//Person
let imageButton = document.getElementById("clickPerson");
let table = document.getElementsByTagName("table")[0];
let tableShip = document.getElementsByTagName("table")[1]
let firstHeader = document.getElementById("person");
let tbody = document.createElement("tbody");

//url for person
let url = "https://swapi.dev/api/people/?page=1";
let nextUrl = ""
let previousUrl = ""

//api for person
function fetchApi(url){

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        createTable(data)
    })
}

//table for person
function createTable (data){
    let person = data.results
    tbody.innerHTML = ""
    for(let i = 0; i < person.length; i++){
        tbody.innerHTML += `
        <tr>
            <td>${person[i].name}</td>
            <td>${person[i].height}</td>
            <td>${person[i].mass}</td>
            <td>${person[i].gender}</td>
            <td>${person[i].birth_year}</td>
            <td>${person[i].films.length}</td>
        </tr>   
 
        
          `
        table.appendChild(tbody);
        nextUrl = data.next;
        //button generating
        if(nextUrl === null){
            nextButton.style.display = 'none'
        } else{
            nextButton.style.display = 'block'
        }

        previousUrl = data.previous
        if(previousUrl === null){
            previousButton.style.display = 'none'
        } else{
           previousButton.style.display = 'block'
        }
    }
}


//Ship

let buttonShip = document.getElementById("clickShip");

//url for ship
let urlShip = "https://swapi.dev/api/starships/?page=1";
let nextShip = ""
let previousShip = ""

//api for ship
function apiShip(urlShip){

    fetch(urlShip)
    .then(response => response.json())
    .then(data => {
        createTableShip(data)
    })
}
//table for ship
function createTableShip (ship){
    
    let shipResult = ship.results


    for(let i = 0; i < shipResult.length; i++){
        tbody.innerHTML += `
        <tr>
            <td>${shipResult[i].name}</td>
            <td>${shipResult[i].model}</td>
            <td>${shipResult[i].manufacturer}</td>
            <td>${shipResult[i].cost_in_credits}</td>
            <td>${shipResult[i].crew}</td>
            <td>${shipResult[i].starship_class}</td>
            
        </tr>   
 
        
          `
        tableShip.appendChild(tbody);

        nextShip = ship.next;
        //button generating
        if(nextShip === null){
            buttonShipNext.style.display = 'none'
        } else {
            buttonShipNext.style.display = 'block'
        }
        previousShip = ship.previous
        if(previousShip === null){
            buttonShipPrevious.style.display = 'none'
        } else{
            buttonShipPrevious.style.display = 'block'
        }
        
    }
}
// image button za ship
buttonShip.addEventListener("click", function(){
    firstHeader.innerHTML = ""
    tbody.innerHTML = ""
    apiShip(urlShip)
    firstHeader.innerHTML += 'Ship Details'
    nextButton.style.display = 'none'
    previousButton.style.display = 'none'
})
//image button for person
imageButton.addEventListener("click", function(){
    firstHeader.innerHTML = ""
    tbody.innerHTML = ""
    fetchApi(url)
    firstHeader.innerHTML += 'Person Details'
    buttonShipNext.style.display = "none"
    buttonShipPrevious.style.display = 'none'
})
//next button
let nextButton = document.getElementById("next");

nextButton.addEventListener("click", function(){
    tbody.innerHTML = ""
    fetch(nextUrl)
    .then(response => response.json())
    .then(data => {
        createTable(data)
    })
})
let buttonShipNext = document.getElementById("shipNext")
buttonShipNext.addEventListener("click", function(){
    tbody.innerHTML = ""
    fetch(nextShip)
    .then(response => response.json())
    .then(ship => {
        createTableShip(ship)
    })
})
//previous button
let previousButton = document.getElementById("previous");

previousButton.addEventListener("click", function(){
    tbody.innerHTML = ""
    fetch(previousUrl)
    .then(response => response.json())
    .then(data => {
        createTable(data)
    })
})
let buttonShipPrevious = document.getElementById("shipPrevious")
buttonShipPrevious.addEventListener("click", function(){
    tbody.innerHTML = ""
    fetch(previousShip)
    .then(response => response.json())
    .then(ship => {
        createTableShip(ship)
    })
})
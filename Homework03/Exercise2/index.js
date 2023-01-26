let button = document.getElementById("btn");
let buttonNext = document.getElementById("next")
let buttonPrevious = document.getElementById("previous");
let table = document.getElementsByTagName("table")[0];

buttonNext.style.display = `none`;
buttonPrevious.style.display = `none`

let url = "https://swapi.dev/api/planets/?page=1"
let url1 = "https://swapi.dev/api/planets/?page=2"

function fetchApi(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      createTable(data)
    })
}


function createTable(data) {
  let tbody = document.createElement("tbody");
  let person = data.results
  for (let i = 0; i < person.length; i++) {
    tbody.innerHTML += `
      <tr>
          <td>${person[i].name}</td>
          <td>${person[i].population}</td>
          <td>${person[i].climate}</td>
          <td>${person[i].gravity}</td>
      </tr>   

      
        `
    table.appendChild(tbody);

  }
}

button.addEventListener("click", function () {
  fetchApi(url);
  buttonNext.style.display = `block`;
  buttonPrevious.style.display = `none`;
  button.style.display = `none`
  table.innerHTML = ""
})

buttonNext.addEventListener("click", function(){
  fetchApi(url1);
  buttonNext.style.display = `none`;
  buttonPrevious.style.display = `block`;
  button.style.display = `none`
  table.innerHTML = ""
})

buttonPrevious.addEventListener("click", function(){
  fetchApi(url);
  buttonNext.style.display = `block`;
  buttonPrevious.style.display = `none`;
  table.innerHTML = ""
})
$(document).ready(function(){
    let button = document.getElementById("button");
    let title = document.getElementsByTagName("h1")[0];

    button.addEventListener("click", function(){

        $.ajax({
            url: "https://swapi.dev/api/vehicles/20",
            success: function(response){
                let name = response.name;
                title.innerText = name;

                let tbody = document.getElementsByTagName("tbody")[0];
                tbody.innerHTML = "";
                tbody.innerHTML += `
                <tr>
                    <td>Model</td>
                    <td> ${response.model}</td>
                </tr>
                <tr>
                    <td> Manufacturer</td>
                    <td> ${response.manufacturer}</td>
                </tr>
                <tr>
                    <td>Crew</td>
                    <td> ${response.crew}</td>
                </tr>
                <tr>
                    <td>Passengers</td>
                    <td> ${response.passengers}</td>
                </tr>
                <tr>
                    <td>Vehicle Class</td>
                    <td> ${response.vehicle_class}</td>
                </tr>
                `;
            }
        })
    })


})

//vtor nacin

// $.ajax({
//     url: "https://swapi.dev/api/vehicles/20",
//     success: function(response){
//         let name = response.name;
//         title.innerText = name;

//         let model = response.model;
//         let manufacturer = response.manufacturer;
//         let crew = response.crew;
//         let passengers = response.passengers;
//         let vehicleClass = response.vehicle_class

//         let tbody = document.createElement("tbody");
//         let tr = document.createElement("tr");

//         let tableTD = `<td>${name}</td><td>${model}</td><td>${manufacturer}</td><td>${crew}</td><td>${passengers}</td><td>${vehicleClass}</td>`
//         tr.innerHTML = tableTD;
//         tbody.appendChild(tr); 
//         table.appendChild(tbody);
//     }
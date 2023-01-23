let button = document.getElementById("button");

function printVehicleName(name){
    let resultTitle = document.getElementsByTagName("h1")[0];
    resultTitle.innerText = name
};

function printVehicleStats(response){
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    tbody.innerHTML += `
    <tr>
        <td> Model </td>
        <td> ${response.model}</td>
    </tr>
    <tr>
        <td> Manufacturer </td>
        <td> ${response.manufacturer}</td>
    </tr>
    <tr>
        <td> Crew </td>
        <td> ${response.crew}</td>
    </tr>
    <tr>
        <td> Passengers </td>
        <td> ${response.passengers}</td>
    </tr>
    <tr>
        <td> Vehicle Class </td>
        <td> ${response.vehicle_class}</td>
    </tr>
    `;
}

function vehicleStatsName(){
    fetch("https://swapi.dev/api/vehicles/20")
    .then(response => response.json())
    .then(function(response){
        return response;
    })
    .then(function(call){
        console.log(call)
        printVehicleName(call.name)
        printVehicleStats(call)
    })
}

button.addEventListener("click", vehicleStatsName);

function Student(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}

let button = document.getElementById("result");
let database = [];

button.addEventListener("click", function () {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let student = new Student(firstName, lastName, age, email);
    database.push(student);
    console.log(database);
    clearInputs()
})

function clearInputs(){
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    email.value = "";
}

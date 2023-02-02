let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

function callApi(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            printExercise(data)
        })
}

function printExercise(data) {
    let femaleAverageGrade5 = data.filter(student => student.gender === 'Female' && student.averageGrade === 5).map(student => student.firstName);
    console.log(femaleAverageGrade5);

    let maleStudentsSkopjeOver18 = data.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age >= 18).map(x => `${x.firstName} ${x.lastName}`);
    console.log(maleStudentsSkopjeOver18)

    let femaleAverageGradeOver24 = data.filter(student => student.gender === 'Female' && student.age >= 24).map(x => x.averageGrade)
    .reduce((sum, grade) => sum + grade, 0) / data.filter(student => student.gender === 'Female' && student.age >= 24).length; 
    console.log(femaleAverageGradeOver24)

    let sortStudentsByLastName = data.sort((a, b) => (a.lastName > b.lastName) - (a.lastName < b.lastName))  //data.sort((a, b) => a.lastName.localeCompare(b.lastName))
    console.log(sortStudentsByLastName)
}

callApi(url)
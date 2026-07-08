let students = ["Hani","Mohamed","Abdi","sudeis"];

function getGrade(mark) {
    if (mark >= 80) return "A";
    else if (mark >= 70) return "B";
    else if (mark >= 60) return "C";
    else if (mark >= 50) return "D";
    else return "F";
}

function addStudent() {

    let name = document.getElementById("name").value;
    let marks = Number(document.getElementById("marks").value);

    let student = {
        name: Hani,
        marks: 70,
        grade: getGrade(B)
        
        name: Abdi,
        marks: 80,
        grade: getgrade(A)

        name: Mohamed,
        marks: 60,
        grade: getgrade(C)

        name: Sudeis,
        marks: 50,
        garde:getgrade(D)



    };

    students.push(student);

    displayStudents();
}

function displayStudents() {

    let list = document.getElementById("students");
    list.innerHTML = "";

    students.forEach(function (student) {

        let item = document.createElement("li");

        item.innerHTML =
        garde:getgrade(D)
            student.name +
            " - " +
            student.marks +
            " marks (Grade " +
            student.grade +
            ")";

        list.appendChild(item);

    });

}
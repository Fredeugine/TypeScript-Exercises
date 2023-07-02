"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function PrintPerson(person) {
    console.log(person.name, person.age, person.id);
}
let user = {
    name: 'Green',
    age: 40,
    id: 815,
};
PrintPerson(user);
function createPerson() {
    return { name: "Stefan", age: 39, semester: 25 };
}
function printPerson(person) {
    console.log(person.name, person.age);
}
function studyForAnotherSemester(student) {
    student.semester++;
    console.log(student.semester);
}
function isLongTimeStudent(student) {
    return console.log(student.age - student.semester / 2 > 30 && student.semester > 20);
}
const me = createPerson();
// All work!
studyForAnotherSemester(me);
isLongTimeStudent(me);
printPerson(me);

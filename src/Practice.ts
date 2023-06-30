import {User} from "./@types";

function PrintPerson(person: User){

    console.log(person.name,person.age,person.id)
}

let user: User = {
    name: 'Green',
    age: 40,
    id: 815,
}
PrintPerson(user)

type Person = {name:string; age:number;};
type Studying = {semester:number;};
type Student = {id:string;age:number;semester:number;}

function createPerson(){
    return{ name:"Stefan",age:39,semester:25};
}
function printPerson(person: Person){
    console.log(person.name,person.age);
}
function studyForAnotherSemester(student: Studying) {
    student.semester++;
    console.log(student.semester)
}
function isLongTimeStudent(student: Student){
    return console.log(student.age - student.semester/2 > 30 && student.semester > 20)
}
const me= createPerson();
// All work!
studyForAnotherSemester(me)
isLongTimeStudent(me)
printPerson(me)

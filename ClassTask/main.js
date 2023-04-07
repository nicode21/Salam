"use strict";

let students = [

  {
    name: "Nicat",
    surname: "Novruzzade",
    age: 21
  },

  {
    name: "Fatime",
    surname: "Bayramova",
    age: 20
  },

  {
    name: "Musa",
    surname: "Afandiyev",
    age: 19
  },

  {
    name: "Murad",
    surname: "Ceferov",
    age: 19
  },

  {
    name: "Resul",
    surname: "Hesenov",
    age: 15
  }

]


function getStudents() {

  console.log(students);

}

function getFilteredStudents(str) {
  let stus = students.filter(m => m.name.includes(str));

  console.log(stus);
}

setTimeout(() => {
  getStudents()
}, 2001);

setTimeout(() => {
  getFilteredStudents("N");
}, 2000);





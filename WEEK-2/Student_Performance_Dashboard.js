/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
   */

   const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//1. filter() students who passed (marks ≥ 40)
let s1=students.filter(students=>students.marks>=40)
console.log("passes",s1)
/*2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D
              */
let maps=students.map(function(students)
{
    if(students.marks>=90)
    {
        return 'A'
    }
    else if(students.marks>=75 && students.marks<90)
    {
        return 'B'
    }
    else if(students.marks>=60 && students.marks<75)
    {
        return 'C'
    }
    else
    {
        return'D'
    }

})
console.log(maps)

//3. reduce() to calculate average marks
let red=students.reduce((students,ind)=>students+ind.marks,0)
let x=red/students.length
console.log(red)
console.log(x)

//4. find() the student who scored 92
let fin=students.find(students=>students.marks==92)
console.log(fin)

//5. findIndex() of student "Kiran"
let finind=students.findIndex(students=>students.name=='Kiran')
console.log(finind)


/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
    */
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//1. filter() employees from IT department
let fil=employees.filter(emp=>emp.department=='IT')
console.log(fil)
//2.map() to add:
// netSalary = salary + 10% bonus
console.log(employees)
let maps=employees.map(function(emp){
    emp.netSalary=emp.salary+(emp.salary*0.1)
      return emp.salary                //console.log(emp.netSalary)
})
console.log(maps)
//3.reduce() to calculate total salary payout
let red=employees.reduce((emp,sal)=>emp+sal.salary,0)
console.log(red)
//4. find() employee with salary 30000
let fin=employees.find((empfin)=>empfin.salary==30000)
console.log(fin)
// findIndex() of employee "Neha"
let finind=employees.findIndex((empfinind)=>empfinind.name=='Neha')
console.log(finind)


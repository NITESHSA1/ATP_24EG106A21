const employees=[
{eno:101,name:"ravi",marks:[78,82,91],},
{eno:102,name:"Bhanu",marks:[65,70,68],},
{eno:103,name:"sneha",marks:[88,92,95],},
{eno:104,name:"kiran",marks:[55,60,58],},
{eno:105,name:"anitha",marks:[90,85,87],},
]
//1.insert new emp at second position
employees.splice(2,0,{eno:106,name:"nitesh",marks:[99,99,99]})
console.log(employees)
//removing the nake kiran the object
employees.splice(4,1)//make it another way find the person if the array contain 200 memebrs
console.log(employees)
//3.change the last marks 95 to 75 of emp "sneha"
employees.splice(3,1,{eno:103,name:"sneha",marks:[88,92,75],})
console.log(employees)
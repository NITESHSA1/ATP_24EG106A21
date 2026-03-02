/*
assignment 1:daily temp analyzer
--------------------------------
scenario: you are analyzing daily temp recorded by weather app
test data:
const temp=[32,35,28,40,38,30,42]
Tasks

1.filter() temp above 35
2.map convert all temp from c to k
3.reduce to cal avg temp
4.find first temp above 40
5.findindex() of temp 28
*/

const { X509Certificate } = require("crypto")

const temp=[32,35,28,40,38,30,42]
//1.filter() temp above 35
let fil=temp.filter(elements=>elements>=40)
console.log(fil)
//2.map convert all temp from c to k
let maps=temp.map(elements=>(elements*(9/5)+32))
console.log(maps)
//3.reduce to cal avg temp
let red=temp.reduce((temp,ind)=>temp+ind)
let x=red/temp.length
console.log(red)
console.log(x)
//4.find first temp above 40
let fin=temp.find(temp=>temp>40)
console.log(fin)
//5.findindex() of temp 28
let finind=temp.findIndex(temp=>temp==28)
console.log(finind)
/*6. write a fun that recevies an array as arg and return there sum*/
//creating arry in js
let arr=[22,21,6,33]
//function for calculating all the array sums
let lists=function (arr)
{
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i]
    }
    return sum;
}

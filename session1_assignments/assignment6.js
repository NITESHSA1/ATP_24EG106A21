/*6. write a fun that recevies an array as arg and return there sum*/
let arr=[22,21,6,33]
let lists=function (arr)
{
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i]
    }
    return sum;
}
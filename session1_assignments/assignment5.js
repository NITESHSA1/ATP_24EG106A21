/* 5.write a function that receives 3 number args and returns the largest number among them
*/
let arr=function (a,b,c)
{
    if(a>b && a>c)
    {
        return a
    }
    else if(b>c)
    {
        return b
    }
    else{
        return c
    }
}
console.log(arr(45,26,65))
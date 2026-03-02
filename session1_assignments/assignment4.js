//find the smallest number in this array[98,75,65,98]
let arr=[98,75,65,98]
let min=arr[0]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<min)
    {
        min=arr[i]
    }
}
console.log(`the smallest number in the array is ${min}`)
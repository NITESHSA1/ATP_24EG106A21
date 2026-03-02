/*7.write an fun that receives an array and search elements AS args and returns the index of that search element in the array it should return not found when
the element is not found in the array*/
let tolist=[100,200,300]
let search=function (tolist,elements)
{
    for(let i=0;i<tolist.length;i++)
    {
        if(tolist[i]==elements)
        {
            return elements;
        }
            
    }
    return 'not found'
}
console.log(search(tolist,200))
let payment=function(amount,paymenttype)//main fun
{
    console.log("amount is "+amount);
    console.log(paymenttype());
}
let upi=function()//call back fun
{
    return "payment done through upi";
}   

payment(1000,upi);
payment(59000,upi)//here upi is a call back function
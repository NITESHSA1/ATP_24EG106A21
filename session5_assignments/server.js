import express from 'express'
const product=express()
const port=3200
product.use(express.json())

//TEST DATA 
const test=[]
//CHECKING THE HTTP IS RUNNING OR NOT
product.listen(port,()=>{
    console.log("port is runnig successfully on the port 3200")
})
//ROUTES 
//TO READ ALL THE PRODUCTS
product.get('/test',(req,res)=>
{
    res.json({message:"all products ",products:test})
})
//TO READ THE PRODUCT WITH SPECIFIC BRAND
product.get('/test/:brand',(req,res)=>{
    console.log(req.params)
    let reqbrand=req.params.brand
    let brands=test.find((finbrand)=>finbrand.brand==reqbrand)
    if(brands==undefined)
    {
        return res.json({message:"specific brand is not found your searching"})
    }
    res.json({message:`the specific brand ${reqbrand} your searching is found`})
})

//TO INSERT THE PRODUCT
product.post('/test',(req,res)=>
{
    const clientreq=req.body
    test.push(clientreq)
    res.json({message:"product is added"})
})

//TO UPDATE THE PRODUCT
product.put('/test',(req,res)=>{

    let clientupreq=req.body
     let proindex=test.findIndex((tester)=>tester.id==clientupreq.id)
    if(proindex==-1)
    {
        return res.json({message:"updation not completed successfully(NO PRODUCT)"})
    }
    test.splice(proindex,1,clientupreq)
    res.json({message:"updated the product successfully"})
 
})
//TO DELETE THE PRODUCT
product.delete('/test/:productid',(req,res)=>
{
    
    let reqnum=Number(req.params.productid)
    let proindex=test.findIndex((tester)=>tester.productid==reqnum)
    if(proindex==-1)
    {
        return res.json({message:"NO PRODUCT TO DELETE"})
    }
    test.splice(proindex,1)
    res.json({message:"product is deleted successfully"})
    
  
})
   
})

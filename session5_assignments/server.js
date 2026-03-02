/*
//create http srver
import exp from 'express'
const app=exp()//express application returns//exp internally contain the http server + many things
//port number to listen clinet request
const port=3200
app.listen(port,())=>console.log(`server is listening to port ${port}`))//assign port number to http server


//create api
// application program interface
//(rest api)-representationl state trnasfer
//route structure
//app.MEHOD(path,request handler)
//===========request,response
//domain (http://localhost:3200/users)
//route to handle get req of client


*/// create http server
/*
import express from 'express';

const app = express(); 

// Middleware to parse JSON data from request bodies (essential for POST/PUT)
app.use(express.json());

const port = 3200;


//TEST DATA
let users=[]
// route to handle GET request
app.get('/users', (req, res) => {
    //read all the users
    res.json({message:"all users",Payload:users})

});
app.get('/users/:id', (req, res) => {
    //get id from url parameter
    console.log(req.params)
    let idofurl=Number(req.params.id)
    //findindex of user
    let index=users.find((user)=>user.id==idofurl)
    if(index==undefined)
    {
        return res.json({message:"user not found to delete"})
    }
    res.json({message:"yes user is finded "})
}
)

// route to handle POST request
app.post('/users', (req, res) => {
    //get user from client
    const newuser=req.body
    users.push(newuser)
    //send req
    res.json({message:"user created"})
    
});

// route to handle PUT request
app.put('/users', (req, res) => {
    //get modified user from  req{}
    let modifieduser=req.body;
    //get index of of exisiting user in user body
    let index=users.findIndex((user)=>user.id==modifieduser.id)
    //if user not found
    if(index==-1)
    {
        return res.json({message:"user not found"})
    }
    //update user with index
    users.splice(index,1,modifieduser)

    //send res
    res.json({message:"user updated"})

   
});

// route to handle DELETE request
app.delete('/users/:id', (req, res) => {
    //get id from url parameter
    console.log(req.params)
    let idofurl=Number(req.params.id)
    //findindex of user
    let index=users.findIndex((user)=>user.id==idofurl)
    if(index==-1)
    {
        return res.json({message:"user not found to delete"})
    }
    //delete index by user
    users.splice(index,1)

    //respo
    res.json({message:"user found deleted"})
})
   

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//psot and put request should  to the API as body of the req object
//get and delete request do not support body of the request
//so that these two requests can send data through the end point
//complete
*/
import express from 'express'
const product=express()
const port=3200
product.use(express.json())

//test data
const test=[]
product.listen(port,()=>{
    console.log("port is runnig successfully on the port 3200")
})
//routes for get
product.get('/test',(req,res)=>
{
    res.json({message:"all products ",products:test})
})

product.post('/test',(req,res)=>
{
    const clientreq=req.body
    test.push(clientreq)
    res.json({message:"product is added"})
})

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

product.delete('/test/:id',(req,res)=>
{
    /*
    let reqnum=Number(req.params.id)
    let proindex=test.findIndex((tester)=>tester.id==reqnum)
    if(proindex==-1)
    {
        return res.json({message:"NO PRODUCT TO DELETE"})
    }
    test.splice(proindex,1)
    res.json({message:"product is deleted successfully"})
    */
   product.delete('/users/:id', (req, res) => {
    //get id from url parameter
    console.log(req.params)
    let idofurl=Number(req.params.id)
    //findindex of user
    let index=test.findIndex((user)=>user.id==idofurl)
    if(index==-1)
    {
        return res.json({message:"user not found to delete"})
    }
    //delete index by user
    test.splice(index,1)

    //respo
    res.json({message:"user found deleted"})
})
   
})
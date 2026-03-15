/*1.generate package.json
2.create express server
3.install mongoose and connect to mongodb server

REST ApP----MONGODB NATIVE DRIV ER-->DB SERVER
REST API-->MONGOOSEDDM TOOL-->DB SERVER*/


fetch("https://jsonplaceholder.typicode.com/posts")


async function getdata()
{
    let res=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await res.json()
    console.log(data)

    }

getdata()

4.BUILD user API
create user
read all users
read all user by ID
update user by id 
delete user by id

5.crate schema and the model of the resources(user)
6.define the routes

use findone megthod to read a document with non object id fields 
2.use findbyid to read document with obj id//



200-success
201-created
400-bad request(client side mistake)
401-unauthorised resources
404-NOT found

500-series server side errors
500-server errors
o


-->handling unavailable resources
--
>validatoors during update
hashing password(bcrypt.js)
unique d=fields
refined version of error handling middleware


<==>HASHING CODES<==>



two types of routes are therer they are
==>public routes anyone can access by any one
==>protected routes(by authenticated users only)



###n user authentication (login)
-submit credentials and get token



xss,crsf cross side scrpting attack 
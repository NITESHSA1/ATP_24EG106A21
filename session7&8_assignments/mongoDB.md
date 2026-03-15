> Mongo DB 

1. connect to the DB afterinstalling -> start server -> new connection -> connect (default)
2. create database `use database_name`
3. create collections (are like tables) -> `db.createCollection("users")`
4. how to insert -> `db.users.insertOne({name : 'NITESH', age : 21, city : 'hyd'})`
5. insert many -> `db.users.insertMany({ name : 'some', age : 24, city : 'vizag'}, { name : 'meow', age : 4, city : 'hyd'})`
6. find collection data -> `db.users.findOne()` preserves insertion order `conditional` -> `db.users.findOne({ city { $in : 'hyd '}})`
7. many find -> `db.users.findMany({ city : { $eq : "hyd"}})`
8. update -> `db.users.updateOne({name : 'NITESH'}, {$set : {name : 'NITESHkuamr', age : 41}})`
9. to delete -> `db.users.deleteOne({name: 'NITESHkuamr'})`

```
db.users.findOne({'address.city' : 'hyd' })
db.users.updateOne({ name : 'NITESH'}, {$set : {"address.city" : "KPHB"}})
db.users.updateOne({ name : 'NITESH'}, {$set : {mb_no : 12345677 }})
db.users.updateOne({ name : 'NITESH'}, {$set : {mb_no : 12345677 }})
db.users.updateOne({ name : 'NITESH'}, {$set : {mb_no : 777 }})
db.users.updateOne({ name : 'NITESH'}, {$set : {mb_no : 7777777 }})
db.users.updateOne({ name : 'NITESH'}, {$unset : {age : ""}})
db.users.updateOne({ name : 'NITESH'}, {$unset : { 'address.city' : ""}})
db.users.updateOne({name : 'NITESH'}, { $set : { skills : ['dancin', 'sleepin']}})
db.users.updateOne({name : 'NITESH'}, { $push : { skills : 'swift'}})
db.users.findOne()
db.users.updateOne({name : 'NITESH'}, { $push : { skills : 'swift'}})
db.users.findOne()
db.users.updateOne({name : 'NITESH'}, { $addToSet : { skills : 'swift'}})
db.users.findOne()
db.users.updateOne({name : 'NITESH'}, { $addToSet : { skills : 'swift'}})
db.users.updateOne({name : 'NITESH'}, {$push : {skills : ['vur', 'next']}})

```


const express = require("express");
const app = express();
// app.get("/profile",(req,res)=>{
//     const {username} = req.query;
//     //find in db
//     res.send("profile page of "+  " "+username)

// })
// app.get("/profile",(req,res)=>{
//     const {username,age,address} = req.query;
//     //find in db
//     res.send("profile page of "+  " "+username+" "+age+" "+address)

// })

let usersData=[
    {
        id:1,
        name:"Nitesh",
        address:"Delhi"
    },
    {
        id:2,
        name:"Tanishka",
        address:"Jaipur"
    },
    {
        id:3,
        name:"Arnav",
        address:"Delhi"
    }
]
app.get("/allusers",(req,res)=>{
res.send(usersData)
})
app.get("/getuserbyId",(req,res)=>{
    let {id} = req.query;
    console.log(id)
    for(let i = 0;i<usersData.length;i++){
        if(usersData[i].id==id){
            return res.send(usersData[i])
        }
    }
    res.send("User not found")
})
app.get("/deleteuserbyId",(req,res)=>{
    let {id} = req.query;
    for(let i =0;i<usersData.length; i++){
        if(usersData[i].id==id){
            usersData.splice(i,1);
            return res.send("user deleted")
        }
    }
    res.send("No user found to delete")
})
app.get("/adduser",(req,res)=>{
    let {id,name,address} = req.query;
    let newUser={
        id:id,
        name:name,
        address:address
    }
    usersData.push(newUser);
    res.send("New user added")
    
})



app.listen(5678,()=>{
    console.log("server started")
})
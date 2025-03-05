
const express = require("express");
const app= express();

//middleware to convert urlencoded data

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let userData =[];

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})

app.post("/signup",(req,res)=>{
    let {username,useremail,userpassword} = req.body;
    let newUser={
        name:username,
        email:useremail,
        password:userpassword
    }
    userData.push(newUser);

    res.send(userData);
})


app.listen(3000,()=>{
    console.log("server is started");
})
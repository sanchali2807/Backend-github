// 20 feb 2025    need to make this commit in github
// we need to make a get request for this page to show up

const express=require("express");
const app=express();

//miuddleware to convert url encoded data 
// app.use so that it works every time on every request
app.use(express.urlencoded({extended:true}))
//now an array to store data
let  userData =[]


app.get("/signup",(req,res)=>
{
    res.sendFile(__dirname+"/signup.html")
})
app.post("/signup",(req,res)=>
{
//    let {username,useremail,userpassword}=req.body;
//    console.log(username,useremail,userpassword);
let{username , useremail, userpassword}=req.body;
let NewUser = {
   name : username,
   email : useremail,
   password : userpassword
}
 userData.push(NewUser);
 res.send(userData);
}
)
app.listen((3000),()=>
{
    console.log("server started");
})
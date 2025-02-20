// 20 feb 2025    need to make this commit in github
// we need to make a get request for this page to show up

const express=require("express");
const app=express();
app.get("/signup",(req,res)=>
{
    res.sendFile(__dirname+"/signup.html")
})
app.post("/signup",(req,res)=>
{
   let {username,useremail,userpassword}=req.body;
   console.log(username,useremail,userpassword);
}
)
app.listen((3000),()=>
{
    console.log("server started");
})
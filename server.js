const express = require("express");
const app= express();

// Middleware to convert urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let userData = [];

// Serve the signup page
app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

// Handle user signup
app.post("/signup", (req, res) => {
    let { username, useremail, userpassword } = req.body;
    let newUser = {
        name: username,
        email: useremail,
        password: userpassword
    };
    userData.push(newUser);

    // Send a response back to the client
    res.send(userData);
});

// Start the server
app.listen(3000, () => {
    console.log("Server is started on port 3000");
});
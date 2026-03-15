const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");

app.set("views",path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("This is Home");
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random()*6)+1; // assume values comming from DataBase
    // res.render("rolldice.ejs", {num : diceVal}); //Key : value
    res.render("rolldice", {diceVal});
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
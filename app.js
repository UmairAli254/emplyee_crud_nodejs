"use strict";
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");

// Variables
const publicPath = __dirname + "/public";
const partialsPath = __dirname + "/views/partials";

// Middlewares
app.set("view engine", "hbs");
app.use(express.static(publicPath));
hbs.registerPartials(partialsPath);


app.get("", (req, res) => {
    res.render("all_users");
});



app.listen(port, "localhost", () => {
    console.log("Server is running on port", port);
})
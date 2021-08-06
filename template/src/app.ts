import express, { response } from "express";
import { json } from "body-parser";
// const axios = require("axios");

const app = express();

app.get("/temp", (req, res) => {

    // res.send("working wella")
    // return res.redirect("https://school.dev/dfdree");
    console.log(express);
    // console.log("i just rwe changed");
    // res.send("hello my name is sds fadil am a good boi");

    res.send("temp");


})

app.use(json());

app.listen(3000, () => console.log("listenning on port 3000"));

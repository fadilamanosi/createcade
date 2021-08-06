import express, { response } from "express";
import { json } from "body-parser";
// const axios = require("axios");

const app = express();

app.get("/*", (req, res) => {

    // res.send("working wella")
    // return res.redirect("https://school.dev/dfdree");
    console.log(express);
    // console.log("i just rwe changed");
    // res.send("hello my name is sds fadil am a good boi");

    res.send("hrrrs");


})

app.use(json());

app.listen(5000, () => console.log("listenning on port 5000."));

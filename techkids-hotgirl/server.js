const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://localhost/techkids-hotgirls-21");

const apiRouter = require("./routers/apiRouter");

app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start success");
});
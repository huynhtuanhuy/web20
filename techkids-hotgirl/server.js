const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

mongoose.connect("mongodb://localhost/techkids-hotgirls-21");

const apiRouter = require("./routers/apiRouter");

app.use(bodyParser.json());
app.use(session({
	secret: 'adiasdijijdoasidjasuhdsuaijadk12398xadsa',
  resave: false,
  saveUninitialized: false,
  cookie: {
		maxAge: 7 * 24 * 60 * 60 * 1000,
		secure: false,
	}
}));

// Middleware
app.use((req, res, next) => {
	console.log("Session: ", req.session);
	console.log("SessionID: " + req.sessionID);
	next();
});

app.use("/api", apiRouter);

app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start success");
});
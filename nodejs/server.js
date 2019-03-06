const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static('public'));

app.get("/", function(req, res) {
	// console.log(__dirname);
	// res.send("<h1>Hello world</h1>");
	res.sendFile(path.resolve(__dirname, '../navbar/index.html'));
});

// param
// http://localhost:6969/huynhtuanhuy/asdijadj
// app.get("/:abc", function(req, res) {
// 	console.log(req.params);
// 	res.send(req.params.def);
// });

// query
// http://localhost:6969/query?name=huynhtuanhuy&age=18&key=value
app.get("/query", function(req, res) {
	console.log(req.query);
	res.send("<h1>" + req.query.name + "</h1>");
});

// app.get("/style.css", function(req, res) {
// 	res.sendFile(__dirname + '/buoi 2/style.css');
// });

app.listen(6969, function(err) {
	if(err) console.log(err)
	else console.log("Server start success!!");
});

// http://localhost:6969
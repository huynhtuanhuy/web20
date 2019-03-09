const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
	//TODO:
	// - Lấy 1 câu hỏi ngẫu nhiên từ file dùng để lưu câu hỏi
	// - Hiển thị ra màn hình như trang mẫu http://quyetde123.herokuapp.com/
})

app.get("/ask", (req, res) => {
	res.sendFile(__dirname + "/views/ask.html");
});

app.post("/addquestion", (req, res) => {
	const question = req.body.question;
	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	questionList.push(question);
	fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	res.redirect("/ask");
});

// app.post("/", (req, res) => {
// 	console.log("POST");
// });
// app.put("/", (req, res) => {
// 	console.log("PUT");
// });
// app.delete("/", (req, res) => {
// 	console.log("DELETE");
// });

app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start!!");
});
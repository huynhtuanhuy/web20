const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
	//TODO:
	// - Lấy 1 câu hỏi ngẫu nhiên từ file dùng để lưu câu hỏi
	// - Hiển thị ra màn hình như trang mẫu http://quyetde123.herokuapp.com/
	// const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	// const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
	// res.send(`<h1>
	// 	${randomQuestion}
	// </h1>`);
	res.sendFile(__dirname + "/views/home.html");
});

app.get("/randomquestion", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
	res.send(randomQuestion);
});

app.get("/ask", (req, res) => {
	res.sendFile(__dirname + "/views/ask.html");
});

app.put("/editquestion", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	const question = req.body;
	questionList[question.id] = question;
	fs.writeFileSync("./questions.json", JSON.stringify(questionList));
});

app.post("/addquestion", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	const question = {
		content: req.body.question,
		yes: 0,
		no: 0,
		id: questionList.length,
	};
	questionList.push(question);
	fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	res.redirect("/ask");
});

app.get("/vote/:questionId/yes", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	const questionId = req.params.questionId;
	questionList[questionId].yes = Number(questionList[questionId].yes) + 1;
	// console.log(questionList);
	fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	res.redirect(`/question/${questionId}`);
});

app.get("/vote/:questionId/no", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	const questionId = req.params.questionId;
	questionList[questionId].no = Number(questionList[questionId].no) + 1;
	// console.log(questionList);
	fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	res.redirect(`/question/${questionId}`);
});

app.get("/question/:questionId", (req, res) => {
	res.sendFile(__dirname + "/views/questionInfo.html");
});

app.get("/detail/:questionId", (req, res) => {
	const questionId = req.params.questionId;
	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	const question = questionList[questionId];
	res.send(question);
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
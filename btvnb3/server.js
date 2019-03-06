const express = require('express');
const fs = require('fs');

const app = express();

app.get("/:classname", (req, res) => {
	// const classname = req.params.classname;
	// const classData = fs.readFileSync("data/"+classname+".json", "utf-8");
	// const classDataArr = JSON.parse(classData); // Convert JSON string => array/object
	// const listItemHtml = classDataArr.map(function(item) {
	// 	return "<li>"+item+"</li>";
	// }).join('');
	// res.send("<ul>"+listItemHtml+"</ul>");
	const classname = req.params.classname;
	if (fs.existsSync(`data/${classname}.json`)) {
		const classData = fs.readFileSync(`data/${classname}.json`, "utf-8");
		const classDataArr = JSON.parse(classData); // Convert JSON string => array/object
		const listItemHtml = classDataArr.map(item => `<li>${item}</li>`).join('');
		res.send(`<ul>${listItemHtml}</ul>`);
	} else res.send("Not found!!");
});

app.listen(6969, (err) => {
	if(err) console.log(err)
	else console.log("Server start!!");
});
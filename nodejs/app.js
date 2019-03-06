const fs = require('fs');

// console.log("Begin");
// fs.writeFile("text.txt", "Hello world", function(err) {
// 	if(err) console.log(err)
// 	else console.log("Write file success!!");
// });
// fs.writeFileSync("textSync.txt", "Hello world");
// console.log("End");

console.log("Begin");
const data = fs.readFile("text.txt", function(err, data) {
	if(err) console.log(err)
	else console.log(data + "");
});
console.log(data);
const dataSync = fs.readFileSync("text.txt", "utf-8");
console.log("Sync " + dataSync);
console.log("End");
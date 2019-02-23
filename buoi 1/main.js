// console.log("Hello world");

// const constVar = "Hello";

// constVar = 123456;

// let, var
// let a = 123456;

// var b = "abcdef";

// a = 10000;

// b = "hello";

// console.log(a);
// console.log(b);

// console.log(typeof a);
// console.log(typeof b);

// aFunc(10, "aaaaa");

// function aFunc(a, b, c) {
// 	console.log(a, b, c);
// }

// const bFunc = function () {
// 	console.log("Hello");
// }

// bFunc();

// const cFunc = () => {
// 	console.log("World");
// }

// cFunc();

// var => Function scope

// var a = 100;

// function print() {
// 	var b = 50;

// 	if (1 + 1 == 2) {
// 		var c = 5;

// 		console.log(c); // 5
// 		console.log(b); // 50
// 		console.log(a); // 100
// 	}
	
// 	console.log(c); // 5
// 	console.log(b); // 50
// 	console.log(a); // 100
// }

// print();

// console.log(c);
// console.log(b); // undefined
// console.log(a); // 100

// let => Block scope

// let a = 100;

// function print() {
// 	let b = 50;

// 	if (1 + 1 == 2) {
// 		const c = 5;

// 		console.log(c); // 5
// 		console.log(b); // 50
// 		console.log(a); // 100
// 	}
	
// 	console.log(c); // undefined
// 	console.log(b); // 50
// 	console.log(a); // 100
// }

// print();

// function print(num, waitTime) {
// 	setTimeout(function() {
// 		console.log(num);
// 	}, 1000*waitTime);
// }

// function countDown(num) {
// 	for (var i = num; i >= 0; i--) {
// 		print(i, num - i);
// 	}
// }

// countDown(5);

// console.log("Hello");

// function print(cb) {
// 	setTimeout(function() {
// 		console.log("World");
// 		cb();
// 		// onWaitDone();
// 	}, 1000);
// }

// const callback = function() {
// 	console.log("!!!!!!");
// }

// print(callback);

// function aFunc() {
// 	a = 10;
// 	window.b = "aaaaa"
// }

// aFunc();

// console.log(a);
// console.log(b);

// let obj = {
// 	a: 10
// }

// obj = "aaaa"

// obj.a = 1000;

// let obj2 = Object.assign({}, obj);

// console.log(obj2);

// obj.c = 100;

// console.log(obj2);

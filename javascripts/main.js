"use strict";


// JsonLoader :: JSON File -> Object
const JsonLoader = require("./jsonloader");

const JsonLogger = (object) => {
	console.log(object);
};

// TestJson :: either err Object
const TestJson = () => {
	let firstmessage = new Promise((resolve, reject) => {
		JsonLoader("default-messages")
		.then(JsonLogger);
	});
};

TestJson();
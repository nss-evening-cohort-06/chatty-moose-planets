"use strict";

// DomExporter :: [HtmlArray] -> DOM
// Generates a giant string from the contents of the HTML array and puts it in the div
const DomExporter = require("./dom");

// events - Generates the event listeners
const events = require("./events");

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


events();

// 



// GenerateMessageObjectOnUserDemand :: DOM state on event -> {}
const GenerateMessageObjectOnUserDemand = (event) => {
	let MessageObject;
	return MessageObject;
};



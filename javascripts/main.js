"use strict";

// AddNewMessage :: {} -> [""]
// Takes in an object and returns the array of HTML strings
const AddNewMessage = require("./add");

// DomExporter :: [HtmlArray] -> DOM
// Generates a giant string from the contents of the HTML array and puts it in the div
const DomExporter = require("./dom");

// events - Generates the event listeners
const events = require("./events");

// JsonLoader :: JSON File -> Object
const JsonLoader = require("./jsonloader");



const JsonLogger = (object) => {
	console.log(object);
	let CurrentArray = AddNewMessage(object);
	DomExporter(CurrentArray);
};

// TestJson :: either err Object
const TestJson = () => {
	let firstmessage = new Promise((resolve, reject) => {
		JsonLoader("default-messages")
		.then(JsonLogger);
	});
};

TestJson();


events.addMessage();
events.darkEvent();
events.largeEvent();
// 



module.exports = JsonLogger;

































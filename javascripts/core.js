"use strict";

// DomExporter :: MessageString -> DOM
// Attaches a string to the specified DOM element
const DomExporter = require("./dom");

// ConvertMessage :: Object -> String
// Takes in an object and returns the array of HTML strings
const ConvertMessage = require("./object-to-string");

// CoreProcess :: Converts an object into an HTML string and prints it to the DOM
const CoreProcess = (MessageObject) => {
	console.table(MessageObject);
	let MessageBoard = document.getElementById("messageBoard");
	let MessageString = ConvertMessage(MessageObject);
	DomExporter(MessageString, MessageBoard);
};

module.exports = CoreProcess;
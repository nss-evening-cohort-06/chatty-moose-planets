"use strict";

// DomExporter :: MessageString -> DOM
// Attaches a string to the specified DOM element
const DomExporter = require("./dom");

// ConvertMessage :: Object -> String
// Takes in an object and returns the array of HTML strings
const ConvertMessage = require("./object-to-string");

// Backlog :: Contains functions which modify the backlog array
const Backlog = require("./backlog");


// CoreProcess :: Converts an object into an HTML string and prints it to the DOM
const CoreProcess = (MessageObject) => {
	console.table(MessageObject);
	let MessageString = ConvertMessage(MessageObject);
	let AllMessages = Backlog.AddNewMessage(MessageString);
	DomExporter(AllMessages);
};

module.exports = CoreProcess;
"use strict";

// ConvertMessage :: Object -> String
// Takes in an object and returns the array of HTML strings
const ConvertMessage = require("./object-to-string");

// Backlog :: Contains functions which interact with the backlog array
const Backlog = require("./backlog");


const DOM = require("./dom");



// CoreProcess :: Converts an object into an HTML string and prints it to the DOM
const CoreProcess = (MessageObject) => {
	console.table(MessageObject);
	let MessageString = ConvertMessage(MessageObject);
	Backlog.AddNewMessage(MessageString);
	DOM(Backlog.GetBacklog(5));
};

module.exports = CoreProcess;
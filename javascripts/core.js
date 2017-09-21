"use strict";

// DomExporter :: [HtmlArray] -> DOM
// Generates a giant string from the contents of the HTML array and puts it in the div
const DomExporter = require("./dom");

// AddNewMessage :: {} -> [""]
// Takes in an object and returns the array of HTML strings
const AddNewMessage = require("./add");

// CoreProcess :: 
const CoreProcess = (object) => {
	console.log(object);
	let CurrentArray = AddNewMessage(object);
	DomExporter(CurrentArray);
};

module.exports = CoreProcess;
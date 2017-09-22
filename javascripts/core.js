"use strict";

// MakeMessageArray :: HTMLCollection -> [""] 
// Generates an array of the HTML all messages currently in the DOM
const MakeMessageArray = require("./arraymaker");

// DomExporter :: [HtmlArray] -> DOM
// Generates a giant string from the contents of the HTML array and puts it in the div
const DomExporter = require("./dom");

// AddNewMessage :: {} -> [""]
// Takes in an object and returns the array of HTML strings
const AddNewMessage = require("./add");

// CoreProcess ::
const CoreProcess = (object) => {
	console.log(object);
	let currentMessages = document.getElementById("messageBoard").childNodes;
  let oldArray = MakeMessageArray(currentMessages);
	let NewArray = AddNewMessage(object, oldArray);
	DomExporter(NewArray);
};

module.exports = CoreProcess;
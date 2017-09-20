"use strict";


const events = require("./events");

let HtmlArray = [];


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

// PrintDomStringToDom :: "" -> DOM
const PrintDomStringToDom = (DomString) => {

};

// GenerateDomStringFromHtmlArray :: [""] -> ""
const GenerateDomStringFromHtmlArray = (HtmlArray) => {
	let DomString;

	return DomString;
};

// 

// ConvertMessageObjectToMessageString :: {} -> ""
const ConvertMessageObjectToMessageString = (MessageObject) => {
	let MessageString;


	return MessageString;
};

// GenerateMessageObjectOnUserDemand :: DOM state on event -> {}
const GenerateMessageObjectOnUserDemand = (event) => {
	let MessageObject;
	return MessageObject;
};


//domString

const domString = () => {
	let domString = "";
	HtmlArray.forEach((value) => {
		domString += value;
	});
	return domString;
};


domString();








































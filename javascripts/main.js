"use strict";

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

// PrintDomStringToDom :: "" -> DOM
const PrintDomStringToDom = (DomString) => {

};

// GenerateDomStringFromHtmlArray :: [""] -> ""
const GenerateDomStringFromHtmlArray = (HtmlArray) => {
	let DomString;

	return DomString;
};

// PushMessageStringTo

// ConvertMessageStringToMessageObject :: {} -> ""
const ConvertMessageStringToMessageObject = (MessageObject) => {
	let MessageString;


	return MessageString;
};

// GenerateMessageObjectOnUserDemand :: DOM state on event -> {}
const GenerateMessageObjectOnUserDemand = (event) => {
	let MessageObject;
	return MessageObject;
};
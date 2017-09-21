"use strict";

const MakeMessageArray = require("./arraymaker");

// ConvertMessageObjectToMessageString :: {} -> ""
// Takes in our object and converts it to an HTML string
const ConvertMessageObjectToMessageString = (MessageObject) => {
	let MessageString = "";
	let message = MessageObject.message.Text;
	let user = MessageObject.message.User;
	MessageString += `<div class="message"> ${message} ${user}<button type="button" class="btn btn-default navbar-btn">Delete</button></div>`;
	return MessageString;
};



// PushMessageStringToArrayAndEnforceMessageLimit :: "" -> [""]
// Creates an array of all messages currently in the DOM, removes the first message if there are already 20, and adds the new one to it
const PushMessageStringToArray = (MessageString) => {
	let currentMessages = document.getElementById("messageBoard").childNodes;
	let HtmlArray = MakeMessageArray(currentMessages);
	HtmlArray.push(MessageString);
	return HtmlArray;
};

// InsertNewMessageIntoArray :: {} -> [""]
// Receives a MessageObject returns an array of all MessageStrings
const InsertNewMessageIntoArray = (MessageObject) => {
	let NewString = ConvertMessageObjectToMessageString(MessageObject);
	let HtmlArray = PushMessageStringToArray(NewString);
	return HtmlArray;
};



module.exports = InsertNewMessageIntoArray;

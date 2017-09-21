"use strict";

// ConvertMessageObjectToMessageString :: {} -> ""
// Takes in our object and converts it to an HTML string
const ConvertMessageObjectToMessageString = (MessageObject) => {
	let MessageString = "";
	let message = MessageObject.message.Text;
	let user = MessageObject.message.User;
	MessageString += `<div class="message"> ${message} ${user}<button type="button" class="btn btn-default navbar-btn">Delete</button></div>`;
	return MessageString;
};

// InsertNewMessageIntoArray :: {} + [""] -> [""]
// Receives a MessageObject and a MessageArray and returns the array with a new message in it
const InsertNewMessageIntoArray = (MessageObject, oldArray) => {
	let MessageString = ConvertMessageObjectToMessageString(MessageObject);
	oldArray.push(MessageString);
	return oldArray;
};

module.exports = InsertNewMessageIntoArray;

"use strict";


// ConvertMessageObjectToMessageString :: {} -> ""
const ConvertMessageObjectToMessageString = (MessageObject) => {
	let MessageString = "";
	let message = MessageObject.message.Text;
	let user = MessageObject.message.User;

	MessageString += `<div> ${message} ${user}<button type="button" class="btn btn-default navbar-btn">Delete</button></div>`;

	return MessageString;
};

let HtmlArray = [];

// PushMessageStringToArrayAndEnforceMessageLimit :: "" -> [""]
const PushMessageStringToArrayAndEnforceMessageLimit = (MessageString) => {
	if (HtmlArray.length === 21) {
		HtmlArray.shift();
	}
	HtmlArray.push(MessageString);
	return HtmlArray;
};

// InsertNewMessageIntoArray :: {} -> [""]
// Receives a MessageObject and pushes a string to the array
const InsertNewMessageIntoArray = (MessageObject) => {
	let NewString = ConvertMessageObjectToMessageString(MessageObject);
	PushMessageStringToArrayAndEnforceMessageLimit(NewString);
	return HtmlArray;
};

module.exports = InsertNewMessageIntoArray;
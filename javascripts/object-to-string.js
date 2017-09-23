"use strict";
let MessageId = 0;

// ConvertMessageObjectToMessageString :: {} -> ""
// Takes in our object and converts it to an HTML string
const ConvertMessageObjectToMessageString = (MessageObject) => {
	MessageId++;
	let MessageString = "";
	let message = MessageObject.message.Text;
	let user = MessageObject.message.User;
	let time = MessageObject.message.Time;
	MessageString += `<div class="message row col-md-8"> ${message} ${user} ${time}<button id="delete-${MessageId}" type="button" class="deletebtn btn btn-default navbar-btn">Delete</button></div>`;
	return MessageString;
};

module.exports = ConvertMessageObjectToMessageString;
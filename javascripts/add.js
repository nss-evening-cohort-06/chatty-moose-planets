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

	return HtmlArray;

};
"use strict";
let MessageId = 0;

// ConvertMessageObjectToMessageString :: Object -> String
// Takes in our object and converts it to an HTML string
const ConvertMessageObjectToMessageString = (MessageObject) => {
	MessageId++;
	let MessageString = "";
	let message = MessageObject.message.Text;
	let user = MessageObject.message.User;
	let time = MessageObject.message.Time;
	MessageString += `<div class="message row col-md-4">${user} posted at ${time}<div class="editableText">${message}</div>
	<button class="editButton btn btn-default navbar-btn">Edit</button><button type="button" class="deletebtn btn btn-default navbar-btn">Delete</button><messageID class="invisible">ID: ${MessageId}msg</messageID></div>`;
	return MessageString;
};

module.exports = ConvertMessageObjectToMessageString;
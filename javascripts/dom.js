"use strict";

let messageBoard = document.getElementById("messageBoard");


// PrintDomStringToDom :: "" -> DOM
const PrintDomStringToDom = (domString) => {
	let clearButton = document.getElementById("clearButton");
	clearButton.removeAttribute("disabled", "false");
	messageBoard.innerHTML = domString;
};

// GenerateDomStringFromHtmlArray :: [""] -> ""
const GenerateDomStringFromHtmlArray = (HtmlArray) => {
	let domString = "";
	HtmlArray.forEach((value) => {
		domString += value;
	});
	return domString;
};

// PrintAllMessages :: Concatenates an entire array into one string and attaches it to the DOM.
const PrintAllMessages = (HtmlArray) => {
	let BigString = GenerateDomStringFromHtmlArray(HtmlArray);
	PrintDomStringToDom(BigString);
};

module.exports = PrintAllMessages;
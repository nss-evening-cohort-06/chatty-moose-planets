"use strict";

let messageBoard = document.getElementById("messageBoard");


// PrintDomStringToDom :: String -> DOM
const PrintDomStringToDom = (domString) => {
	let clearButton = document.getElementById("clearButton");
	clearButton.setAttribute("enabled", "false");
	messageBoard.innerHTML = domString;
};

// GenerateDomStringFromHtmlArray :: [String] -> String
const GenerateDomStringFromHtmlArray = (HtmlArray) => {
	let domString = "";
	if (HtmlArray != []) {
		HtmlArray.forEach((value) => {
			domString += value;
		});
	}
	return domString;
};

// PrintAllMessages :: Concatenates an entire array into one string and attaches it to the DOM.
const PrintAllMessages = (HtmlArray) => {
	let BigString = GenerateDomStringFromHtmlArray(HtmlArray);
	PrintDomStringToDom(BigString);
};

module.exports = PrintAllMessages;
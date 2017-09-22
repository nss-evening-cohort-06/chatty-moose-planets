"use strict";

// let messageBoard = document.getElementById("messageBoard");


// // PrintDomStringToDom :: "" -> DOM
// const PrintDomStringToDom = (domString) => {
// let clearButton = document.getElementById("clearButton");

// clearButton.setAttribute("disabled", "false");

// messageBoard.innerHTML = domString;


// };

// // GenerateDomStringFromHtmlArray :: [""] -> ""
// const GenerateDomStringFromHtmlArray = (HtmlArray) => {
// 	let domString = "";
// 	HtmlArray.forEach((value) => {
// 		domString += value;
// 	});
// 	return domString;
// };

// PrintMessageStringToDom :: String + HTML Element -> DOM
// Attaches the string of HTML to the specified DOM element.
const PrintMessageStringToDom = (MessageString, element) => {
	element.innerHTML += MessageString;
};


module.exports = PrintMessageStringToDom;
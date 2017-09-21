"use strict";

let messageBoard = document.getElementById("messageBoard");


// PrintDomStringToDom :: "" -> DOM
const PrintDomStringToDom = (domString) => {
let clearButton = document.getElementById("clearButton");

clearButton.setAttribute("disabled", "false");

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

const SendArrayToDom = (HtmlArray) => {
	let BigString = GenerateDomStringFromHtmlArray(HtmlArray);
	PrintDomStringToDom(BigString);
};



module.exports = SendArrayToDom;
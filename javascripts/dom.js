"use strict";

// PrintDomStringToDom :: "" -> DOM
const PrintDomStringToDom = (DomString) => {

};

// GenerateDomStringFromHtmlArray :: [""] -> ""
const GenerateDomStringFromHtmlArray = (HtmlArray) => {
	let DomString;

	return DomString;
};

const SendArrayToDom = (HtmlArray) => {
	let BigString = GenerateDomStringFromHtmlArray(HtmlArray);
	PrintDomStringToDom(BigString);
};

module.exports = SendArrayToDom;



// Matt's code
const domString = (HtmlArray) => {
	let domString = "";
	HtmlArray.forEach((value) => {
		domString += value;
	});
	return domString;
};




domString();








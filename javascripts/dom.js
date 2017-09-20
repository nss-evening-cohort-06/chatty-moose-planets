"use strict";

// PrintDomStringToDom :: "" -> DOM
const PrintDomStringToDom = (DomString) => {

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





GenerateDomStringFromHtmlArray();








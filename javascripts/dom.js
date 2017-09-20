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
<<<<<<< HEAD
=======

>>>>>>> master
const SendArrayToDom = (HtmlArray) => {
	let BigString = GenerateDomStringFromHtmlArray(HtmlArray);
	PrintDomStringToDom(BigString);
};

<<<<<<< HEAD
module.exports = SendArrayToDom;





GenerateDomStringFromHtmlArray();







=======
module.exports = SendArrayToDom;
>>>>>>> master

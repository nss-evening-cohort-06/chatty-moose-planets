"use strict";

const core = require("./core");

// "filename" -> Object
const JsonLoader = (file) => {
	return new Promise((resolve, reject) => {
		var jsonLoader = new XMLHttpRequest();
		jsonLoader.onerror = () => {reject();};
		jsonLoader.onload = () => {
			if (jsonLoader.status == 200) {
				let response = JSON.parse(jsonLoader.responseText);
				resolve(response);
			} else {
				reject();
			}
		};
		jsonLoader.open("GET", `../data/${file}.json`);
		jsonLoader.send();
	});
};

const SendEachObjectToCore = (ObjectArray) => {
	ObjectArray.forEach(core);
};

// GenerateJsonMessages :: ["filename"] -> Objects
const GenerateJsonMessages = () => {
	const jsonFiles = ["matt", "caitlin", "brooke", "john", "john2"];

	
	let getJsonObjectsPromise = Promise.all(jsonFiles.map((jsonFile) => JsonLoader(jsonFile)))
		.then(SendEachObjectToCore);
	};

module.exports = GenerateJsonMessages;
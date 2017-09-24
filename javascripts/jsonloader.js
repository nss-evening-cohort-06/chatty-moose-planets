"use strict";

const core = require("./core");

// String -> Object
// Looks in the data folder for a JSON file of the given name and returns a parsed object
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

// GenerateJsonMessages :: [String] -> [Object] -> Core Process
const GenerateJsonMessages = () => {
	const jsonFiles = ["matt", "caitlin", "brooke", "john", "john2"];

	
	let getJsonObjectsPromise = Promise.all(jsonFiles.map((jsonFile) => JsonLoader(jsonFile)))
		.then(SendEachObjectToCore);
	};

module.exports = GenerateJsonMessages;
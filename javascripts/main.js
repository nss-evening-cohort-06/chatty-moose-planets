"use strict";

const core = require("./core");

// events - Generates the event listeners
const events = require("./events");

// JsonLoader :: JSON File -> Object
const JsonLoader = require("./jsonloader");

// TestJson :: either err Object
const TestJson = () => {
	let firstmessage = new Promise((resolve, reject) => {
		JsonLoader("default-messages")
		.then(core);
	});
};

TestJson();


events();

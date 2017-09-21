"use strict";
const jsonLogger = require("./main");
const core = require("./core");

let bodyEl = document.getElementById("the-body");
let darkBox = document.getElementById("dark-theme");
let selectedBox;
let largeBox = document.getElementById("large-text");
let messageInput = document.getElementById("whatever");



const darkEvent = () => {
	darkBox.addEventListener('change', (event) =>{
		if(event.target.checked === true){
			console.log("checked", event);
			bodyEl.classList.add("class", "dark-theme");
		} else if(event.target.checked === false){
			console.log("unchecked", event);
			bodyEl.classList.remove("class", "dark-theme");
		}
	});
};

const deleteButtonListener = () => {
		document.body.addEventListener("click", deleteButton);
};

const deleteButton = (event) => {
	if(event.target.id === 'delete'){
		event.target.parentElement.remove();
	}
};

const addMessage = () => {
	messageInput.addEventListener('keypress', (event) => {
		if(event.keyCode === 13) {
			let messageObject ={
				"message": {
					"User": "shit",
					"Time": "time goes here in expected format",
					"Text": messageInput.value
					}
				};
				console.log(jsonLogger);
				core(messageObject);
	messageInput.value='';
			}
			
		});
	};


const InitializeEventListeners = () => {
	addMessage();
	darkEvent();
	deleteButtonListener();
};

module.exports = InitializeEventListeners;
"use strict";

const core = require("./core");
let navbarEl = document.getElementById("nav");
let bodyEl = document.getElementById("the-body");
let darkBox = document.getElementById("dark-theme");
let dropdownToggle = document.getElementById("dropdown-toggle");
let largeBox = document.getElementById("large-text");
let messageInput = document.getElementById("whatever");
let currentUserDropdown = document.getElementById("dropdown-user");
let user = document.getElementById("user-list");
const darkEvent = () => {

	darkBox.addEventListener('change', (event) =>{
		if(event.target.checked === true){
			navbarEl.classList.add("class", "dark-theme");
			console.log("checked", event);
			bodyEl.classList.add("class", "dark-theme");
		} else if(event.target.checked === false){
			navbarEl.classList.remove("class", "dark-theme");

	darkBox.addEventListener('change', (event) => {
		if (event.target.checked === true) {
			console.log("checked", event);
			bodyEl.classList.add("class", "dark-theme");
		} else if (event.target.checked === false) {
			console.log("unchecked", event);

			bodyEl.classList.remove("class", "dark-theme");
		}
	});
};

const deleteButtonListener = () => {
	document.body.addEventListener("click", deleteButton);
};

const deleteButton = (event) => {
	if (event.target.id === 'delete') {
		event.target.parentElement.remove();
	}
};

const addMessage = () => {
	messageInput.addEventListener('keypress', (event) => {

		if(event.keyCode === 13) {
			
			let messageObject ={
		if (event.keyCode === 13) {
			let messageObject = {

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

const largeEvent = () => {
	largeBox.addEventListener('change', (event) => {
		if(event.target.checked === true){
			console.log("checked", event);
			bodyEl.classList.add("class", "large-text");
		} else if(event.target.checked === false){	
			console.log("unchecked", event);
			bodyEl.classList.remove("class", "large-text");
	  }
   });
};


const currentUserSelected = () => {
	user.addEventListener('click', (event) => {
		console.log("click", event);
		let currentUser = event.target.innerText;
		if(event.target.id !== dropdownToggle){	
			dropdownToggle.innerHTML = `Sup ${currentUser}`;

		}
	});
};





				}
			};
			core(messageObject);
			messageInput.value = '';
			EnforceMessageLimit();
		}
	});
};

const ChangeMessageLimit = () => {
	let MessageLimitSelector = document.getElementById("message-limit");
	MessageLimitSelector.addEventListener("change", EnforceMessageLimit);
};


const InitializeEventListeners = () => {
	addMessage();
	darkEvent();
	deleteButtonListener();

	largeEvent();
	currentUserSelected();

	ChangeMessageLimit();
};


// EnforceMessageLimit
// Deletes the first message in the DOM if there are X or more
const EnforceMessageLimit = () => {
	// let MessageLimit = parseInt(document.getElementById("message-limit").innerText);
	let MessageLimit = 20;
	let Messages = document.getElementById("messageBoard").childNodes;
	while (Messages.length > MessageLimit) {
		Messages[0].remove();
	}

};
module.exports = InitializeEventListeners;
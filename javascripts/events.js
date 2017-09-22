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
let dropdownToggleMsg = document.getElementById("dropdown-toggle-msg");
const darkEvent = () => {

	darkBox.addEventListener('change', (event) => {
		if (event.target.checked === true) {
			navbarEl.classList.add("class", "dark-theme");
			console.log("checked", event);
			bodyEl.classList.add("class", "dark-theme");
		} else if (event.target.checked === false) {
			navbarEl.classList.remove("class", "dark-theme");
			bodyEl.classList.remove("class", "dark-theme");
		}
	});
};

const deleteButtonListener = () => {
	document.body.addEventListener("click", deleteButton);
};

const deleteButton = (event) => {
	if (event.target.classList.contains("deletebtn")) {
		event.target.parentElement.remove();
	}
};

const addMessage = () => {
	messageInput.addEventListener('keypress', (event) => {
		if (event.keyCode === 13) {
			let messageObject = {
				"message": {
					"User": "shit",
					"Time": "time goes here in expected format",
					"Text": messageInput.value
				}
			};
			console.log(messageObject);
			core(messageObject);
			messageInput.value = '';
			EnforceMessageLimit();
		}
	});
};

const largeEvent = () => {
	largeBox.addEventListener('change', (event) => {
		if (event.target.checked === true) {
			console.log("checked", event);
			bodyEl.classList.add("class", "large-text");
		} else if (event.target.checked === false) {
			console.log("unchecked", event);
			bodyEl.classList.remove("class", "large-text");
		}
	});
};


const currentUserSelected = () => {
	user.addEventListener('click', (event) => {
		console.log("click", event);
		let currentUser = event.target.innerText;
		if (event.target.id !== dropdownToggle) {
			dropdownToggle.innerHTML = `Sup ${currentUser}`;

		}
	});
};


const ChangeMessageLimit = () => {
	let MessageLimitSelector = document.getElementById("message-limit");
	MessageLimitSelector.addEventListener('click', (event) => {
	/*console.log("click", event);*/
	let currentLimit = event.target.innerText;
	if(event.target.id !== dropdownToggleMsg) {
		dropdownToggleMsg.innerHTML = `${currentLimit}`;
	}
	EnforceMessageLimit();	
	});
};


const InitializeEventListeners = () => {
	addMessage();
	darkEvent();
	deleteButtonListener();
	largeEvent();
	currentUserSelected();
	ChangeMessageLimit();
	EnforceMessageLimit();
};


// EnforceMessageLimit
// Deletes the first message in the DOM if there are X or more
const EnforceMessageLimit = () => {
	let MessageLimit = parseInt(document.getElementById("message-limit").innerText);
	if (isNaN(MessageLimit)) {
		MessageLimit = 20;
	}
	let Messages = document.getElementById("messageBoard").childNodes;
	while (Messages.length > MessageLimit) {
		Messages[0].remove();
	}
};

module.exports = InitializeEventListeners;
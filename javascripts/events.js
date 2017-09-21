"use strict";
const main = require("./main");

let bodyEl = document.getElementById("the-body");
let darkBox = document.getElementById("dark-theme");
let selectedBox;

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

const addMessage = () => {
	messageInput.addEventListener('keypress', (event) => {
		if(event.keycode === 13) {
			let messageObject ={
				"message": {
					"User": "shit",
					"Time": "time goes here in expected format",
					"Text": messageInput.id
					}
				};
				main(messageObject);
			}
			
		});
	};



module.exports = {darkEvent, addMessage};

"use strict";
const jsonLogger = require("./main");

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


const addMessage = () => {
	messageInput.addEventListener('keypress', (event) => {
		if(event.keyCode === 13) {
			let messageObject ={
				"message": {
					"User": "shit",
					"Time": "time goes here in expected format",
					"Text": messageInput.id
					}
				};
				console.log(jsonLogger);
				jsonLogger(messageObject);
	messageInput.value='';
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


module.exports = {darkEvent, addMessage, deleteButton};















	







module.exports = {darkEvent, addMessage, largeEvent};







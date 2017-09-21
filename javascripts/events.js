"use strict";
let bodyEl = document.getElementById("the-body");
let darkBox = document.getElementById("dark-theme");
let selectedBox;

let messageInput = document.getElementById("messageInput");




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




		}

	});
};


module.exports = {darkEvent};
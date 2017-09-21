"use strict";
let bodyEl = document.getElementById("the-body");
let darkBox = document.getElementById("dark-theme");
let selectedBox;

const deleteButton = () => {
document.body.addEventListener("click", deleteButton);
};


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

module.exports = darkEvent;
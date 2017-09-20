"use strict";

let darkBox = document.getElementById("dark-theme");
let selectedBox;

const darkEvent = () => {
	darkBox.addEventListener('change', (event) =>{
		if(event.target.checked === true){
			console.log("checked");
		}
	});
};

module.exports = darkEvent;
"use strict";

const events = require("./events");




const deleteButton = (event) => {
	
	if(event.target.className === 'delete'){
		event.target.parentElement.remove();
	}
};

document.body.addEventListener("click", deleteButton);


module.exports = deleteButton;
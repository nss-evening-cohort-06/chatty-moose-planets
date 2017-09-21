"use strict";

const events = require("./events");




const deleteButton = (event) => {
	
	if(event.target.id === 'delete'){
		event.target.parentElement.remove();
	}
};



module.exports = deleteButton;
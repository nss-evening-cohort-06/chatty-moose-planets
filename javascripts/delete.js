"use strict";





const deleteButton = (event) => {
	
	if(event.target.className === 'delete'){
		event.target.parentElement.remove();
	}
};

document.body.addEventListener("click", deleteButton);


module.exports = deleteButton;
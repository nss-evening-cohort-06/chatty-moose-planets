"use strict"





function deleteButton(event) {
	
	if(event.target.className === 'delete'){
		event.target.parentElement.remove();
	}
}

module.exports = deleteButton;
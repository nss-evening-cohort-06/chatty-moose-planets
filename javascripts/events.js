"use strict";

const core = require("./core");
const Backlog = require("./backlog");
const dom = require("./dom");

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
        Backlog.DeleteMessage(event.target.parentElement.lastElementChild.innerHTML);
        event.target.parentElement.remove();
    }
    EnforceMessageLimit();
};

const addMessage = () => {
	messageInput.addEventListener('keypress', (event) => {
		if (event.keyCode === 13 && messageInput.value != "") {
			let personSelection = document.getElementById("dropdown-toggle").innerHTML;
			let person = ``;
			if (personSelection.includes("Select User") === false) {
				person = personSelection;
            } else {
                person = `<img src="./styles/blank.png">Anonymous`;
            }
			let time = new Date();
			let messageObject = {
				"message": {
					"User": person,
					"Time": time.toLocaleTimeString(),
					"Text": messageInput.value
				}
			};
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
            dropdownToggle.innerHTML = `${currentUser}`;
        }
    });
	user.addEventListener('click', (event) => {
		console.log("click", event);
		let currentUser = event.target.innerHTML;
		if (event.target.id !== dropdownToggle) {
			dropdownToggle.innerHTML = `${currentUser}`;
		}
	});
};

let clearButton = document.getElementById("clearButton");


const disableButton = () => {
    clearButton.addEventListener('mouseover', (event) => {
    let messageBox = document.getElementById("messageBoard");
    if(messageBox.children.length < 1) {
        clearButton.disabled = true;
    }
  });
};


const ChangeMessageLimit = () => {
    let MessageLimitSelector = document.getElementById("message-limit");
    MessageLimitSelector.addEventListener('click', (event) => {
        /*console.log("click", event);*/
        let currentLimit = event.target.innerText;
        if (event.target.id !== dropdownToggleMsg) {
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
    disableButton();
    deleteMessagesOkay();
    EnforceMessageLimit();
    MessageEditor();
};


// EnforceMessageLimit
// Deletes the first message in the DOM if there are X or more
const EnforceMessageLimit = () => {
    let MessageLimit = parseInt(document.getElementById("message-limit").innerText);
    if (isNaN(MessageLimit)) {
        MessageLimit = 20;
    }
    let Messages = document.getElementById("messageBoard").childNodes;
    dom(Backlog.GetBacklog(MessageLimit));
    while (Messages.length > MessageLimit) {
        Messages[0].remove();
    }
};



const EditMessage = (e) => {
	    document.getElementById("whatever").focus();
        if (e.target.classList.contains("editButton")) {
                let MessageText = e.target.parentElement.firstElementChild.innerHTML;
                console.log("messagetext", MessageText);
                let inputBox = `<input name="editbox" type="text" class="messageEdit">`;
                e.target.parentElement.firstElementChild.innerHTML = inputBox;
                console.log(e.target.parentElement.firstElementChild);
            }
        };

        const MessageEditor = () => {
            document.body.addEventListener("click", EditMessage);
        };

        module.exports = InitializeEventListeners;


























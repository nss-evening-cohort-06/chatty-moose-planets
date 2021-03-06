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
let clearButton = document.getElementById("clearButton");


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

const ButtonListener = () => {
    document.body.addEventListener("click", Button);
};

const Button = (event) => {
    if (event.target.classList.contains("deletebtn")) {
        Backlog.DeleteMessage(event.target.parentElement.lastElementChild.innerHTML);
        event.target.parentElement.remove();
    } else if (event.target.classList.contains("editButton")) {
        let MessageID = event.target.parentElement.lastElementChild.innerHTML;
        let MessageText = event.target.parentElement.firstElementChild.nextElementSibling.innerText;
        let EditedMessage = window.prompt("Edit Message: ", MessageText);
        if (EditedMessage.length > 0) {
            event.target.parentElement.firstElementChild.nextElementSibling.innerHTML = EditedMessage;
            let NewMessageString = `<div class="message row col-md-4">${event.target.parentElement.innerHTML}</div>`;
            Backlog.EditMessage(MessageID, NewMessageString);
        }
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
        let currentUser = event.target.innerHTML;
        if (event.target.id !== dropdownToggle) {
            dropdownToggle.innerHTML = `${currentUser}`;
        }
    });
};



const disableButton = () => {
    clearButton.addEventListener('mouseover', (event) => {
        let messageBox = document.getElementById("messageBoard");
        if (messageBox.childNodes.length < 1) {
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
    ButtonListener();
    largeEvent();
    currentUserSelected();
    ChangeMessageLimit();
    disableButton();
    // deleteMessagesOkay();
    EnforceMessageLimit();
    clearMessages();
    clearEvent();
    // MessageEditor();
};


// EnforceMessageLimit
// Deletes the first message in the DOM if there are X or more
const EnforceMessageLimit = () => {
    let MessageLimit = parseInt(document.getElementById("message-limit").innerText);
    if (isNaN(MessageLimit)) {
        console.log(typeof MessageLimit);
        MessageLimit = 20;
        console.log(typeof MessageLimit);
    }
    let Messages = document.getElementById("messageBoard").childNodes;
    dom(Backlog.GetBacklog(MessageLimit));
    while (Messages.length > MessageLimit) {
        Messages[0].remove();
    }
};



// const EditMessage = (e) => {
//     if (e.target.classList.contains("editButton")) {
//         let MessageText = e.target.parentElement.firstElementChild.innerHTML;
//         console.log("messagetext", MessageText);
//         let inputBox = `<input name="editbox" type="text" class="messageEdit">`;
//         e.target.parentElement.firstElementChild.innerHTML = inputBox;
//         console.log(e.target.parentElement.firstElementChild);
//     }
// };

// const MessageEditor = () => {
//     document.body.addEventListener("click", EditMessage);
// };

const clearEvent = () => {
    clearButton.addEventListener("click", clearMessages);
};

const clearMessages = (e) => {
    let messageBoard = document.getElementById("messageBoard");
    Backlog.ClearBacklog();
    EnforceMessageLimit();
    messageBoard.innerHTML = "";
};


module.exports = { InitializeEventListeners, EnforceMessageLimit };


























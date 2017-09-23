"use strict";

let backlog = [];

// AddNewMessage :: Pushes a new string to the array and returns the backlog
const AddNewMessage = (MessageString) => {
  backlog.push(MessageString);
  if (backlog.length === 21) {
    backlog.shift();
  }
  console.log(backlog);
  return backlog;
};


// GetBacklog :: Returns the last X elements of the backlog, where X is the message limit.
const GetBacklog = (MessageLimit) => {
  if (backlog.length < MessageLimit) {
    console.log(backlog);
    return backlog;
  } else {
    console.log(backlog);
    return backlog.slice(-MessageLimit);
  }  
};

// DeleteMessage :: Removes a string from the backlog array and returns the backlog.
const DeleteMessage = (RemovedString) => {
  backlog = backlog.filter(string => string.includes(RemovedString) === false);
  console.log(backlog);
  return backlog;
};

module.exports = { AddNewMessage, GetBacklog, DeleteMessage };
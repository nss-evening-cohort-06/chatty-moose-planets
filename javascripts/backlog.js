"use strict";

let backlog = [];

// AddNewMessage :: Pushes a new string to the array and returns the backlog
const AddNewMessage = (MessageString) => {
  backlog.push(MessageString);
  while (backlog.length >= 101) {
    backlog.shift();
  }
  return backlog;
};


// GetBacklog :: Returns the last X elements of the backlog, where X is the message limit.
const GetBacklog = (MessageLimit) => {
  if (backlog.length < MessageLimit) {
    return backlog;
  } else {
    return backlog.slice(-MessageLimit);
  }  
};

// DeleteMessage :: Removes elements that include the given string from the backlog array and returns the backlog.
const DeleteMessage = (RemovedId) => {
  console.log(backlog);
  console.log(typeof RemovedId, RemovedId);
  backlog = backlog.filter(string => string.includes(RemovedId) === false);
  return backlog;
};

module.exports = { AddNewMessage, GetBacklog, DeleteMessage };
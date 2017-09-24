"use strict";

let backlog = [];

// AddNewMessage :: String -> [String]
// Pushes a new string to the backlog array and returns the backlog
const AddNewMessage = (MessageString) => {
  backlog.push(MessageString);
  while (backlog.length >= 101) {
    backlog.shift();
  }
  return backlog;
};


// GetBacklog :: Number -> [String]
// Returns the last X elements of the backlog, where X is the message limit. 
// Returns the entire backlog if its length is less than X
const GetBacklog = (MessageLimit) => {
  if (backlog.length < MessageLimit) {
    return backlog;
  } else {
    return backlog.slice(-MessageLimit);
  }  
};

// DeleteMessage :: String -> [String]
// Removes any messages in the backlog array that include the provided string (usually the invisible message ID)
const DeleteMessage = (RemovedId) => {
  backlog = backlog.filter(string => string.includes(RemovedId) === false);
  return backlog;
};

module.exports = { AddNewMessage, GetBacklog, DeleteMessage };
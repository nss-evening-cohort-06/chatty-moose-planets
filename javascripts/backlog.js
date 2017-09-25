"use strict";

let backlog = [];

// AddNewMessage :: String
// Pushes a new string to the backlog array
const AddNewMessage = (MessageString) => {
  backlog.push(MessageString);
  while (backlog.length >= 101) {
    backlog.shift();
  }
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

// DeleteMessage :: String
// Removes any messages in the backlog array that include the provided string (usually the invisible message ID)
const DeleteMessage = (RemovedId) => {
  backlog = backlog.filter(string => string.includes(RemovedId) === false);
};

// EditMessage :: String, String
// Finds the array index where the value contains the provided MessageID string and replaces the value with the provided NewMessage string
const EditMessage = (MessageID, NewMessage) => {
  let MessageIndex = backlog.findIndex(string => string.includes(MessageID));
  backlog[MessageIndex] = NewMessage;
};

// ClearBacklog
const ClearBacklog = () => {
  backlog = [];
};


module.exports = { AddNewMessage, GetBacklog, DeleteMessage, EditMessage, ClearBacklog };
"use strict";

// events - Generates the event listeners
const events = require("./events");

// GenerateInitialMessagesFromJson :: JSON File -> MessageObject
const GenerateInitialMessagesFromJson = require("./jsonloader");

GenerateInitialMessagesFromJson();

events();

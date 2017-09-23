"use strict";

// InitializeEventListeners - Generates the event listeners
const InitializeEventListeners = require("./events");

// GenerateInitialMessagesFromJson :: JSON File -> MessageObject
const GenerateInitialMessagesFromJson = require("./jsonloader");

GenerateInitialMessagesFromJson();

InitializeEventListeners();

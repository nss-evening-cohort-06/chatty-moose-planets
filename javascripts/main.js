"use strict";

// Events - for generating the event listeners
const Events = require("./events");

// GenerateInitialMessagesFromJson :: JSON File -> MessageObject
const GenerateInitialMessagesFromJson = require("./jsonloader");

GenerateInitialMessagesFromJson();

Events.InitializeEventListeners();

Events.EnforceMessageLimit();
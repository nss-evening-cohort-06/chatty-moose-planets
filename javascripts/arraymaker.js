"use strict";

// GenerateMessageStringFromDomElement :: Element -> ""
// Generates a MessageString from the innerHTML of a DOM element
const GenerateMessageStringFromDomElement = (Element) => {
  let MessageString = `<div class="message">${Element.innerHTML}</div>`;
  return MessageString;
};

// GetMessageStrings :: HTMLCollection -> [""]
// Takes in an array-like object of HTML elements and returns an array of MessageStrings from their innerHTML
const GetMessageStringsFromHTMLCollection = (HTMLCollection) => {
  let CollectionArray = Array.from(HTMLCollection);
  if (CollectionArray.length) {
    return CollectionArray.map(GenerateMessageStringFromDomElement);
  } else {
    return [];
  }
};

module.exports = GetMessageStringsFromHTMLCollection;
# Chatty Moose

## Group project 

#### Screenshot Gif

![demo](https://user-images.githubusercontent.com/30091921/30835704-2f04e636-a21f-11e7-8536-c1cad7a057df.gif) (727kB)

#### Contributors
* Matt Hensley [GitHub](https://github.com/Matthensley777)
* John Achor [GitHub](https://github.com/johnachor)
* Caitlin Murnick [GitHub](https://github.com/cmurnick)
* Brooke Lewis [GitHub](https://github.com/belv2c)

#### Requirements Of Project
* Use Bootstrap
* Complete 1 of the bonus items
* Balanced github contributions
* Completed Readme
* No grunt errors
* Use Browserify

#### Project Navigation
* Create an element to serve as the navigation bar for your application.
* Create an element to hold the logo for your application. It can be as simple as text, but if you want to find an image, that's fine.
* Create a input field for a user to enter in a message.
* Add an event listener for "keypress" and detect when then return key has been pressed in the message field.
* When return key is detected, you'll create a new message (see details below).
* Create a button to clear all messages.
* When the user clicks the clear messages button, all current chat messages should be removed from the application.
* If there are no messages, then the clear messages button should be disabled (see example above).
* The navigation bar should remain at the top of the screen, even if the contents of the page start to scroll.

#### Page Options
* Create two checkboxes below the message input field. One labeled "Dark theme" and the other labeled "Large text".
* When the user clicks on the dark theme checkbox, change the background color of your application to a  dark gray, and the font color for messages should be white(ish)... you pick.
* If the user unchecks the box, the background color should change back to white with black text for messages.

#### Messages
* When the page is first loaded, you must load 5 messages from a local JSON file and pre-fill a message area ```<div>``` below the input field that will also hold all new messages as they get created.
* When the user presses the return key in the message field, the new message should be inserted into the message area.
* The message should have a button displayed after it with the text "Delete" inside of it.
* When the delete button next to a message is clicked, only that message should be removed from the DOM.

#### Bonus Items completed
* Ability to edit existing messages
* Multiple JSON files
* Each message has a time stamp
* Multiple users
* Message limits

#### How To Pull Down
* pull down project (git clone)
* ```cd into lib folder``` 
* ```npm init```
* ```npm install grunt grunt-contrib-jshint matchdep grunt-contrib-watch grunt-browserify jshint-stylish --save-dev```
* ```type in grunt```
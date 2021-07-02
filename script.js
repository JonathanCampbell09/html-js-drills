// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'Jonathan Campbell';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');
let favoritethings = document.querySelector('#favthings')
favoritethings.innerHTML = `
<li> Writing
<li> Walking
<li> Reading
<li> Playing games
`
  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

function replaceImage() {
  console.log('Called replaceImage()');
  var image = document.querySelector('#picture');
  image.setAttribute("src", "hardcard.png");

  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');
  let codestatus = document.querySelector('#codestatus');
  codestatus.innerHTML =""
  let meme = document.createElement("img");
  meme.setAttribute("src", "gunbran.png");
  meme.setAttribute("width", "300");
  meme.setAttribute("height", "300");
  codestatus.appendChild(meme);

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicke
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.

  console.log('Form submitted');
  const formData= new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  document.getElementById('firstname').innerHTML = formProps.fname;
  document.getElementById('lastname').innerHTML = formProps.lname;
  document.getElementById('chosencar').innerHTML = formProps.cars;
  document.getElementById('icecreamstatus').innerHTML = formProps.icecream;
  
  let iceyes = document.getElementById("icecreamyes");
  let iceno= document.getElementById("icecreamno");
  if (iceyes.checked){
    document.getElementById("icecreamstatus").textContent =iceyes.value;
  }
  else if(iceno.checked){
    document.getElementById("icecreamstatus").textContent =iceno.value;
  }
  let humancheck = document.getElementById("humancheck");
  let codercheck = document.getElementById("codercheck");
  if(humancheck.checked && codercheck.checked){
    document.getElementById("checks").textContent =null;
    let li = document.createElement('li');
    li.textContent = humancheck.labels[0].innerText;
    document.getElementById("checks").appendChild(li);
    li = document.createElement('li');
    li.textContent = codercheck.labels[0].innerText;
    document.getElementById("checks").appendChild(li);
  }
  else if(codercheck.checked){
    document.getElementById("checks").textContent = codercheck.labels[0].innerText;
  }
  else if(humancheck.checked){
    document.getElementById("checks").textContent = humancheck.labels[0].innerText;
  }
  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values
});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#console-log-button');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('I changed this text :)');
});

let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {

document.getElementById("colorText").style.color = 'blue';
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.

  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
  addEventListener("keydown", function(event) {
    if (event.key == 'r')
    document.getElementById("colorText").style.color = 'red';

});
  addEventListener("keydown", function(event) {
    if (event.key == 'g')
    document.getElementById("colorText").style.color = 'green';


});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

 let submit = document.querySelector(".form");
 let lists = document.getElementById("todos");
 let box = document.querySelector(".title");
 let buttons=[];
 submit.addEventListener('submit',function(event){
   
   event.preventDefault();
   
   let text = document.querySelector("#todo");
   let itemList = document.createElement('li');
   itemList.textContent = text.value;
   lists.appendChild(itemList);

});
/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

 let j =1;
 let counter = document.querySelector("#seconds");
 function stopWatch(){
   
   let textj = document.createTextNode(j);
 
  counter.parentNode.insertBefore(textj,counter);
  setTimeout(function(){counter.parentNode.removeChild(textj);},900);
   j++;
 }
 setInterval(function() {stopWatch();},1000);
 
 let display = document.querySelector("#delayedDisplay");
 let div = document.createElement("div");
 let img = document.createElement("img");
 img.src = "";
 img.className = meme;
 div.appendChild(img);
 display.parentNode.insertBefore(div,display);
 
 setTimeout(function(){img.src="gunbran.jpg";},5000);

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

  // Your code goes here

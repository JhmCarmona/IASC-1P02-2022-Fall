console.log("Hello World");

function buttonClick(){
  console.log("The button has been click. Who would've thunk it?");
}

// Let's check the console's built -in function for dates:
// console.log( new Date());
var todayFullDate = new Date();

var todayTime = todayFullDate.getTime();
// A " + 1 " is added to the month because JS is a zero-based language
// This means that the starting month (Jnuary) will be numbered 0, not 1
// when we add the 1 to fi the zero-based month index.
var todayMonth = todayFullDate.getMonth() + 1;
var todayDate = todayFullDate.getDate();
var todayDay = todayFullDate.getDay();
var todayHour = todayFullDate.getHours();
var todayYear = todayFullDate.getYear();
var todayFullYear = todayFullDate.getFullYear();

console.log(todayFullDate);
console.log(todayTime);
console.log(todayMonth);
console.log(todayDate);
console.log(todayDay);
console.log(todayHour);
console.log(todayYear);
console.log(todayFullYear);

function displayDate(){
  document.getElementById("theDate").innerHTML = String(todayMonth) + "/" + String(todayDate) + "/" + String(todayFullYear);
}

/* Let's use our console to see how variables like strings, and integers are
 represented.*/

/* 1) we see integer+ interger + string, all other item after the strings
 will be read as strings*/
console.log(6 + 8 + "five" + 4 + 3);

/*2) we make integer "4" a string by being inside "", thefore all else
coming aftwards will be read as a string*/
console.log(1 + 2 + 3 + "4" + 5);



//POP-UPS


//var myAlert = alert("Neo, I must warned you of the imminent danger. DO NOT PRESS OK!");
//console.log(myAlert);
//-------------------------------
//var myConfirm = confirm("Is this today's date?:" + todayDate)
//console.log(myConfirm);

//-------------------------------------------------
var myPrompt = prompt("Tell me a joke!:")
console.log(myPrompt);

/* We will now create a function to connect with our submit button, and link it
with some id's to send that info to the console */

function formOutputs(){
  console.log(document.getElementById("basicText").value);
  console.log(document.getElementById("basicPass").value);
}

/* the function above includes in it's "console.log" a section call "value"
this is because we want to have the value of the basicText input and
 basicPass */

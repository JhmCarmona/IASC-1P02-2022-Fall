//1st we are doing a document.write
//note, with JS, you need semicolon " ;" after ending a line or code or JS won't read it

  document.write("Hello world!");

//we now create a function

function changeText(){
  document.getElementById("innitial").innerHTML = "Replace the text";
}

function changeTextBack(){
  document.getElementById("innitial").innerHTML = "Text will change herek";
}

function fancyfulText(){
  document.getElementById("one").style.fontSize = "30px";
  document.getElementById("one").style.color = "blue";
  document.getElementById("two").style.marginLeft = "150px";
  document.getElementById("two").style.color = "green";
  document.getElementById("three").style.textTransform = "uppercase";
  document.getElementById("three").style.color = "red";
}

// There are two ways of creating variables in JS:
/*Option 1) "var" is the code to declare a variable, "mathX" is the variable's
name, "mathX = 5" sets the value of the variable */

var mathX;
mathX = 5;

// option 2)  does the same thing as above

var mathY = 7;

// You can also put text on a variable

var someText = "This is my text variable";

/* Using the code below, we can open the console
on the pg and see info about the variable, and
how it changed overtime */

console.log(mathX);

var mathX = 9;

console.log(mathX);


/*  We are gonna begin using arguments.The following describes the function
below line by line:
1) when we call the function we give it the values for x and y
2) we add "x + y" and saved it as "mathZ"
3) we get the html doc with the id "mathResults" and give it the value "mathZ"
*/


function argExample(x,y){
    mathZ = x + y;
    document.getElementById("mathResult").innerHTML = mathZ;
}

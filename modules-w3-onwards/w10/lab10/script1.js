  /*  We have emveloped most of our code in the function below, to use the
  onload code for the last section */

  function theScript(){
  // LAB SLIDES

  //Page 2:--------------------------------------------------------------

  // 1) 1. Create a variable, insert a function that choses the highest #
  // 2. Print it:

  var highestNum = Math.max(10.2, 4.5, 15.6);

  document.write(highestNum);


  // we will print a "<br/>" to create a new line ***
  document.write("<br/>");

  // Now let's try to find the lowest, and printing it
  var lowestNumb = Math.min(10.2, 4.5, 15.6);

  document.write(lowestNumb);


  document.write("<br/>");


  // 2) 1. Create a var & function to round up the highest #, then print it


  var roundNum = Math.round(highestNum);

  document.write(roundNum);

  //***
  document.write("<br/>");


  /* 3) Create a new var and function that squares the round up number, then
  print it */

  var sqNum = Math.sqrt(roundNum);

  document.write(sqNum);

  // ***
  document.write("<br/>");
  document.write("<br/>");


  // RANDOM NUMBERS: not in the slides but will be on the AS4--------------------

  var randNum = Math.random();
  var randFromOnetoSix = randNum * 6 + 1;
  var floorNum = Math.floor(randFromOnetoSix);

  document.write(randNum);
  document.write("<br/>");
  document.write(randFromOnetoSix);
  document.write("<br/>");
  document.write(floorNum);
  document.write("<br/>");
  document.write("<br/>");


  // Exercise 3: LOOPS---------------------------------------------------------

  for (i = 1; i <= 10; i++){
    document.write("Our loop has been looped " + i + " times!");
    document.write("<br/>");
  }

  /* "for(){ }": Describes the type of loop that we will be using. Since we are
  counting we use  "for". */

  //Mechanics: of "for (i = 1; i <= 10; i++) { }"

  //1. "i = 1;": starting value of i.
  //2. "I <= 10;":Condition of the loop.
  /* 3. "i++": Step counter. In this case, after each step you add 1 to i. You
  can also have a decreasing counter, by let's say 1 uni e.g:  "i--" -----------*/


  // Exercise 4: CONDITIONALS----------------------------------------------------

  // *1.
  var var1 = 5;
  var var2 = 5;

  if (var1 == var2) {
    console.log("TRUE");
  }else{
    console.log("FALSE");
  }


  //*2.
  // Above is a simple binari condition, so there can only T/F.
  /*-------------------------------------------------------------------
  if (var1 > var2){
    console.log("Var1 is larger");
  }else {
    console.log("var2 is larger");
  }
  ----------------------------------------------------------------------*/
  /* In this case else creates prints in the console something that wouldn't
  make sense. What should we do? */

  //*3.
  if (var1 > var2){
    console.log("Var1 is larger");
  }else if (var1 < var2){
    console.log("var2 is larger");
  }else {
    console.log("The vars are the same");
  }

  document.write("<br/>");

  //to correct the problem in *2, we include an "else if" & an "else" conditional
  //------------------------------------------------------------------------------

  //ONLOAD AND TIMING:
  //document.getDocumentById("testing").innerHTML =="Hello wordl";

  repeatScriptStart();

  }

  function repeatScriptStart(){
    setTimeout(repeatScript2, 1000);
  }

  function repeatScript2(){
    document.write("<div>One Div<div/>");
    setTimeout(repeatScript3, 2000);
  }

  function repeatScript3(){
    document.write("<div>Two Div<div/>");
    setTimeout(repeatScriptStart, 1000);
  }

  document.write("<br/>");

  /* -1) We attach "onload" to an element, usually the <body> tag. This allows
   JS to load on the page when said element is loaded.
  2) We will also use  "Delays" combine with the call "setTimeout," which calls
  the function after our desired delayed. Let's say, we want the code to load
  1 second after the tag loads, we will set the time to "1000," 2 seconds "2000"
  and so on.

  3) In this example the function we will call with "onload" will be named
   "theScript()."

  4) The majority of the code in this file is enveloped for the function
  mentioned in part 2.
  --------------------------------------------------------------*/

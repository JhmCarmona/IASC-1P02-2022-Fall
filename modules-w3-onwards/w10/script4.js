/* Example 1: #1 !=  #2. If statement fails and as a result nothing
is shown on the web page, given that the condition is not met*/

/* var num1 = 7;
var num2 = 5;

if (num1 == num2) {
  document.write("Number 1 equals to number2!")
}
-----------------------------------------------------------------------*/

/* Example 2:  #1 = #2. Given that condition is met,
condition statement applies and document is written on the page */
/* var num1 = 7;
var num2 = 7;

if (num1 == num2) {
  document.write("Number 1 equals to number2!")
}
------------------------------------------------------------------------*/
/* Example 3: Now we will use the "else statement",
which is applied once "if stetement" fails */

/* var num1 = 7;
var num2 = 5;

if (num1 == num2) {
  document.write("Number 1 equals to number2!")
}
else {
  document.write("Number1 doesn't not equal number2")
}
---------------------------------------------------------------------------*/

/* Example 4: We will use both the "if" and "else" statements but
this time we will  change "==" condition to greater than or equals to. */

/*RESULT:  We can see that given that the "if " statement is not satisfied, the
"else" statement will be satisfied under the parameters given */
/* var num1 = 7;
var num2 = 5;

if (num1 <= num2) {
  document.write("Number 1 equals to number2!")
}
else {
  document.write("Number1 doesn't not equal number2")
}

--------------------------------------------------------------------------  */

/* Example 5: We will use both the "if" and "else" statements but
this time we will  change "==" condition to greater than. */

/* RESULT: in this occasion since the "if" statement is stasfied, it will
be applied */

/* var num1 = 7;
var num2 = 5;

if (num1 > num2) {
  document.write("Number 1 equals to number2!")
}
else {
  document.write("Number1 doesn't not equal number2")
}

-------------------------------------------------------------------------- */

/* Example 6: We will use the "if", "else if" and "else" statements but
this time we will  make "if "  equals as a condition, and "else if" greater
than, and include "else" */

/* RESULT: in this occasion since the "if" statement is  not stasfied, but
 "else if is satiesfied, then "else if" will be applied */

// Note: if "else if" is not satisfied, either then "else" will be applied

var num1 = 7;
var num2 = 5;

if (num1 == num2){
  document.write("Number 1 equals to number 2!");
}

else if (num1 > num2){
  document.write("Number 1 is greater than Number 2");
}
else {
  document.write("Number 1 doesn't not equal number 2");
}







a

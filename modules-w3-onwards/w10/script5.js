/*-- 1) Let's creae a function for "onLOAD" and we will call it
"againAndAgain"*/

/*----
function againAndAgain(){
  document.write("Print!");
}

-----------------------------------------------------------------------------*/


 2) Let's create a function that is loaded with "setTimeout"

1. we use the same tag in the body to call function "againAndAgain".
2. we create a "setTimeout" call to activate the function &
we set it to 6 seconds after loading the page*/

function againAndAgain(){

  setTimeout(function(){document.write("Now we use setTimeout!");},6000);

}


/*------- 3) we we will use an "interval" to call the function again and again,
 1. We call the function.
 2. We will write the.
 3. We will set the interval in this case 4 seconds.

 Note: The interval will continue to repeat itself forever,
 until the browser runs out of memory, so be aware of that.-------------------*/

/*--------------------------------------
 function againAndAgain(){

   document.write("Now we are using intervals to load the function from JS!!");

   setTimeout(againAndAgain(), 4000);
 }

-----------------------------------------------------------------------------*/

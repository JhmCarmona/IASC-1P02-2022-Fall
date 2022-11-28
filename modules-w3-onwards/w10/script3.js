/* 1) we will create a loop "for" and do
all the declarations.
1. We will call the variable "counter =0"
2. We will create a condition "counter <=10"
3. Wat will do everytime it loops " increase by 1 unit"
    NOTE: "counter= counter + 1"  is equals to "counter++"*/


for(counter= 0;counter<=10;counter++){
//let's write the counter on the page
// document.write(counter);   ->"take out//"

/* Let's style this a little. We will ad "<br/>" which will be
added to each number created by the "counter */
//document.write(counter+"<br/>"); ->"take out//"

// Let's now wrapp the the counter numbers on a "<p></p>"
  document.write("<p>"+counter+"</p>");
}

/* NOTE: the values from "for(counter= 0;counter<=10;counter++)"
can be modify for things like T/F values, but for this class,
it will always be numerical */

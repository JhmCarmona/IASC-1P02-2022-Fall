/* 1) Let's create a new variable, and print it on the console */

var randomNum =Math.random();
console.log(randomNum);

/* 2) Let's set the range using the above function, and print it on the consele */

var oneToTen = randomNum * 10;
console.log(oneToTen);

/* 3) Now we are gonna round numbers. We can do this by using "..floor" or  "ceil" to round down or
up respectively. We will use floor in this case NOTE. The range now is between  0-> 9*/

var solidNum = Math.floor(oneToTen)
console.log(solidNum);

/* 4) let's say we want numbers from 0 -> we will add a " + 1 " */

var solidNum2 = Math.floor(oneToTen) +1;

console.log(solidNum2);

// 5) Let's say we want o increase the range to 100, we multiply the number to 100 such as:
var oneToOneHoundred = randomNum * 100;

var solidNum3 = Math.floor(oneToOneHoundred) +1;

console.log(solidNum3);

/* Note since we are using the "Math.floor" we are including the 100, but only the numbers
UP TO 100. If we want to include 100, we can use "Math.ceil()" or the the +1 as shown above. */

var solidNum4 = Math.ceil(oneToOneHoundred);

console.log(solidNum4);

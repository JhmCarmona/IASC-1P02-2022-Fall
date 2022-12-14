/* Part 1: "Let's get to know each other :)!!" */
function myQuestion1() {
  let text;
  let visitor = prompt("What's your name?", );
  if (visitor == null || visitor == "") {
    text = "Hostility towards friendship, detected :< !";
  } else {
    text = "Hello" + " " + visitor + "! nice day isn't?";
  }
  document.getElementById("answer").innerHTML = text;
}

function myQuestion2() {
  let text;
  let visitor = prompt("How is the weather?", );
  if (visitor == null || visitor == "") {
    text = "Looks, like someone's on a bad mood. RUDEE!";
  } else {
    text =  visitor + "? Well, it's December. In Canada it only goes down from here and it won't get better until April, so you better prepare yourself ;)";
  }
  document.getElementById("answer2").innerHTML = text;
}

function myQuestion3() {
  let text;
  let visitor = prompt("How the food at market like?", );
  if (visitor == null || visitor == "") {
    text = "Oh come on! Let's get to know each other a little more (>^_^)>.";
  } else {
    text = "So you think, the food is" + " " + visitor + ". Well, I think it is rather mid, and expensive! Honestly, you probably need to sell a kidney to afford eating there everyday. What a rip off!";
  }
  document.getElementById("answer3").innerHTML = text;
}


function myQuestion4() {
  let text;
  let visitor = prompt("What are you planning to do this winter?", );
  if (visitor == null || visitor == "") {
    text = "Oh come on, you are no fun. The semestre is over. Just relax!";
  } else {
    text = visitor + ". That sounds exciting!!! Well, I listen, truly hope you have a wonder time in your break. I gotta get going now, but I want you to know that I trutly appreciate getting to know you better. Thank you very much, and all the best (>^o^)>(>^o^)> !";
  }
  document.getElementById("answer4").innerHTML = text;
}

/* Part 2. Pop Quiz time. Let's make sure you didn't fall at sleep on me!! */
/* No JS needed (>^_^)>(>^_^)>  !!    */

/* part 3: vanilla calculator */
const AddNumbers = () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let total = num1 + num2;
    document.getElementById('total').value = total;
}

const SubtractNumbers = () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let total = num1 - num2;
    document.getElementById('total').value = total;
}

const MultiplyNumbers = () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let total = num1 * num2;
    document.getElementById('total').value = total;
}

const DivideNumbers = () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let total = num1 / num2;
    document.getElementById('total').value = total;
}

/* Part 4. Cool button!! */

  function clickButton() {

  let image = document.getElementById("uniMeme");
  image.src ="university.jpg";

  document.getElementById("universityMeme") .style.display = "block";
  }

 /* Part 5. Cool buttons!! */

 function buttonUsa(){
                document.getElementById("answerGTA").innerHTML = "Budget New York City, and everyone and their mom is a back-alley rapper";
}

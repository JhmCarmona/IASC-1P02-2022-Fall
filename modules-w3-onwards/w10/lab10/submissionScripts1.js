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

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let sumResult = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = sumResult;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Function Expression - Subtract Numbers
const subtractNumbers = function() {
    // Your code for subtracting numbers goes here
}

// event listener
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Arrow Function - Multiply Numbers
const multiplyNumbers = () => {
    // Your code for multiplying numbers goes here
}

// Example of attaching an event listener
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Open Function Use - Divide Numbers
function divideNumbers() {
    // Your code for dividing numbers goes here
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Output Sum of Org. Array
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);

// Output Multiplied by 2 Array
let multipliedBy2Array = numbersArray.map(number => number * 2);

// Output Sum of Multiplied by 2 Array
let sumOfMultipliedBy2 = multipliedBy2Array.reduce((sum, number) => sum + number);

// Now, you can display or use these results as needed
document.querySelector('#sumOfArray').innerHTML = sumOfArray;
document.querySelector('#multiplied').innerHTML = multipliedBy2Array;
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultipliedBy2;

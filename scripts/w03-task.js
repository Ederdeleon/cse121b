/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
document.getElementById("addNumbers").addEventListener("click", function () {
    let num1 = parseFloat(document.getElementById("add1").value);
    let num2 = parseFloat(document.getElementById("add2").value);
    let sum = num1 + num2;
    document.getElementById("sum").value = sum.toFixed(2);
});


/* Function Expression - Subtract Numbers */
document.getElementById("subtractNumbers").addEventListener("click", function () {
    let num1 = parseFloat(document.getElementById("subtract1").value);
    let num2 = parseFloat(document.getElementById("subtract2").value);
    let difference = num1 - num2;
    document.getElementById("difference").value = difference.toFixed(2);
});

/* Arrow Function - Multiply Numbers */
document.getElementById("multiplyNumbers").addEventListener("click", function () {
    let num1 = parseFloat(document.getElementById("factor1").value);
    let num2 = parseFloat(document.getElementById("factor2").value);
    let product = num1 * num2;
    document.getElementById("product").value = product.toFixed(2);
});

/* Open Function Use - Divide Numbers */
document.getElementById("divideNumbers").addEventListener("click", function () {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);

    if (divisor !== 0) {
        let quotient = dividend / divisor;
        document.getElementById("quotient").value = quotient.toFixed(2);
    } else {
        alert("Cannot divide by zero!");
    }
});

/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function () {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let isMember = document.getElementById("member").checked;
    let total;

    if (isMember) {
        total = subtotal * 0.9; // 10% discount for club members
    } else {
        total = subtotal;
    }

    document.getElementById("total").textContent = "$ " + total.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
// JavaScript code for W03 Programming Tasks
let sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.getElementById("array").textContent = sourceArray;

let odds = sourceArray.filter(num => num % 2 !== 0);
document.getElementById("odds").textContent = odds;

let evens = sourceArray.filter(num => num % 2 === 0);
document.getElementById("evens").textContent = evens;

let sumOfArray = sourceArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

let multiplied = sourceArray.map(num => num * 2);
document.getElementById("multiplied").textContent = multiplied;

let sumOfMultiplied = multiplied.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
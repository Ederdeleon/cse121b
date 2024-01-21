/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Eder De Leon';
const Year = new Date();
let currentYear = Year.getFullYear();
let profilePicture = 'images/eder.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
imageElement.setAttribute('src', profilePicture);
nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.innerHTML = (`${currentYear}`);
imageElement.setAttribute('alt',`profile picture of ${fullName}`);



/* Step 5 - Array */
let foods = ["Pizza", "Tacos", "Pozole", "Fries"];

foodElement.innerHTML += `<br>${foods}`;
foods.shift()
foodElement.innerHTML += `<br>${foods}`;
foods.pop()
foodElement.innerHTML += `<br>${foods}`;




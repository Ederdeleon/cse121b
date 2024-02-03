/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

    myProfile.name = "Eder De Leon";
    myProfile.photo = 'images/eder.png';

    myProfile.favoriteFoods = [
        'Pizza',
        'Tacos',
        'Shrimp',
        'Pozole'
    ];
    myProfile.hobbies = ['Soccer', 'WorkOut', 'Eat'];

/* Populate Profile Object with placesLive objects */
myProfile.PlacesLived = [];
myProfile.PlacesLived.push(
    {
        place: 'Mexico City, MX',
        length: '20 years'
    }
);

myProfile.PlacesLived.push(
    {
        place: 'Cusco, Peu',
        length: '2 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.PlacesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });


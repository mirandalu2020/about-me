'use strict';
console.log('this linked file is working');

let score = 0;


let userName = prompt('What\'s your name?');
//console.log('Welcome to my site, '+userName);
//console.log('Thank you for joinint me today, ' + userName);
alert('Welcome to my site, '+userName.charAt(0).toUpperCase()+userName.slice(1).toLowerCase());
alert('Thank you for joining me today, ' + userName.charAt(0).toUpperCase()+userName.slice(1).toLowerCase());

let doIKnowYou = prompt('Do I know you? Y/N').toLocaleLowerCase();
if (doIKnowYou === 'yes' || doIKnowYou === 'y') {
  //console.log('Now I do for sure!') ;
  alert('Now I do!');
  score += 1;
}
else if (doIKnowYou === 'no' || doIKnowYou === 'n') {
  console.log('Now I do!');
  alert('I am happy to get to know you!');
}
else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

let doILikeTravel = prompt('Do I like to travel? Y/N').toLowerCase();
if (doILikeTravel === 'yes' || doILikeTravel === 'y') {
  //console.log('You are correct!');
  alert('You are correct!');
  score += 1;
}
else if (doILikeTravel === 'no' || doILikeTravel === 'n') {
  //console.log('I actually like traveling sometimes');
  alert('I actually like traveling sometimes');
}
else {
  alert('Please answer yes or no');
}

let doILikeBeach = prompt('Do I like beaches? Y/N').toLowerCase();
if (doILikeBeach === 'yes' || doILikeBeach === 'y') {
  //console.log('Not really, I don\'t like salty water');
  alert('Not really, I don\'t like salty water');
}
else if (doILikeBeach === 'no' || doILikeBeach === 'n') {
  //console.log('You are correct!');
  alert('You are correct!');
  score += 1;
}
else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

let doILikeBagel = prompt('Do I like to bagels? Y/N').toLowerCase();
if (doILikeBagel === 'yes' || doILikeBagel === 'y') {
  //console.log('I actually can survive without pizza!');
  alert('I actually can survive without bagels!');
}
else if (doILikeBagel === 'no' || doILikeBagel === 'n') {
  //console.log('You are correct!');
  alert('You are correct!');
  score += 1;
}
else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

let doILikeBaking = prompt('Do I like to bake? Y/N').toLowerCase();
if (doILikeBaking === 'yes' || doILikeBaking === 'y') {
  //console.log('Baking is one of the coolest thing!');
  alert('Baking is one of the coolest thing!');
  score += 1;
}
else if (doILikeBaking === 'no' || doILikeBaking === 'n') {
  //console.log('I love baking :}');
  alert('I actually love baking :}');
}
else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

let placeTraveled = 21;
let attemptsRemaining = 4;
let userGuess = false;

while (attemptsRemaining > 0) {
  attemptsRemaining--;
  //console.log(`Attempts remaining: ${attemptsRemaining}`);
  let guessNumber = parseInt(prompt('How many places have I traveled to in the US?'));

  if (guessNumber === placeTraveled) {
    alert('You are correct!');
    score += 1;
    userGuess = true;
    break;
  }

  else if (guessNumber <= placeTraveled && guessNumber > 0) {
    alert('I have been to more places than that');
  }

  else if (guessNumber >= placeTraveled && guessNumber <= 100) {
    alert('I wish I\'ve traveled that often...');
  }

  else {
    alert('Please enter a number between 1 and 100');
  }
}

if (userGuess === false) {
  alert(`I've been to ${placeTraveled} in the United States`);
}



let pizzaToppings = ['mushrooms','truffle oil','olives'];
attemptsRemaining = 6;
let correct = false;

while (attemptsRemaining > 0 && !correct) {
  attemptsRemaining--;
  //console.log(attemptsRemaining);

  let guessToppings = prompt('What\'s my favorite pizza topping?').toLowerCase();

  for (let i=0; i<pizzaToppings.length; i++){
    if (guessToppings === pizzaToppings[i] || guessToppings === 'mushroom' || guessToppings === 'olive'){
      correct = true;
      break;
    }
  }

  if (!correct) {
    alert ('Try again');
  }
}

if (correct){
  alert('Impressive, you guessed it!');
  score += 1;
}

alert(`My top three favorite pizza toppings are: ${pizzaToppings[0]}, ${pizzaToppings[1]}, ${pizzaToppings[2]}`);

alert(`Overall you answered ${score} out of 7 questions correctly.`);

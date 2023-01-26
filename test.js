'use strict';
let score = 0;

function travelQuestion(doILikeTravel) {
  doILikeTravel = prompt('Do I like to travel? Y/N').toLowerCase();
  if (doILikeTravel === 'yes' || doILikeTravel === 'y') {
    //console.log('You are correct!');
    alert('You are correct!');
    return score += 1;
  }
  else if (doILikeTravel === 'no' || doILikeTravel === 'n') {
    //console.log('I actually like traveling sometimes');
    alert('I actually like traveling sometimes');
  }
  else {
    alert('Please answer yes or no');
  }
}


function beachQuestion(doILikeBeach) {

  doILikeBeach = prompt('Do I like beaches? Y/N').toLowerCase();
  if (doILikeBeach === 'yes' || doILikeBeach === 'y') {
    //console.log('Not really, I don\'t like salty water');
    alert('Not really, I don\'t like salty water');
  }
  else if (doILikeBeach === 'no' || doILikeBeach === 'n') {
    //console.log('You are correct!');
    alert('You are correct!');
    return score += 1;
  }
  else {
    //console.log('Please answer yes or no');
    alert('Please answer yes or no');
  }
}

travelQuestion();
beachQuestion();
console.log(score);

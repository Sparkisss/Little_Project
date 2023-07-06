/*
let scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

let costs = [.25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .15,
              .17, .15, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29];

let highScore = printAndGetHighScore(scores);
let bestSolutions = getBestResult(scores, highScore);
let mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);

function printAndGetHighScore(scores) {
  let output;
  let highScore = 0;
  for (i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score " + scores[i];
    console.log(output);
    if(highScore < scores[i]) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function getBestResult(scores, highScore) {
  let bestSolutions = [];
  for(let i = 0; i < scores.length; i++) {
    if(scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

function getMostCostEffectiveSolution(scores, costs, highScore) {
  let cost = 100;
  let index;
  for(let i = 0; i < scores.length; i++) {
    if(scores[i] == highScore) {
      if(cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

console.log("Bubbles tests:" + scores.length);
console.log("Higest bubbles score:" + highScore);
console.log("Solutions with best score " + bestSolutions);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
*/

let taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passenger: 4,
  convertible: false,
  mileage: 281341,
};

let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "blue",
  passenger: 2,
  convertible: false,
  mileage: 88000,
};

function prequal(car) {
  if(car.mileage > 10000) {
    return false;
  }else if(car.year > 1960) {
    return false;
  }
  return true;
}

let worthALook = prequal(taxi);
if(worthALook) {
  console.log("You gotta check out this " + taxi.make + " " + taxi.model);
}else {
  console.log("You should really past on the " + taxi.make + " " + taxi.model);
}
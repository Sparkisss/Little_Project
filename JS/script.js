
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

higest = getResult(scores);
function getResult(scores) {
  let higest = 0;
  for(let i =0; i < scores.length; i++) {
    console.log("Index#: " + i + " scores: " + scores[i]);
    if(higest < scores[i]) {
      higest = scores[i];
    }
  }
  return higest;
}

function getBestIndex(scores, higest) {
  let array = [];
  for(i = 0; i < scores.length; i++) {
    if(higest == scores[i]) {
      array.push(i);
    }
  }
  return array;
}

function getFinishResult(scores, costs, higest) {
  let cost = 100;
  let index;
  for(let i = 0; i < scores.length; i ++) {
    if(scores[i] == higest && cost > costs[i]) {
        cost = costs[i];
        index = i;
    }
  }
  return index;
}


index = getFinishResult(scores, costs, higest);
console.log("My index " + index);
array = getBestIndex(scores, higest);
console.log("The best result: " + higest);
console.log("New massiv: " + array);



/*
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
*/
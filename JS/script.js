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
*/


/*
let chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passenger: 2,
  convertible: false,
  mileage: 1021,
  fuel: 0,
  started: false,
  start: function() {
    if(this.fuel > 0) {
      this.started = true;
    }else {
      console.log("You need fuel up");
    }
    
  },
  stop: function() {
    this.started = false;
  },
  drive: function() {
    if(this.started && this.fuel > 0) {
      console.log("You drive.");
      this.fuel = this.fuel - 1;
    }else if(this.fuel <= 0){
      console.log("You don't have fuel!");
    }else {
      console.log("Start your engine!");
    }
  },
  addFuel: function(amount) {
    this.fuel += amount; 
  }
};

chevy.start();
chevy.drive();
chevy.stop();
chevy.addFuel(2);
*/

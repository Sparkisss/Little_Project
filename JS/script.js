let scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

function solution() {
  let items = scores.length;
  console.log("Bubble solution #0 score: " + scores[0]);
  console.log("Bubble solution #1 score: " + scores[1]);
  console.log("Bubble solution #2 score: " + scores[2]);
  console.log("Bubbles tests: " + items);
};

function allItem() {
  let biggest = 0;
  let flag = true;
  let flagTwo = true;
  let items = 0;

  while(flag) {
    if(scores.length > (items)){
      ++items;
      if(biggest < scores[items]) {
        biggest = scores[items];
      }
    }else {
      console.log("Higest bubble score: " + biggest);
      flag = false;
      items = 0;
    }
  }
  
  while(flagTwo) {
    if(scores.length-1 > (items)){
      ++items;
      //console.log(items);
      //console.log(scores.indexOf(scores[items]));
      if(scores[items] == biggest) {
        console.log(scores.indexOf(biggest));
      }
    }else {
      flagTwo = false;

    }
  }
  
}

solution();
allItem();
// This is an in-line comment.
/* This is a
multi-line comment */

const age = 18;
if(age >= 18) {
    console.log("I am allowed to vote.")
} else {
    console.log("I not old enough to vote")
}
if (age>= 21) {
    console.log("I am allowed to drinki alcohol.");
} else {
    console.log("Not old enough to drink alcohol.");
}

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result ="5 or smaller"
    }
  
  
    // Only change code above this line
    return result;
  }
  
  console.log(testElse(9));

let name = "Peter";
if (name == "Peter") {
    console.log("Hello Peter.")
} else if (name = "Edwin") {
    console.log("Hello Edwin!");
} else {
    console.log("Hello guest ");
}

//chaining if else statements.
function testSize(num) {
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else if (num >= 20) {
    return "Huge"
  }
    return "Change Me";
  }

//Golf code
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if (strokes == 1){
  return names[0]
}else if (strokes <= par - 2){
  return names[1]
}else if (strokes == par - 1){
  return names[2]
}else if (strokes == par){
  return names[3]
}else if (strokes == par + 1){
  return names[4]
}else if (strokes == par + 2){
  return names[5]
}else if (strokes >= par + 3){
  return names[6]
}
  return "Change Me";
}

console.log(golfScore(5, 8));

//selecting from many options using switch statements
function caseInSwitch(val) {
    let answer = "";
  switch(val) {
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta"
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
  }
    return answer;
  }
  
  console.log(caseInSwitch(1));
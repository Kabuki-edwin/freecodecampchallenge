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

  //default option in switch statements
  function switchOfStuff(val) {
    let answer = "";
  switch(val) {
    case "a":
     answer = "apple";
     break;
    case "b":
     answer = "bird";
     break;
    case "c":
     answer = "cat";
     break;
    default:
    answer = "stuff";
    break;
  }
    return answer;
  }
  
  console.log(switchOfStuff(1));

//Multiple identical options
  function sequentialSizes(val) {
    let answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
     answer = "Low";
     break;
    case 4:
    case 5:
    case 6:
     answer = "Mid";
     break;
    case 7:
    case 8:
    case 9: 
      answer = "High";
      break;
  }
    return answer;
  }
  
  console.log(sequentialSizes(1));

//replacing if else statements with switch
  function chainToSwitch(val) {
    let answer = "";
    switch(val) {
       case "bob":
       answer = "Marley";
       break;
      case 42:
       answer = "The Answer";
       break;
      case 1:
       answer = "There is no #1";
       break;
      case 99:
       answer = "Missed me by this much!";
       break;
      case 7:
      answer = "Ate Nine" 
    }
    return answer;
  }
  
  console.log(chainToSwitch(7));

//Returning boolean values from functions
  function isLess(a, b) {
    return (a < b)
  }
  
console.log(isLess(10, 15));
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
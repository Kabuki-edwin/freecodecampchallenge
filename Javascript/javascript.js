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


//Return early pattern for functions
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(2,2));

//Counting cards
  let count = 0;

function cc(card) {
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
   count++;
   break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
   count--;
   break;
}
if(count > 0){
  return count +" Bet"
}else {
  return count + " Hold"
}
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


//Building Javascript objects
const myDog = {
"name" : "Bullet",
"legs": 4,
"tails":1,
"friends":["Scooby","Ray","Rex"]
};

//Accessing object properties using dot notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};


const hatValue = testObj.hat;     
const shirtValue = testObj.shirt;   

//Accessing object properties using bracket notation
const testObje = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};


const entreeValue = testObje["an entree"];   
const drinkValue = testObje["the drink"];  

//Accessing object properties using variables
const testOb = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};


const playerNumber = 16;
const player = testOb[playerNumber];

//Updating object properties
const myDogs = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


const theDog = "Happy Coder"
myDogs.name = theDog


//Adding new properties to javascript objects
const myDogg = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDogg.bark = "woof";

//Deleting properties from javascript objects
const myDoggs = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};


delete myDoggs.tails

//Using objects for lookups
function phoneticLookup(val) {
  let result = "";
  
var lookup = {
  "alpha": "Adams",
  "bravo" :"Boston",
  "charlie": "Chicago",
  "delta" : "Denver",
  "echo" : "Easy",
  "foxtrot" : "Frank"
};
result = lookup[val]
  return result;
} 

//Testing for object propoerties
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

//Manipulating complex object
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];


//Accessing nested objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

//Record collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}
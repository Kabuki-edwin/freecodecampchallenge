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


//Iterate with JavaScript While Loops
const myArray = [];

var i = 5;
while (i >= 0){
  myArray.push(i);
  i--;
}


//Iterate with JavaScript for Loops
const theArray = [];


for (var i = 1;i <= 5;i++){
  theArray.push(i)
}

//Iterate odd numbers with for loops
const myyArray = [];


for(let u = 1; u < 10;u += 2 ){
  myyArray.push(u);
}

//counting backwards with for loop
const mmyArray = [];

for (let i = 9;i > 0;i -= 2){
  mmyArray.push(i);
}

//Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];


let total = 0;
for (let i = 0;i < myArr.length;i++){
  total += myArr[i]
}


//Nesting for loops
function multiplyAll(arr) {
  let product = 1;
for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//Iterate with JavaScript Do...While Loops
const myyyArray = [];
let i = 10;

do {
  myyyArray.push(i);
  i++;
} while (i < 5)

//recursion
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

//Profile lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

//Generating random fractions
function randomFraction() {


  return Math.random() ;


}

//Generating random whole numbers
function randomWholeNum() {


  return Math.floor(Math.random() * 10);
}


//Generating random whole numbers within a range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax- myMin + 1)) +myMin;
}


//parseInt function
function convertToInteger(str) {
  return parseInt(str)
}

//parseInt function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2)
}

//Conditional operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

//Use multiple conditional operator
function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}

//Recursion to create a count down
function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}
//Recursion to create a range of numbers
function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum
    ? []
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

//Comparing the scopes of  let and var keywords
function checkScope() {
  let i = 'function scope';
  if (true) {
   let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//Mutating an array declared with const
const s = [5, 7, 2];
function editInPlace() {
s[0] = 2;
s[1] = 5;
s[2] = 7;
}
editInPlace();

//How to prevent object mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
Object.freeze(MATH_CONSTANTS)
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Use Arrow Functions to Write Concise Anonymous Functions
const magic = () =>  new Date() 

//Arrow function with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

//Setting default parameters for functions 
const increment = (number, value = 1) => number + value;


// Using rest parameter with function parameter
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1, 2, 3)); 

//The spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 

//Destructuring assignment
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today,tomorrow } = HIGH_TEMPERATURES;

//Using destructuring assignment to assign variables from objects
const HIGH_TTEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
  
const {today:highToday ,tomorrow:highTomorrow} = HIGH_TTEMPERATURES;


//assign variables from nested objects using destructuring assignment
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

  
const {today:{low:lowToday ,high:highTtoday}} = LOCAL_FORECAST;


//Use destructuring assignment to assing variables from arrays
let a = 8, b = 6;

[a, b] = [b, a]

//Destructuring via  rest element
function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
}

const half = ({max, min}) => (max + min) / 2.0; 

//Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);

//Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
return {name, age, gender};
};
//Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(2);
console.log(bicycle.gear);

//Use class Syntax to Define a Constructor Function
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name);

//Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(fahrenheit) {
    this._kelvin = (5 / 9) * (fahrenheit - 32) + 273.15;
  }
  
  get temperature() {
    return this._kelvin - 273.15;
  }
  
  set temperature(celsius) {
    this._kelvin = celsius + 273.15;
  }
}

//Use export to share a code block
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}

//Reuse javascript code using import
import { uppercaseString, lowercaseString } from './string_functions.js'

uppercaseString("hello");
lowercaseString("WORLD!");

//Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js"

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

//importing a default export
import subtract from "./math_functions.js"  

subtract(7,4);

//Creating a javascript promise
const makeServerRequest = new Promise((resolve , reject) => {

});

//Completing a promise with resolve and reject
const makeSserverRequest = new Promise((resolve, reject) => {

  let responseFromServer;
    
  if(responseFromServer) {
     resolve("We got the data");
  } else {  
    reject("Data not received")
  }
});

//Handle a fulfilled promise with then
const makeSerrverRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result => {
  console.log(result);
});

//Handle a rejected promise with catch
const makeServeerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.catch(error => {
  console.log(error);
});

//using test method for regular expressions
let myString = "Hello, World!";
let myRegex = /Hello/;
let resulting = myRegex.test(myString);

//Matching literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let results = waldoRegex.test(waldoIsHiding);

//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let resullt = petRegex.test(petString);

//Ignore case while matching
let myStriing = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let resuult = fccRegex.test(myString);

//Extracting matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let resultt = extractStr.match(codingRegex); 

//How to find more than the first match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let ressult = twinkleStar.match(starRegex); 

//Matching anything with a wildcard period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let reesult = unRegex.test(exampleStr);

//Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let ressuult = quoteSample.match(vowelRegex); 

//Match Letters of the Alphabet
let quoteeSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let resssult = quoteSample.match(alphabetRegex);

//Match Numbers and Letters of the Alphabet
let quooteSample = "Blueberry 3.141592653s are delicious.";
let myyRegex = /[h-s2-6]/gi; 
let reeesult = quoteSample.match(myRegex); 

//Match Single Characters Not Specified
let quoteSaample = "3 blind mice.";
let myReggex = /[^0-9^aeiou]/gi; 
let rresult = quoteSample .match(myRegex); 

//Matching characters that occur once or twice
let difficultSpelling = "Mississippi";
let myyyRegex = /ss+/gi;
let reessult = difficultSpelling.match(myRegex);

//Match characters that occur zero or more times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 


let rreesult = chewieQuote.match(chewieRegex);

//Finding characters with a lazy matching
let text = "<h1>Winter is coming</h1>";
let myReggeex = /<.*?>/; 
let resulltt = text.match(myRegex);

//Finding one or more characters in a hunt
let reCriminals = /C+/;

//Matching beggining string patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let resuullt = calRegex.test(rickyAndCal);

//Match ending string patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let resuuullt = lastRegex.test(caboose);

//Matching all letters and numbers
let quotteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let reesssult = quoteSample.match(alphabetRegexV2).length;

//Match everything but letters and numbers
let quuoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let rressult = quoteSample.match(nonAlphabetRegex).length;

//Matching all numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let reesullt = movieName.match(numRegex).length;

//Restricting possible user names
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let resuultt = userCheck.test(username);

//How to match whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let ressullt = sample.match(countWhiteSpace);

//Matching non-whitespace characters
let sammple = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let resuulllt = sample.match(countNonWhiteSpace);

//Specify upper and lower number of matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; 
let reesultt = ohRegex.test(ohStr);

//Specifying only the lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let rresultt = haRegex.test(haStr);

//How to specify exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
let rresuult = timRegex.test(timStr);

//Change for all or none
let favWord = "favorite";
let favRegex = /favou?rite/; 
let ressultt = favRegex.test(favWord);

//Positive and negative lookaheads
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; 
let reesulltt = pwRegex.test(sampleWord);

//Checking for mixed grouping of characters
let mySstring = "Eleanor Roosevelt";
let myRregex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let reresult = myRegex.test(myString);

//Reuse patterns using capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let rreresult = reRegex.test(repeatNum);

//Use capture groups to search and replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1";
let resuulltt = str.replace(fixRegex, replaceText);

//Remove whitespace from start and end
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let reessuult = hello.replace(wsRegex, "");

// Use javascript cosole to check the value of a variable
let aa = 5;
let bb = 1;
aa++;

console.log(aa)
let sumAB = aa + bb;
console.log(sumAB);

//Understanding difference between freecodecamp and browser console
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output)
console.clear()

//Using type of to check the type of variable
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven)
console.log(typeof three)

//Catching misspelled variable and function names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArrray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//catch mixed usage of single and double qoutes
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//Use of assignment operator instead of equality operator
let x = 7;
let y = 9;
let ressuuuult = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

//Catch  missing opening and closing parenthesis from function calls 
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let resullttt = getNine();
console.log(result);

//Catch arguments passed in the wrong order when calling a function
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower( base, exp);
console.log(power);

//Catch off by one errors when using indexing
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();

//Use caution when reinitializing variables
function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = []; /* <-----  row has been declared inside the outer loop. 
     Now a new row will be initialised during each iteration of the outer loop allowing 
     for the desired matrix. */
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);

//Prevent infinite loops with a valid terminal condition
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

// Use an array to store a collection of data 
let yourArray = [1, "string", true ,false,34];

//Using bracket notation to access the contents of an array
let myyaArray = ["a", "b", "c", "d"];

myArray[1] = "not b anymore";

console.log(myyaArray);

//Adding items to an array using unshift() and push() method
function mixedNumbers(arr) {

arr.unshift('I', 2, 'three');
arr.push(7, 'VIII', 9)

  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

//Removing items from an array using pop() and shift() method
function popShift(arr) {
  let popped =arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
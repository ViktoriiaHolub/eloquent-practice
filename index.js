// chapter: 0 Introduction

// 1
const totalByBits =
  "00110001 00000000 00000000 00110001 00000001 00000001 00110011 00000001 00000010 01010001 00001011 00000010 00100010 00000010 00001000 01000011 00000001 00000000 01000001 00000001 00000001 00010000 00000010 00000000 01100010 00000000 00000000";

const resultFromBytes = parseInt(totalByBits, 2);
console.log(resultFromBytes); // 49

// 2
let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}

// total:55 = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
console.log(total); // 55

// chapter: 1 Values, Types, and Operators

// Number
const number505 = 505;
const bitsOfNumber = number505.toString(2);
console.log(bitsOfNumber); // '111111001'

// String
const letterA = "a";
const bitsOfLetter = letterA.charCodeAt(0).toString(2);
console.log(bitsOfLetter); // '1100001'

let textWithTwoRows = "This is the first line\nAnd this is the second";
console.log(textWithTwoRows);
// This is the first line
// And this is the second

let symbolForLineFeed = 'A newline character is written like "\\n".';
console.log(symbolForLineFeed);
// 'A newline character is written like "\n".';

// Chapter: 2 Program Structure
let result = 1;
let counter = 0;

while (result < 15) result *= 2;
console.log("result", result);

while (counter < 10) {
  counter += 1;
  result *= 2;
}
console.log("result", result);

do {
  var userName = "User1";
} while (!userName);
console.log(userName);

/* the 
  second 
  type
  of 
  comments
*/

// Task 1 Looping a triangle
let hashList = "#";
for (let hash = 1; hash <= 7; hash++) {
  // method 1
  // let hashLine = hashList.repeat(hash);
  // method 2
  console.log(hashList);
  hashList += "#";
}

// Task 2 FizzBuzz
for (let num = 1; num <= 100; num++) {
  const cond1 = num % 3 === 0;
  const cond2 = num % 5 === 0;

  if (cond1 && cond2) {
    console.log("Fizz Buzz");
  } else if (cond1) {
    console.log("Fizz");
  } else if (cond2) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

// Task 3 Chessboard
const boardLength = 8;
for (let chessLine = 0; chessLine < boardLength; chessLine++) {
  let board = "";
  const hash = "#";
  const space = " ";

  for (let size = 0; size < boardLength / 2; size++) {
    if (chessLine % 2 === 0) {
      board += hash + space;
    } else {
      board += space + hash;
    }
  }
  board += "\n";

  console.log(board);
}

// Chapter: 3 Functions
const square = function (x) {
  return x * x;
};

console.log(square(10));

const makeNoise = function () {
  console.log("Pling");
};
console.log(makeNoise()); // Pling / undefined

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};
console.log(power(2, 10));

let x = 10;
var three = 3;
if (true) {
  let y = 20;
  var z = 30;
  var three = "three";
  console.log(x + y + z); // 60
}
// y isn't visible here
console.log(x + z); // 40
console.log(three); // three

var b = "outside";
const f1 = function () {
  var b = "inside f1";
};
f1();
console.log(b); // outside

const f2 = function () {
  b = "inside f2";
};
f2();
console.log(b); // inside f2

const landscape = function () {
  let result = "";
  const flat = function (size) {
    for (let count = 0; count < size; count++) {
      result += "_";
    }
  };

  const mountain = function (size) {
    result += "/";
    for (let count = 0; count < size; count++) {
      result += "'";
    }
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);

  return result;
};
console.log(landscape());

let launchMissiles = function () {
  missileSystem.launch("now");
};
let safeMode = false;
if (safeMode) {
  launchMissiles = function () {
    // do nothing
  };
}

const power2 = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

const square2 = (x) => x * x;
console.log(square2(4, true, "hedgehog")); // 16

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10)); // -10
console.log(minus(10, 5)); // 5

function power3(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power3(4)); // 16
console.log(power3(2, 6)); // 64

// closure
function wrapValue(n) {
  const local = n;
  return () => local;
}
const wrap1 = wrapValue(10);
const wrap2 = wrapValue(20);
console.log(wrap1()); // 10
console.log(wrap2()); // 20

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2); // for number
console.log(twice(5)); // for factor // 10

function power4(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power4(base, exponent - 1);
  }
}
console.log(power4(2, 3)); // 8

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(24)); // (((1 * 3) + 5) * 3)

// refactoring code with 2 steps
// initial variant
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11); // 007 Cows 011 Chickens

// 1st step
function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory2(7, 11, 3);

// 2nd step
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory3(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory3(7, 16, 3);

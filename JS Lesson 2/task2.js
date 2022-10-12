// 1 2


function adder(num1, num2){
  if (typeof num1 !== "number" || typeof num2 !== "number"){
    return;
  }
  return num1 + num2;
}

console.log(adder(3, 7));

// 3 

var weight = [22, 56, 67.5, 70, 31, 1, 5];

function reverseArr (array){
  return array.reverse()
}

console.log(reverseArr(weight))

// 4 5

var items = ["banana", "apple", "microphone", "violin", "driver", "spade", "sunglasses", "paper", "pants", "toothbrush"];

items[7] = "wallet"

console.log(items);

// 6

console.log (items.slice(0, 5));

// 7

console.log (items.pop ());
console.log (items);

console.log (items.push ("cup"));
console.log (items);

var firstElement = items.shift();
console.log (items);

console.log (items.unshift("banana"));
console.log (items);

var planets = ["Jupiter", "Mercury", "Mars", "Venus", "Pluto", "Sun"];
var combined = items.concat(planets);

console.log(combined)

combined.splice (14,2,"Saturn", "Earth")
console.log(combined)

console.log (combined.slice(10, 16))

console.log(items.reverse())

console.log(items.join(" and "))

items.forEach(item)

function item (item, index, array) {
  console.log (" item " + item + " is index " + index);
}

console.log (items.includes("driver"));

console.log (items.indexOf("driver"));

console.log (items.every(isString))

function isString(item){
  return item = "string"
}

console.log (items.some(isDriver))

function isDriver(item){
  return item === "driver"
}


var filtered = combined.filter(isPlanets);

function isPlanets (item){
  if (item==="Mercury" || "Venus" || "Earth" || "Mars" || "Jupiter" || "Saturn" || "Uranus" || "Neptune"){
    return true;
  }
}

console.log(filtered)


console.log(combined.find(findEarth))

function findEarth(item) {
  return item === "Earth"
}

console.log(combined.findIndex(findEarth))

function findEarth(item) {
  return item === "Earth"
}

console.log(items.sort())

function itemise (item){
  return "item - " + item + ""
}

console.log (items.map(itemise))
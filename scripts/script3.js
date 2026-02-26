// Array functions

let array = [0,1,2,3,4,5,6,7,8,9];

console.log("Normal array:", array);

let mappedArray = array.map(x => x + 1);

console.log("Mapped array +1:", mappedArray);

let filteredArray = array.filter(x=> x > 4);

console.log("Filtered array >4:", filteredArray);

let reducedArray = array.reduce((acc, x) => acc - x, 0);

console.log("Reduced array (difference):", reducedArray);

for (let i = 0; i < array.length; i++) {
    console.log("Array element", i, ":", array[i]);
}

// Destructuring: Performs the opposite of array construction. 
// It allows us to unpack values from arrays, or properties from objects, 
// into distinct variables.
let a, b, rest;

[a, b] = [10,20];

console.log(a, b);

[a, b, ...rest] = [10,20,30,40,50]; //rest operator
// Turns the remaining elements into an array and assigns it to the variable rest

let restCopy = [...rest]; //spread operator
// Creates a shallow copy of the rest array by spreading its elements 
// into a new array

console.log(rest);

console.log(restCopy);

// Await, Async, and Promises
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolved after 2 seconds");
        }, 2000); //2000 milliseconds = 2 seconds
    });
}

async function asyncCall(){
    console.log("Calling...please wait...");
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Final Drills:

// Reverse a string
function reverseString(str){
    // Split the string into an array of characters, 
    // reverse the array, 
    // and then join it back into a string
    return str.split("").reverse().join("");
}

console.log(reverseString("React Native"));

//Remove duplicates from an array
function removeDuplicates1(arr){
 const uniqueSet = [...new Set(arr)]; // Create a Set from the array, 
 // which automatically removes duplicates
 return Array.from(uniqueSet); // Convert the Set back to an array
}


// Simple method only works for primitive types (numbers, strings, etc.) 
console.log(removeDuplicates1([1,2,3,4,4,5,5,6]));

// Alternative method using filter and indexOf
function removeDuplicates2(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates2([1,2,3,4,4,5,5,6]));

//Complex method that works for objects as well
function removeDuplicatesComplex(arr){
//uses Map, which stores key value pairs and maintains the order of insertion.
// Removes object with the same ID
const unique = Array.from(
  new Map(arr.map(item => [item.id, item])).values()
);
return unique;}

const cars = [ 
{ make: "Toyota", model: "Camry", year: 2020, id: 1}, 
{ make: "Honda", model: "Civic", year: 2019, id: 2}, 
{ make: "Toyota", model: "Camry", year: 2020, id: 1}];

console.log(removeDuplicatesComplex(cars));

// Sort an array of objects
const people = [
    { name: "Alice", age: 35 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 40 },
    { name: "Bob", age: 25 }
];

const nameSort = people.toSorted((a, b) => a.name.localeCompare(b.name));
//toSorted is the same as Sort but it makes a copy of the array instead
console.log(nameSort);

const ageAscending = [...people].sort((a, b) => a.age - b.age)
console.log(ageAscending); // Sorts by age (ascending)

console.log(people.sort((a, b) => b.age - a.age)); // Sorts by age (descending)

//Fetch data from an API
// Link to the API
const API = 'https://pokeapi.co/api/v2';


//async function to get API data
async function getJson(url){
    try{
        const res = await fetch(url);
        if(!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        // only parse the body if response is ok
        return await res.json();
    } catch (err) {
        console.error('Fetch error', err)
        throw err;
    }
}

// Obtains the data given a limit and an offset
async function getPokemonList(limit = 20, offset = 0) {
  const url = `${API}/pokemon?limit=${limit}&offset=${offset}`;
  return await getJson(url);
}

// define limit and offset here
getPokemonList(20, 10).then(data => {
  console.log(data.results); // array of { name, url }
}).catch(console.error);
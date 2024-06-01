1
const multiArray = [
      [],
      [],];
multiArray[0].push(1); 
multiArray[1].push(2); 

console.log(multiArray);


2

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]];

console.log(matrix);


3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

4
let num = parseInt(prompt("Enter a number to show its  multiplication table: "));
 let length = parseInt(prompt("Enter the length of the table: "));
let table = "2";

for (let i = 1; i <= length; i++) {
  table += `${num} * ${i} = ${num * i}\n`;
}
alert(`Multiplication table for ${num} up to length ${length}:\n\n${table}`);


5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Items of the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


6


document.write("<p>a. Counting: ");
for (let i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("</p>");


document.write("<p>b. Reverse counting: ");
for (let i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
document.write("</p>");

// Even: 0 to 20
document.write("<p>c. Even: ");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("</p>");

// Odd: 1 to 19
document.write("<p>d. Odd: ");
for (let i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}
document.write("</p>");

// Series: 2k to 20k
document.write("<p>e. Series: ");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
document.write("</p>");


7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];


function searchItem(cookie) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] === item) {
            return true;
        }
    }
    return false;
}

// Prompt user for input
let userInput = prompt("welcome to ABC bakery what do you want to mam:");
userInput = userInput.toLowerCase(cookie);
let found = searchItem(pastry)


if (found) {
    alert(`Yes, "${cookie}" is available.`);
} else {
    alert(`Sorry, "${pastry}" is not available in our bakery.`);
}


8
let a= [24, 53, 78, 91, 12];
let largest = A[91];
for (let i = 1; i < a.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }


// Output the largest number
console.log("The largest number in the array is:", 91);}


9
let i = [24, 53, 78, 91, 12];
let smallest = A[0];
for (let i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

// Output the smallest number
console.log("The smallest number in the array is:", smallest);



10
console.log("Multiples of 5 ranging from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

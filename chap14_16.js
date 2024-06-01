var studentNames = [];
var studentNames = new Array();
var stringArray = ["apple", "banana", "orange", "grape"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true, true];
var mixedArray = [1, "apple", true, 3.14];


// Function to calculate percentage
function calculatePercentage(score, totalMarks) {
    return (score / totalMarks) * 100;
}

// Array to store student names
let students = [];

// Array to store scores of students
let scores = [];

// Total marks for each student
const totalMarks = 500;

// Input student names and scores
for (let i = 0; i < 3; i++) {
    let name = prompt("Enter the name of student " + (i + 1) + ":");
    students.push(name);

    let score = parseInt(prompt("Enter the score for " + name + ":"));
    scores.push(score);
}

// Display scores and percentages
console.log("Student Scores and Percentages:");
for (let i = 0; i < 3; i++) {
    let percentage = calculatePercentage(scores[i], totalMarks);
    console.log(students[i] + ": Score = " + scores[i] + ", Percentage = " + percentage.toFixed(2) + "%");
}




    // Initialize array with color names
    var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink', 'Cyan', 'Magenta', 'Brown'];

    // Get reference to the unordered list element
    var colorList = document.getElementById('colorList');

    // Loop through the colors array and create list items to display them
    colors.forEach(function(color) {
      var listItem = document.createElement('li');
      listItem.textContent = color;
      colorList.appendChild(listItem);
    });
  
10
    // Function to generate random scores for demonstration purposes
function generateRandomScores(numStudents) {
    let scores = [];
    for (let i = 0; i < numStudents; i++) {
        scores.push(Math.floor(Math.random() * 101)); // Random scores between 0 and 100
    }
    return scores;
}

// Function to sort scores in ascending order
function sortScoresAscending(scores) {
    return scores.sort((a, b) => a - b);
}

// Example usage:
const numStudents = 10;
const studentScores = generateRandomScores(numStudents);
console.log("Original scores:", studentScores);

const sortedScores = sortScoresAscending(studentScores);
console.log("Sorted scores:", sortedScores);

11 
// Initialize the array with city names
var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];

// Initialize an empty array to store selected cities
var selectedCities = [];

// Copy 3 array elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

// Print the selected cities
console.log("Selected Cities:", selectedCities);










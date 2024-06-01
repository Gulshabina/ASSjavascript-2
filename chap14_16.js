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

let students = [];
let scores = []
const totalMarks = 500;

for (let i = 0; i < 3; i++) {
    let name = prompt("Enter the name of student " + (i + 1) + ":");
    students.push(name);

    let score = parseInt(prompt("Enter the score for " + name + ":"));
    scores.push(score);
}
console.log("Student Scores and Percentages:");
for (let i = 0; i < 3; i++) {
    let percentage = calculatePercentage(scores[i], totalMarks);
    console.log(students[i] + ": Score = " + scores[i] + ", Percentage = " + percentage.toFixed(2) + "%");
}
    var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink', 'Cyan', 'Magenta', 'Brown'];

    var colorList = document.getElementById('colorList');

    colors.forEach(function(color) {
      var listItem = document.createElement('li');
      listItem.textContent = color;
      colorList.appendChild(listItem);
    });
  
10

function generateRandomScores(numStudents) {
    let scores = [];
    for (let i = 0; i < numStudents; i++) {
        scores.push(Math.floor(Math.random() * 101)); // Random scores between 0 and 100
    }
    return scores;
}
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

var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
var selectedCities = [];
selectedCities = cities.slice(0, 3);
console.log("Selected Cities:", selectedCities);










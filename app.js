1
function welcomeUser(cityName) {
    if (cityName.toLowerCase() === "karachi") {
        console.log("Welcome to the city of lights!");
    } else {
        console.log("Welcome to", cityName);
    }
}

 function main() {
     var city = prompt("Enter the name of your city: ");
     welcomeUser(city);
}

main();


2
function greetUser(gender) {
    if (gender.toLowerCase() === "male") {
        console.log("Good Morning Sir.");
    } else if (gender.toLowerCase() === "female") {
        console.log("Good Morning Ma'am.");
    } else {
        console.log("Invalid input. Please enter 'male' or 'female'.");
    }
}

function main() {
    var gender = prompt("Enter your gender (male/female): ");
    greetUser(gender);
}

main();


3
function showTrafficMessage(color) {
    switch(color.toLowerCase()) {
        case "red":
            document.write("Stop!");
            break;
        case "yellow":
            document.write("Ready to move!");
            break;
        case "green":
            document.write("Go ahead!document.write");
            break;
        default:
            document.write("Invalid color. Please enter red, yellow, or green.");
    }
}

function main() {
    var color = prompt("Enter the color of the traffic signal (red/yellow/green): ");
    showTrafficMessage(color);
}
4

let remainingFuel = parseFloat(prompt("Enter remaining fuel in litres:"));
if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("You have enough fuel in your car");
}

6

// Function to compute grade based on percentage
function computeGrade(percentage) {
    if (percentage >= 90) {
        return 'A+';
    } else if (percentage >= 80) {
        return 'A';
    } else if (percentage >= 70) {
        return 'B';
    } else if (percentage >= 60) {
        return 'C';
    } else if (percentage >= 50) {
        return 'D';
    } else {
        return 'Fail';
    }
}

// Function to compute percentage
function computePercentage(marksObtained, totalMarks) {
    return (marksObtained / totalMarks) * 100;
}

// Prompt user for marks obtained in three subjects and total marks
let marksSubject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
let marksSubject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
let marksSubject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));

// Compute total marks obtained
let totalMarksObtained = marksSubject1 + marksSubject2 + marksSubject3;

// Compute percentage
let percentage = computePercentage(totalMarksObtained, totalMarks);

// Compute grade
let grade = computeGrade(percentage);

// Display percentage and grade
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade);

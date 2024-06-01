Q5 // Store correct password in a variable
var correctPassword = "correctPassword123";

// Function to validate the password entered by the user
function validatePassword() {}
    // Ask user to enter password
    var enteredPassword = prompt("Please enter your password:");

    //  Check if user has entered a password
    if (!enteredPassword) {
        alert("Please enter your password");
    } else {
        //   Check if entered password matches the correct password
        if (enteredPassword === correctPassword) {
            alert("Correct! The password you entered matches the original password");
        } else 
            alert("Incorrect password");
        }
    


  function compareIntegers(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is larger.");
    } else if (num2 > num1) {
        console.log(num2 + " is larger.");
    } else {
        console.log("Both integers are equal.");
    }
}


var integer1 = parseInt(prompt("Enter the first integer:"));
var integer2 = parseInt(prompt("Enter the second integer:"));

compareIntegers(integer1, integer2);


//  Q6 Call the function to start the validation process
validatePassword();


var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

 
7 
    
        if (time >= 1300) {
            return (time - 1200) + "pm";
        } else if (time >= 1200) {
            return time + "pm";
        } else if (time >= 1000) {
            return time + "am";
        } else {
            return "0" + time + "am";
        }
    
        
            
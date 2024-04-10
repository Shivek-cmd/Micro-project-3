// Function to append value to the screen
function appendToScreen(value) {
  // Get the current value on the screen
  var screenValue = document.getElementById("screen").value;

  // Check if the value is an operator
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    // Check if the last character on the screen is also an operator
    var lastChar = screenValue.slice(-1);
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      // If the last character is an operator, replace it with the new operator
      document.getElementById("screen").value =
        screenValue.slice(0, -1) + value;
      return;
    }
  }

  // Check if the value is 'DEL' for delete
  if (value === "DEL") {
    // If 'DEL', remove the last character from the screen
    document.getElementById("screen").value = screenValue.slice(0, -1);
  } else if (value === ".") {
    // Check if the last character on the screen is already a decimal point
    var lastDecimalIndex = screenValue.lastIndexOf(".");
    var lastOperatorIndex = Math.max(
      screenValue.lastIndexOf("+"),
      screenValue.lastIndexOf("-"),
      screenValue.lastIndexOf("*"),
      screenValue.lastIndexOf("/")
    );
    if (lastDecimalIndex > lastOperatorIndex) {
      // If a decimal point is already present, do not append another one
      return;
    }
    // Otherwise, append the decimal point to the screen
    document.getElementById("screen").value += value;
  } else {
    document.getElementById("screen").value += value;
  }
}

// Function to clear the screen
function clearScreen() {
  // Set the screen value to empty string to clear it
  document.getElementById("screen").value = "";
}

// Function to perform calculation
function calculate() {
  // Get the last character and the current screen value
  var lastChar = document.getElementById("screen").value.slice(-1);
  var screenValue = document.getElementById("screen").value;
  // Check if the last character is an operator
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    // If the last character is an operator, display 'error'
    document.getElementById("screen").value = "error";
  } else {
    // If not an operator, evaluate the expression
    var result = eval(screenValue);
    // Check if the result is an integer
    if (Number.isInteger(result)) {
      // If the result is an integer, display it as is
      document.getElementById("screen").value = result;
    } else {
      // If the result is a decimal number, round it to 3 decimal places
      document.getElementById("screen").value = result.toFixed(3);
    }
  }
}

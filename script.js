/* -------------------------------
   Part 1: Variables & Conditionals
---------------------------------- */

// Function to check even/odd using conditionals
function checkEvenOdd() {
  let num = document.getElementById("userNumber").value;
  let result = document.getElementById("result");

  if (num === "") {
    result.textContent = "Please enter a number!";
  } else if (num % 2 === 0) {
    result.textContent = `${num} is even.`;
  } else {
    result.textContent = `${num} is odd.`;
  }
}

/* -------------------------------
   Part 2: Functions
---------------------------------- */

// Function 1: Simple greeting
function sayHello(name) {
  document.getElementById("functionOutput").textContent = `Hello, ${name}!`;
}

// Function 2: Calculate total (multiplication example)
function calculateTotal(a, b) {
  let total = a * b;
  document.getElementById("functionOutput").textContent = `Total: ${a} × ${b} = ${total}`;
}

/* -------------------------------
   Part 3: Loops
---------------------------------- */

// Example 1: Countdown using for loop
function showCountdown() {
  let output = document.getElementById("loopOutput");
  output.innerHTML = ""; // clear old results
  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    output.appendChild(li);
  }
}

// Example 2: Listing array items using forEach
function listFruits() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let output = document.getElementById("loopOutput");
  output.innerHTML = "";
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    output.appendChild(li);
  });
}

/* -------------------------------
   Part 4: DOM Manipulation
---------------------------------- */

// Example 1: Toggle dark theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Example 2: Add new item dynamically
function addNewItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Dynamic Item";
  list.appendChild(newItem);
}

// Example 3: Change heading text
function changeHeading() {
  let heading = document.getElementById("dynamicHeading");
  heading.textContent = "Heading Changed Dynamically!";
}

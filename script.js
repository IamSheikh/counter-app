const count = 0; // count variable

const counter = document.getElementById("counter"); // counter element

// function to increment 1 in counter

function incrementCounter() {
  count = count + 1;
  counter.innerText = count;
}

// function to reset counter

function resetCounter() {
  count = 0;
  counter.innerText = count;
}

// function to decreament 1 in counter

function decreamentCounter() {
  count = count - 1;
  counter.innerText = count;
}

console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
// pink
const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");
//brown
const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");
//winner 
const horseWinner = document.querySelector("#winner");
// restart button
const restartButton = document.querySelector("#restart-button");




// OnClick Functions Here
const advanceBlue = (e) => {

  blue_position += 1;
  changePosition(blueHorse, blue_position);
  return checkWinner();
  

};

function advancePink(e) {

  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  return checkWinner();
 
};

const advanceBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  return checkWinner();
 
};



// Check for a winner
const checkWinner = (position, color) => {

  if (blue_position === 5) {
    horseWinner.innerHTML = '<p>Blue is the Winner!</p>';
    disableButtons();
  } else if (pink_position === 5) {
    horseWinner.innerHTML = '<p>Pink is the Winner!</p>';
    disableButtons();
  } else if (brown_position === 5) {
    horseWinner.innerHTML = '<p>Brown is the Winner!</p>';
    disableButtons();
  }
};

// Disable all buttons after a winner is declared
const disableButtons = () => {
  blueButton.disabled = true;
  pinkButton.disabled = true;
  brownButton.disabled = true;
  restartButton.disabled = false; 
  // Enable restart button ^^
};



// Restart button
restartButton.addEventListener('click', resetGame);

function resetGame() {
  // Reset positions
  blue_position = 1;
  pink_position = 1;
  brown_position = 1;

  // Change positions of horses back to the starting position
  changePosition(blueHorse, blue_position);
  changePosition(pinkHorse, pink_position);
  changePosition(brownHorse, brown_position);

  // Clear the winner message
  horseWinner.innerHTML = '';

  // Enable the buttons
  blueButton.disabled = false;
  pinkButton.disabled = false;
  brownButton.disabled = false;
  restartButton.disabled = true; // Disable restart button until a winner is declared
}

// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);


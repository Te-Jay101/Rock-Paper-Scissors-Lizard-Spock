// Define the available choices for the game
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

// Get the result display div element
const resultDiv = document.getElementById("result");

// Function to randomly choose a computer's choice
function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play the game based on user's choice
function play(userChoice) {
  // Get the computer's choice
  const compChoice = computerChoice();

  // Determine the result of the game
  const result = determineWinner(userChoice, compChoice);

  // Display the user's and computer's choices along with the result
  resultDiv.innerHTML = `
    <p>You chose ${userChoice}.</p>
    <img src="assets/images/${userChoice}.jpeg" alt="${userChoice}" />
    <p>Computer chose ${compChoice}.</p>
    <img src="assets/images/${compChoice}.jpeg" alt="${compChoice}" />
    <p>${result}</p>
  `;

  // Apply shake animation to the resultDiv
  resultDiv.classList.add("shake");

  // Remove the shake class after the animation ends
  setTimeout(() => {
    resultDiv.classList.remove("shake");
  }, 500);
}

// Function to determine the winner based on the game rules
function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  }

  if (
    (user === "rock" && (computer === "scissors" || computer === "lizard")) ||
    (user === "paper" && (computer === "rock" || computer === "spock")) ||
    (user === "scissors" && (computer === "paper" || computer === "lizard")) ||
    (user === "lizard" && (computer === "paper" || computer === "spock")) ||
    (user === "spock" && (computer === "rock" || computer === "scissors"))
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Add click event listeners to the choice buttons
const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    play(button.id);
  });
});

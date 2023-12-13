

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();    // sets wording to lowercase

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')      // checks if user input is rock paper scissors, and returns one of those values
        { return userInput; }                   
      else { console.log('invalid input'); }                                            // and logs an error if the user typed anything else
}

function GUC_test() {                           // GUC: (g)et(U)ser(C)hoice
  console.log( getUserChoice('Paper') );        // Should print 'paper'
  console.log( getUserChoice('fork') );         // should write 'invalid input'
} 
//GUC_test();

function getComputerChoice() {
    const Cnum = Math.floor(Math.random() * 3);

    switch (Cnum) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
}

function GCC_test() {
  console.log( getComputerChoice() );
  console.log( getComputerChoice() );
  console.log( getComputerChoice() );
}
//GCC_test();     // GCC: (G)et(C)omputer(C)hoice


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) 
      { return 'The game is a tie!'; }

    if ( userChoice === 'paper') {
        if (computerChoice === 'scissors')
          { return 'The computer won!'; }
        else { return 'You won!'; }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock')
          { return 'The computer won!'; }
        else { return 'You won!'; }
    }
}

const playGame = () => {
  const userChoice =        getUserChoice('scissors');
  const computerChoice =    getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The infernal machine counters with: ' + computerChoice);
  console.log( determineWinner(userChoice, computerChoice) );
};

playGame();
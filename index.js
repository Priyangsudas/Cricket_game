function generateComputerChoice() {
    //This will generate random number between 0 and 3
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
      return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
      return 'Ball';
    } else {
      return 'Stump'
    }
  }

  function getResult(userMove, computerMove) {
    if (userMove === 'Bat') {
      if (computerMove === 'Ball') {
        return 'User won.';
      } else if (computerMove === 'Bat') {
        return `It's a tie`;
      } else if (computerMove === 'Stump') {
        return 'Computer has won';
      }
    } else if (userMove === 'Ball') {
      if (computerMove === 'Ball') {
        return `It's a tie`;
      } else if (computerMove === 'Bat') {
        return 'Computer has won';
      } else if (computerMove === 'Stump') {
        return 'User won.';
      }
    } else {
      if (computerMove === 'Ball') {
        return 'Computer has won';
      } else if (computerMove === 'Bat') {
        return 'User won.';
      } else if (computerMove === 'Stump') {
        return `It's a tie`;
      }
    }
  }

  function showResult(userMove, computerMove, result) {
    alert(`You have chosen ${userMove}. Computer choice is ${computerMove} and ${result}`);
  }
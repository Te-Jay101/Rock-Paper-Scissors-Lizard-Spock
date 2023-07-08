const startBattle = () => {
    let humanPlayerScore = 0;
    let evilComputerScore = 0;
    let moves = 0;

    const beginFight = () => {
        const rockAction = document.querySelector('.rock');
        const paperAction = document.querySelector('.paper');
        const scissorsAction = document.querySelector('.scissors');
        const lizardAction = document.querySelector('.lizard');
        const spockAction = document.querySelector('.spock');
        const playerOptions = [rockAction,paperAction,scissorsAction,lizardAction,spockAction];
        const computerChoices = ['rock','paper','scissors','lizard','spock'];

        playerOptions.forEach(Option => {
            Option.addEventListener('click', function(){
                const movesleft = document.querySelector('.movesleft');
                moves++;
                movesleft.innerText = `Rounds to go: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random()*5);
                const computerChoice = computerChoices [choiceNumber];

                victor(this.innerText,computerChoice);

                if (moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            });
        });
    };

    const victor = (player,computer) => {
        const result = document.querySelector('.result');
        const humanPlayerScoreBoard = document.querySelector('.playerCount');
        const evilComputerScoreBoard = document.querySelector('.computerCount');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Equally Matched!';
        }
        else if (player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Evil Computer Wins!';
                evilComputerScore++;
                evilComputerScoreBoard.textContent = evilComputerScore;
            }else {
                result.textContent = 'Congratulations, You Win!';
                humanPlayerScore++;
                humanPlayerScoreBoard.textContent = humanPlayerScore;
            };
        }
        else if (player == 'scissors'){
            if(computer == 'rock'){
                    result.textContent = 'Evil Computer Wins!';
                    evilComputerScore++;
                    evilComputerScoreBoard.textContent = evilComputerScore;
            }else {
                    result.textContent = 'Congratulations, You Win!';
                    humanPlayerScore++;
                    humanPlayerScoreBoard.textContent = humanPlayerScore;
                };
            }
        else if (player == 'paper'){
            if(computer == 'scissors'){
                    result.textContent = 'Evil Computer Wins!';
                    evilComputerScore++;
                    evilComputerScoreBoard.textContent = evilComputerScore;
                } else {
                    result.textContent = 'Congratulations, You Win!';
                    humanPlayerScore++;
                    humanPlayerScoreBoard.textContent = humanPlayerScore;
                    };
                }
        else if (player == 'lizard'){
                 if(computer == 'rock'){
                    result.textContent = 'Evil Computer Wins!';
                    evilComputerScore++;
                    evilComputerScoreBoard.textContent = evilComputerScore;
                } else {
                    result.textContent = 'Congratulations, You Win!';
                    humanPlayerScore++;
                    humanPlayerScoreBoard.textContent = humanPlayerScore;
                    };  
                }
        else if (player == 'spock'){
                if(computer == 'lizard'){
                    result.textContent = 'Evil Computer Wins!';
                    evilComputerScore++;
                    evilComputerScoreBoard.textContent = evilComputerScore;
                }else {
                    result.textContent = 'Congratulations, You Win!';
                    humanPlayerScore++;
                    humanPlayerScoreBoard.textContent = humanPlayerScore;
                    };
                }
        else if (player == 'scissors'){
                    if(computer == 'spock'){
                        result.textContent = 'Evil Computer Wins!';
                        evilComputerScore++;
                        evilComputerScoreBoard.textContent = evilComputerScore;
                    }else {
                        result.textContent = 'Congratulations, You Win!';
                        humanPlayerScore++;
                        humanPlayerScoreBoard.textContent = humanPlayerScore;
                        };
                    }
        else if (player == 'lizard'){
                    if(computer == 'scissors'){
                        result.textContent = 'Evil Computer Wins!';
                        evilComputerScore++;
                        evilComputerScoreBoard.textContent = evilComputerScore;
                    }else {
                        result.textContent = 'Congratulations, You Win!';
                        humanPlayerScore++;
                        humanPlayerScoreBoard.textContent = humanPlayerScore;
                        };
                    }
        else if (player == 'paper'){
                    if(computer == 'lizard'){
                        result.textContent = 'Evil Computer Wins!';
                        evilComputerScore++;
                        evilComputerScoreBoard.textContent = evilComputerScore;
                    }else {
                        result.textContent = 'Congratulations, You Win!';
                        humanPlayerScore++;
                        humanPlayerScoreBoard.textContent = humanPlayerScore;
                        };
                    }
        else if (player == 'spock'){
                    if(computer == 'paper'){
                        result.textContent = 'Evil Computer Wins!';
                        evilComputerScore++;
                        evilComputerScoreBoard.textContent = evilComputerScore;
                    }else {
                        result.textContent = 'Congratulations, You Win!';
                        humanPlayerScore++;
                        humanPlayerScoreBoard.textContent = humanPlayerScore;
                        };
                    }
        else if (player == 'rock'){
                    if(computer == 'spock'){
                        result.textContent = 'Evil Computer Wins!';
                        evilComputerScore++;
                        evilComputerScoreBoard.textContent = evilComputerScore;
                    }else {
                        result.textContent = 'Congratulations, You Win!';
                        humanPlayerScore++;
                        humanPlayerScoreBoard.textContent = humanPlayerScore;
                        };  
                    }          
        }


    };


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
                const movesLeft = document.querySelector('.movesLeft');
                moves++;
                movesLeft.innerText = `Rounds to go: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random()*5);
                const computerChoice = computerChoices [choiceNumber];

                victor(this.innerText,computerChoice);

                if (moves == 10){
                    gameOver(playerOptions, movesLeft);
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

        const gameOver = (playerOptions, movesLeft) => {
            const chooseMove = document.querySelector('.move');
            const result = document.querySelector('.result');
            const reloadBtn = document.querySelector('.reload');

            playerOptions.forEach(option => {
                option.style.display = 'none';
            });

            chooseMove.innerText = 'Game Over!';
            movesLeft.style.display = 'none';

            if (humanPlayerScore > evilComputerScore){
                result.style.fontSize = '2rem';
                result.innerText = 'You Won This Round!';
                result.style.color = '#006400';
            }
            else if (humanPlayerScore < evilComputerScore){
                result.style.fontSize = '2rem';
                result.innerText = 'You Lost This Round!';
                result.style.color = '#006400';
            }
            else{
                result.style.fontSize = '2rem';
                result.innerText = 'Equally Matched!';
                result.style.color = '#006400';
            }
            reloadBtn.innertext = 'Restart';
            reloadBtn.style.display ='flex';
            reloadBtn.addEventListener('click', () => {
                window.location.reload();
            });
        };

        beginFight();

    };

    startBattle();


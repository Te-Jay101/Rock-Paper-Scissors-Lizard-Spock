const startBattle = () {
    let humanPlayerScore = 0;
    let evilComputerScore = 0;
    let moves = 0;

    const beginFight = () {
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
            })
        })
    }

}
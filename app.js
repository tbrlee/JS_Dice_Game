/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores = [0,0], //Initial zero point score for two player sides
    roundScore = 0, //Sum of total score accumulated
    activePlayer = 0; //Denote which is the activer player's turn
    

 
 document.querySelector('.dice').style.display = 'none' //Change CSS style display to none to hide the dice at the beginning  of game
 
 //Cick on button to roll dice
 document.querySelector('.btn-roll').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1; //Generate random dice number from one to six

    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display ='block';
    diceDOM.src = 'dice-' + dice  + '.png';

    //Determine if the player continues to roll or if the dice rolls to one or not
    if (dice !==  1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //Toggling which is the active player 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

    }
 });


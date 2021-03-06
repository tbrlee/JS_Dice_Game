/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore, gamePlaying;
init();
    
 //Cick on button to roll dice
 document.querySelector('.btn-roll').addEventListener('click', function() {
     if (gamePlaying) {
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
        nextPlayer();
        }
     }
 });

 document.querySelector('.btn-hold').addEventListener('click', function() {
     if (gamePlaying) {
             //Add currrent score to the player as record after hold button is pressed
     scores[activePlayer] +=roundScore;
     
     //Update Hold scorepoint UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if the player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
     }
 });

 //method for determining which player and toggling their turns
 function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Toggling which is the active player 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Clear the dice image after the  reset for another player 
    document.querySelector('.dice').style.display = 'none';   

 }

 document.querySelector('.btn-new').addEventListener('click', init);

function init() {
     scores = [0,0]; //Initial zero point score for two player sides
     roundScore = 0; //Sum of total score accumulated
     activePlayer = 0; //Denote which is the activer player's turn
     gamePlaying = true;

    document.querySelector('.dice').style.display = 'none' //Change CSS style display to none to hide the dice at the beginning  of game

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores, roundScore,activePlayer, gamePlaying;
init();
let lastDice;

 //Cick on button to roll dice
 document.querySelector('.btn-roll').addEventListener('click', function() {
     if (gamePlaying) {
        let dice1 = Math.floor(Math.random() * 6) + 1; //Generate random dice number from one to six
        let dice2 = Math.floor(Math.random() * 6) + 1; //Use second dice to generate random number 

        /* let diceDOM = document.querySelector('.dice');
        diceDOM.style.display ='block'; */
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1  + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2  + '.png';
        //diceDOM.src = 'dice-' + dice  + '.png';
    
        
        
        /*if (dice === 6 && lastDice === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }
        //Determine if the player continues to roll or if the dice rolls to one or not
        else if (dice !==  1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
        nextPlayer();
        }
        lastDice = dice; */
        if (dice1 !==  1 && dice2 !==  1) {
            //Add score
            roundScore += dice1+ dice2;
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

    //Allow player to enter mminimum number of score to win the game 
    let input = document.querySelector('.final-score').value;
    let winningScore;

    //Make sure if the input has somekind of number especially integer
    if (input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }

    //Check if the player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
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
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';     

 }

 document.querySelector('.btn-new').addEventListener('click', init);

function init() {
     scores = [0,0]; //Initial zero point score for two player sides
     roundScore = 0; //Sum of total score accumulated
     activePlayer = 0; //Denote which is the activer player's turn
     gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none'; //Change CSS style display to none to hide the dice at the beginning  of game
    document.getElementById('dice-2').style.display = 'none';

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
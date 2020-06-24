/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScore , activePlayer ,gamePlaying , personName0 ,personName1 ;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    document.querySelector('.text').style.display='none';
    
    if(gamePlaying) {
        
        //1-random number
    var dice = Math.floor(Math.random()*6)+1 ;

    //2-display dice 
    
    var diceDom = document.querySelector('.dice');
    
    diceDom.style.display='block';
    
    //3- set correct random number to dice shown to player
    
     diceDom.src = 'dice-' + dice + '.png' ; 
    
    //4- update the round score IF dice not equal 1
    
    if (dice !== 1){
        
        //add score
        
        roundScore += dice ;
        document.querySelector('#current-' + activePlayer).textContent=roundScore;
        
            }else{
            
    //move to next player
                
                nextPlayer () ;
        }
    }
        
} );

document.querySelector('.btn-hold').addEventListener('click' , function(){
    
    if(gamePlaying) {
    //add roundscore to activeplayer score
    
    scores[activePlayer] += roundScore ;
    
    //update UI with score 
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        var input = document.querySelector('.winning-score').value ;
        var winningScore ;
        
        //undefind , 0 , null or "" >>> false
        //anything else >>> true
        
        if(input){
            
           winningScore = input ;
            
          }
        
        else{winningScore = 100 ;}
        
        
        
    //check if score reach to 100 
    
    if (scores[activePlayer] >= winningScore){
        
        document.querySelector ('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector ('.dice').style.display='none';
        document.querySelector ('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector ('.player-' + activePlayer+ '-panel').classList.remove('active');
        gamePlaying = false ;
          
    }else{
        
        //move to next player
                
   nextPlayer() ;
    }
    }
});

function nextPlayer() {
    
    //1-next player
        
        activePlayer ===0 ? activePlayer = 1 : activePlayer = 0 ;
        
    //2-reset round score to = 0
        roundScore=0;
        
    //3-show result to user interface
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

    //4-change active player in user interface to another player 
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
    
}

document.querySelector('.btn-new').addEventListener('click' , init ); 

document.querySelector('.btn-new-2').addEventListener('click' , function(){
    
   alert("GAME RULE\n\nThe game has 2 players, playing in rounds.\n\n-In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score,\n\n-BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn\n\n-The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn\n\n-The first player to reach 100 points on GLOBAL score wins the game");
    
})


function init(){
    
scores = [0,0] ;
roundScore =0;
activePlayer =0;
gamePlaying=true;
winningScore=0;

    
personName0 = prompt("Please enter First Player Name" );
personName1 = prompt("Please enter Second Player Name");
    
    if (personName0){
        document.getElementById('name-0').textContent=personName0 ;
        
    }else {
        document.getElementById('name-0').textContent='Player 1' ;
        
    }
    
if (personName1){
        document.getElementById('name-1').textContent=personName1 ;
        
    }else {
        document.getElementById('name-1').textContent='Player 2' ;
        
    }    
    
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector ('.player-0-panel').classList.remove('winner');
document.querySelector ('.player-1-panel').classList.remove('winner');
document.querySelector ('.player-0-panel').classList.remove('active');
document.querySelector ('.player-1-panel').classList.remove('active');
document.querySelector ('.player-0-panel').classList.add('active');
document.querySelector('.text').style.display='block';

}


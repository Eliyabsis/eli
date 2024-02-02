let firstCard = randomNumber();
let secondCard = randomNumber();
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard ; 

let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("cardx-el");   
let sumEl = document.getElementById("sum-el");

function randomNumber(){
    return Math.floor(Math.random() * 12) + 1;
}

function StartGame(){ 
    cardEl.textContent = "Card: " ; 
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.innerText = "Sum: " + sum;
           
    if (sum < 21){
        message = " Do you have anothercard b/c you are in the game!";
    }else if (sum === 21){
        message = "you've got a blackJack!";
        hasBlackjack = true;
    }else {                                     
        message = "you are out of the game!";
         isAlive = false
}
     messageEl.innerText = message;
}
function NewGame() {
    let card = randomNumber();
    sum += card;
    cards.push(card);
    
    StartGame()
}
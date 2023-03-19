document.querySelector('.draw-card-btn').style.display = 'none'; 
document.querySelector('.user-cards').style.display = 'none';
document.querySelector('.dealer-cards').style.display = 'none';
document.querySelector('.stay-btn').style.display = 'none';

const minCard = 2;
const maxCard = 11;
//let availableCards = [[1,2,3,4,5,6,7,8,9,10,10,10,10,11],[1,2,3,4,5,6,7,8,9,10,10,10,10,11],[1,2,3,4,5,6,7,8,9,10,10,10,10,11],[1,2,3,4,5,6,7,8,9,10,10,10,10,11]];
let userCards =[];
let dealerCards=[];
let userTotal = 0;
let dealerTotal = 0;

function startGame(){
    for (let i = 0; i < 2; i++) {
        userCards.push(getRandomCard());
        dealerCards.push(getRandomCard());
    }
    userTotal = sumOfCards(userCards);
    dealerTotal = sumOfCards(dealerCards);

    console.log("User cards: " + userCards + " and the total of cards is: " + userTotal);
    console.log("Dealer drew: " + dealerCards + " and the total of cards is: " + dealerTotal );

    document.querySelector('.draw-card-btn').style.display = 'block';
    document.querySelector('.user-cards').style.display = 'block';
    document.querySelector('.dealer-cards').style.display = 'block';
    document.querySelector('.stay-btn').style.display = 'block';

    document.querySelector('.user-cards').textContent = "User cards: " + userCards + " and the total of cards is: " + userTotal;
    document.querySelector('.dealer-cards').textContent = "Dealer drew: " + dealerCards[0] + " and ***";
}

function getRandomCard(){
    return Math.floor((Math.random() * (maxCard - minCard) )+ minCard);
}

function sumOfCards(cards){
    let sum = 0;
    for (let i = 0; i < cards.length; i++) {
        sum = sum + cards[i];
      }
    return sum;
}

function drawNewCard(){
    userCards.push(getRandomCard());
    //console.log(userCards);
    userTotal = sumOfCards(userCards);
    //console.log(userTotal);
    console.log("User cards: " + userCards + " and the total of cards is: " + userTotal);
    document.querySelector('.user-cards').textContent = "User cards: " + userCards + " and the total of cards is: " + userTotal;
    //return userCards;
    decideForDealer();
}

function decideForDealer(){
    if (dealerTotal<17){
        dealerCards.push(getRandomCard());
        dealerTotal = sumOfCards(dealerCards);
    }
    console.log("Dealer Cards: " + dealerCards + " and Dealer Total: " + dealerTotal);
    document.querySelector('.dealer-cards').textContent = "Dealer Cards: " + dealerCards + " and Dealer Total: " + dealerTotal;
    whoIsTheWinner();
}

function whoIsTheWinner(){
    
    if(userTotal>21 && dealerTotal>21){
        console.log("Both loose!!");
    }else if(userTotal<22 && dealerTotal>21){
        console.log("User wins!!");
    }else if(userTotal>21 && dealerTotal<21){
        console.log("Dealer wins!!")
    }else if (userTotal<dealerTotal){
        console.log("Dealer wins!!")
    }else{
        console.log("User Wins!!")
    }
    
   
}

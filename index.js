// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
  for (let i=0; i< gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

function writeCards(namesArray, event) {
  let cardsArray = []
  for (let i= 0; i < namesArray.length; i++ ){
    cardsArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return cardsArray;
}

function countDown (number) {
  while (number >= 0){
    console.log(number--);
  }
}
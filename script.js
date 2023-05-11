class Ships {
  constructor{
    status= water;


  }
}

// array of corresponding values
const coordinates = ['']

// global variable to track for the bot
savedCoord = 0;


function getCoords() {

}

// initializes the ships in default coordinates before player changes them
// too complex 
function placeShips() {
  getshipatcoord(0).status = alive;
  getshipatcoord(0).length = 5;
  getshipatcoord(0).coordinates = [0,1,2,3,4];
  getshipatcoord(1).status = alive;
  getshipatcoord(1).length = 5;
  getshipatcoord(1).coordinates = [0,1,2,3,4];
}

// button has been pressed
function gameStart(){

}

function moveGenerator {
  // if the AI discovered a new ship last round
  if(botJustHit){
    // if there is not a right side to this spot
    if(savedCoord % 7 == 0){
      // attack the coordinate to the left
      botAttack(savedCoord - 1);
    }
    else{
      // attack the coordinate to the right
      botAttack(savedCoord + 1);
    }
    // if it hit
    botLineAttack = true;

  }
  // if the AI correctly guessed the direction that the ship is placed
  else if(botLineAttack){
    // if there is not a right side to this spot
    if(savedCoord % 7 == 0){
      // attack the coordinate to the left
      botAttack(savedCoord - 1);
    }
    else{
      // attack the coordinate to the right
      botAttack(savedCoord + 1);
    }
  }
  // if the AI found a ship but guessed wrong where second spot is
  else if(botStriking){

  }
  else {
    // get a number between 1 to 49
    let coordChosen = Math.floor(Math.random() * 50) + 1;
    // attack that coordinate
    botAttack(coordChosen);
    // if its a hit
    botJustHit = true;
    savedCoord = coordChosen;
    // if not a hit
  }

}

function gameOver() {
  // if all ships have been hit on either side
  if(numPlayerShipsHit == totalNumShips){

  }
  // declare winner and show prompt saying who won
  else if(numBotShipsHit == totalNumShips){

  }
  else{
    continue;
  }
}

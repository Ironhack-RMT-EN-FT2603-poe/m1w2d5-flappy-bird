//* GLOBAL DOM ELEMENTS

// screens
const startScreenNode = document.querySelector("#start-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

// buttons
const startBtnNode = document.querySelector("#start-btn")

// game box
const gameBoxNode = document.querySelector("#game-box")


//* GLOBAL GAME VARIABLES
let birdObj = null // at plash screen, the game has not started, so the bird should not be created yet.
// let tubeObj = null
let tubesArray = []

let gameIntervalId = null;
let tubeSpawnIntervalId = null;


//* GLOBAL GAME FUNCTIONS
function gameStart() {

  // changing the states
  startScreenNode.style.display = "none"
  gameScreenNode.style.display = "flex"

  // starting the main game interval
  gameIntervalId = setInterval(gameLoop, Math.floor(1000/60))

  // Adding the initial elements of the game
  birdObj = new Bird()
  console.log(birdObj)

  // tubeObj = new Tube()
  // console.log(tubeObj)


  // initialize the other intervals of the game
  tubeSpawnIntervalId = setInterval(spawnTube, 2000)

}

function gameLoop() {
  // this is happening 60 times per second. We should add all automatic movements, collisions and animations here.
  birdObj.gravity()
  // tubeObj.automaticMovement()
  tubesArray.forEach((tubeObj) => {
    tubeObj.automaticMovement()
  })
  tubeDespawnCheck()
  birdTubeCollitionCheck()
}

function spawnTube() {

  // random number between -200 and 0
  const randomPositionY = Math.floor( Math.random() * -200 )

  let newTubeUp = new Tube("up", randomPositionY)
  tubesArray.push(newTubeUp)

  let newTubeDown = new Tube("down", randomPositionY + 340)
  tubesArray.push(newTubeDown)

  console.log(tubesArray)
}

function tubeDespawnCheck() {
  tubesArray.forEach((tubeObj, index) => {
    if (tubeObj.x <= 0) {
      console.log("one tube found exiting the screen")

      // When we want to remove an element from the game we need to remove it from both environments:
      //1. DOM environment
      tubeObj.node.remove()
      //2 JS environment
      tubesArray.splice(index, 1)

    }
  })
}

function birdTubeCollitionCheck() {

  // birdObj
  // tubeObj
  tubesArray.forEach((tubeObj) => {
    let isColliding = collisionCheck(birdObj, tubeObj)
    if (isColliding === true) {
      gameOver()
    }
  })

}

function collisionCheck(elem1, elem2) {
  return (
    elem1.x < elem2.x + elem2.width &&
    elem1.x + elem1.width > elem2.x &&
    elem1.y < elem2.y + elem2.height &&
    elem1.y + elem1.height > elem2.y
  );
}

function gameOver() {

  //1. stop all intervals
  clearInterval(gameIntervalId)
  clearInterval(tubeSpawnIntervalId)

  //2. change states
  gameScreenNode.style.display = "none"
  gameOverScreenNode.style.display = "flex"

  //3. restart all game variables and clear the DOM
  //! this is important to be able to restart the game
}


//* EVENT LISTENERS
startBtnNode.addEventListener("click", gameStart)
gameBoxNode.addEventListener("click", () => {
  birdObj.jump()
})




// Planning

/*
- when clicking the start button with the addEventListener ✅
  - change the screens ✅
  - starting the interval  ✅
  - start with a bird ✅
- creating the background ✅
- creating the bird ✅
  - create the class (x, y, width, height, jumpSpeed, gravitySpeed) ✅
  - automatic gravity effect ✅
  - jump when the user triggers something (click) ✅
- creating the tubes ✅
  - create the class (x, y, width, height, speed) ✅
  - tubes will move automatically ✅

- collision between the bird and the tubes ✅
- spawn tubes as the game progresses ✅
  - random y ✅
  - two at a time with differente images and y ✅
- despawn the tubes once they exit the screen ✅


BONUS
- Score
- changing the speed
- random trigger
- flap animations
- rotation when jumping or moving down
*/



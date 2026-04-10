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


//* GLOBAL GAME FUNCTIONS
function gameStart() {

  // changing the states
  startScreenNode.style.display = "none"
  gameScreenNode.style.display = "flex"

  // starting the main game interval
  setInterval(gameLoop, Math.floor(1000/60))

  // Adding the initial elements of the game
  birdObj = new Bird()
  console.log(birdObj)

  // tubeObj = new Tube()
  // console.log(tubeObj)


  // initialize the other intervals of the game
  setInterval(spawnTube, 2000)

}

function gameLoop() {
  // this is happening 60 times per second. We should add all automatic movements, collisions and animations here.
  birdObj.gravity()
  // tubeObj.automaticMovement()
  tubesArray.forEach((tubeObj) => {
    tubeObj.automaticMovement()
  })
}

function spawnTube() {
  let newTube = new Tube()
  tubesArray.push(newTube)
  console.log(tubesArray)
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

- collision between the bird and the tubes
- spawn tubes as the game progresses ✅
  - random y
  - two at a time with differente images and y
- despawn the tubes once they exit the screen


BONUS
- Score
- changing the speed
- random trigger
- flap animations
- rotation when jumping or moving down
*/



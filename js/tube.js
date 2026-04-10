class Tube {

  constructor() {
    this.node = document.createElement("img")
    this.node.src = "./images/obstacle_top.png"
    gameBoxNode.append(this.node) // as soon as the object is created, add the node to the game screen

    this.x = 550
    this.y = 0
    this.width = 50
    this.height = 250

    // initial adjustments of styles
    this.node.style.width = `${this.width}px`
    this.node.style.height = `${this.height}px`
    this.node.style.position = "absolute"
    this.node.style.top = `${this.y}px`
    this.node.style.left = `${this.x}px`

    this.speed = 2
  }

  automaticMovement() {
    this.x -= this.speed;
    this.node.style.left = `${this.x}px`
  }

}
class Tube {

  constructor(type, yPosition) {

    this.type = type

    this.node = document.createElement("img")
    if (this.type === "up") {
      this.node.src = "./images/obstacle_top.png"
    } else if (this.type === "down") {
      this.node.src = "./images/obstacle_bottom.png"
    }
    gameBoxNode.append(this.node) // as soon as the object is created, add the node to the game screen

    this.x = 550
    this.y = yPosition
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
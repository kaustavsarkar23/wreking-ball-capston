class Ball {
  //constructing the ball class 
  constructor(x, y, width, height, angle) {
    var options = { 
      //giving density and friction air
      density: 1, 
      frictionAir: 0.005};

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
// displaying the class ball and giving push pop functions
  display() {
    //setting the angle
    var angle = this.body.angle;
    //entering the push pop function
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}

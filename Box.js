class Box {
  //constructing the box class
  constructor(x, y, width, height) {
    var options = {
      //adding the restitution friction and density 
        'restitution':0.8,
        'friction':1.0,
        'density':0.04,
    }
    //giving the shape of the box class
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  //displaying the box class with all functions
  display(){
    //setting the position for box
    var pos =this.body.position;
    //setting angle for box class 
    var angle = this.body.angle;
    //adding the push and pop fuction 
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    //giving the strokeWeight and stroke color 
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
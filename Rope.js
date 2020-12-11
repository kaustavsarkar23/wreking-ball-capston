class Rope {
  //constructing the rope class and giving it functions 
  constructor(bodyA, pointB) {
    var options = {
      //adding the body and giving stiffness and length to it 
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 250,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  //attaching the rope to a array function
  attach(body) {
    this.rope.bodyA = body;
  }
//adding a different function known as fly
  fly() {
    //setting the the rope in the fly function as null
    this.rope.bodyA = null;
  }
//displayng the rope with various functions
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      //adding the push and pop function 
      push();
// giving the stroke and the stroke weight 
      stroke(48, 22, 8);
      strokeWeight(3);
//adding a fuction line in rope class
      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
}

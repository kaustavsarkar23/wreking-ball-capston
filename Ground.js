class Ground {
  //constructing the ground class with different functions
    constructor(x,y,width,height) {
      var options = {
        //setting the static as true
          isStatic: true
      }
      //setting the shape of the ground as rectangle
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    //displaying the ground with more functions
    display(){
      //adding and setting the position of the ground
      var pos =this.body.position;
      rectMode(CENTER);
      //giving the ground a color as brown
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
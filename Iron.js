class Iron {
    constructor(x, y, width) {
      var options = {
        'density': 30,
        'friction': 3,
        'restitution': 0.8
      };
      this.iron = Bodies.rectangle(x, y, 50, 50, options);
      this.ironWidth = width;
      World.add(world, this.iron);
    };
    display() {
      var Pos = this.iron.position;
      var Angle = this.iron.angle;
  
      push();
      translate(Pos.x, Pos.y);
      rotate(Angle);
      strokeWeight(3);
      stroke('black');
      fill('maroon');
      rectMode(CENTER);
      rect(0, 0, this.ironWidth, this.ironWidth);
      pop();
    };
  };
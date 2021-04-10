class Stone {
    constructor(x, y, width) {
      var options = {
        'density': 12,
        'friction': 0.9,
        'restitution': 0.8
      };
      this.stone = Bodies.rectangle(x, y, 50, 50, options);
      this.stoneWidth = width;
      World.add(world, this.stone);
    };
    display() {
      var Pos = this.stone.position;
      var Angle = this.stone.angle;
  
      push();
      translate(Pos.x, Pos.y);
      rotate(Angle);
      strokeWeight(3);
      stroke('black');
      fill('grey');
      rectMode(CENTER);
      rect(0, 0, this.stoneWidth, this.stoneWidth);
      pop();
    };
  };
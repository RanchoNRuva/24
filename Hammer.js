class Hammer {
  constructor(x, y) {
    var options = {
      'density': 4,
      'friction': 1.0,
      'restitution': 0.5
    };
    this.hammer = Bodies.rectangle(x, y, 50, 50, options);
    this.hammerWidth = 150;
    this.hammerHeight = 40;
    World.add(world, this.hammer);
  };
  display() {
    var pos = this.hammer.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var Angle = this.hammer.angle;
    push();
    translate(pos.x, pos.y);
    rotate(Angle);
    strokeWeight(3);
    stroke('white');
    fill('orange');
    rectMode(CENTER);
    rect(0, 0, this.hammerWidth, this.hammerHeight);
    pop();
  };
};
var hammerAngle;
var hammerPosX;
var hammerPosY;
class HammerHead {
    constructor(x, y) {
      var options = {
        'density': 4,
        'friction': 1.0,
        'restitution': 0.5
      };
      this.HHead = Bodies.rectangle(x, y, 50, 50, options);
      this.HHeadWidth = 150;
      this.HHeadHeight = 40;
    };
    display() {
      var posX = hammerPosX;
      var posY = hammerPosY - 75;
      var angle = hammerAngle - 21;
  
      push();
      translate(posX, posY);
      rotate(angle);
      strokeWeight(3);
      stroke('white');
      fill('orange');
      rectMode(CENTER);
      rect(0, 0, this.HHeadWidth, this.HHeadHeight);
      pop();
    };
  };
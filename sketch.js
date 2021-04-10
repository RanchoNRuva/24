const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600, height, 1200, 20);
    hammer = new Hammer(10, 100);
    stone = [];
    rubber = [];
    iron = [];
    for (var i = 0; i < 9; i++) {
        rubber[i] = new Rubber(300, 500, i*3);
    }
    for (var i = 0; i < 9; i++) {
        stone[i] = new Stone(300, 500, i*10);
    }
    for (var i = 0; i < 9; i++) {
        iron[i] = new Iron(300, 500, i*15);
    }



}

function draw() {
    background("lightBlue");
    Engine.update(engine);
    plane.display();
    for (var i = 0; i < 9; i++) {
        rubber[i].display();
    }
    hammer.display();
    for (var i = 0; i < 9; i++) {
        stone[i].display();
    }
    for (var i = 0; i < 9; i++) {
        iron[i].display();
    }
}
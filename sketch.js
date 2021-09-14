//canonball
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canonball;
var canvas, angle, tower, ground, cannon, towerImage;
var engine, world, background;

function preload() {
  background = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png")
}

function setup() {
  createCanvas(1000,700);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15;

  var options = {
    isStatic:true
  }

  ground = Bodies.rectangle(0, width, -1, width * 2, 1, options);
  World.add(world,ground);
  tower = Bodies.rectangle(100,450,160,310,options);
  World.add(world,tower);

  cannon = new Cannon(100,270,100,100);
  canonball = new cannonBall(cannon.x, cannon.y);

  rectMode(CENTER);
  ellipseMode(RADIUS);
 }

function draw() {
  image(background, 0, 0, width, height);

  rect(ground.position.x,ground.position.y,width * 2,1);

  cannon.display();
  canonball.display();

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 300);
  pop();

  Engine.update(engine);
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    canonball.shoot();
  }
}
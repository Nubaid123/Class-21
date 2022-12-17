const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground1,ground2,ground3,ground4;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  ground1= new Ground (200,390,400,20);
  ground2= new Ground (390,200,20,400);
  ground3= new Ground (10,200,20,400);
  ground4= new Ground (200,10,400,20);
  
}

function draw() 
{
  background(51);
  ground1.show();
  ground2.show();
  ground3.show();
  ground4.show();
  Engine.update(engine);
}


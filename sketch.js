const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box,rubber,ball;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    plane = new Plane (600,height,1200,20)
    hammer = new Hammer (10,100);
    box = new Box (200,200,200,200)
  
    rubber = new Rubber (200,200,200,200)
    ball = new Ball (200,200,200,200)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box.display()
    rubber.display()
    ball.display()
    
    
 
}
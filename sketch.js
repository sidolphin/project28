const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, sling;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    platform2 = new Ground(925, 200, 200, 10);
    bird = new Bird(200,50);
    sling = new slingShot(bird.body,{x:200,y:50});
    pig1 = new Pig(900,399); 
    pig2 = new Pig(925,399); 
    pig3 = new Pig(950,399);
     pig4 = new Pig(912.5,374);
      pig5 = new Pig(937.5,374);
       pig6 = new Pig(925,349); 
       pig7 = new Pig(900,199);
        pig8 = new Pig(925,199); 
        pig9 = new Pig(950,199); 
        pig10 = new Pig(912.5,174);
         pig11 = new Pig(937.5,174);
          pig12 = new Pig(925,149);
          



   
}


function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
  ground.display(); 
pig1.display();
pig2.display();
pig3.display();
pig4.display();
pig5.display();
pig6.display();
pig7.display();
pig8.display();
pig9.display();
pig10.display();
pig11.display();
pig12.display();

    bird.display();
    platform.display();
    platform2.display();
    //log6.display();
    sling.display();    
}
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
sling.fly();

}
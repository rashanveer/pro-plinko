const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var divisons = [];
var plinkos = [];
var divisonsHeight = 300
var divisons
function setup() {
  createCanvas(560,700);
  
	engine = Engine.create();
	world = engine.world;

ground1  =new Ground(400,700,800,10)

for(var k = 0;k<=width;k=k=80){
divisons.push(new Divison(k,height-300/2,10,300))
}
/*if(frameCount%80 ===0){
  particle.push(new particle(random(width/2-10,width/2+10),10,10))
  
  
  }*/

Engine.run(engine);

}

function draw() {
  background("black"); 
  ground1.display();


  drawSprites();
}








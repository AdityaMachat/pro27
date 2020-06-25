
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobDiameter=40;

function setup() {
	createCanvas(2000, 800);
	engine = Engine.create();
	world = engine.world;
	roof =  new Roof(960,200,300,20); 
	bob1= new Bob(920,600,40);
	bob2= new Bob(940,600,40);
	bob3= new Bob(960,600,40);
	bob4= new Bob(980,600,40);
	bob5= new Bob(1040,600,40);
	rope1= new Rope(bob1.body,roof.body,-80,0);
	rope2= new Rope(bob2.body,roof.body,-40,0);
	rope3= new Rope(bob3.body,roof.body,0,0);
	rope4= new Rope(bob4.body,roof.body,40,0);
	rope5= new Rope(bob5.body,roof.body,80,0);
	Engine.run(engine); 

}
  

function draw() {
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-5});
	}
}





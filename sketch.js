
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperCuts;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paperCuts=new Paper(100,650,20,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  paperCuts.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===("up arrow")){
		Matter.Body.applyForce(paperCuts.body,paperCuts.body.position,{x:85,y:-85});
	}
}



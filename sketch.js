var ground,paper,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(1400, 700);
    
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	

	ground=new Ground(700,700,1400,30);
  paper=new Paper(50,580,70,50);
  box2=new Ground(1130,590,20,160);
	box3=new Ground(1270,590,20,160);
  box1=new Box(1200,600);
	
}


function draw() {
  background("light grey");
  Engine.update(engine);
  
 
  paper.display();
 
  ground.display();
  box2.display();
  box3.display();
  box1.display();

 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:225,y:-225});
  
  }
}


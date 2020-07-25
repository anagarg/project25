var ground;
var paper;
var launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var box1, box2, box3;
var ballImg, dustbinImg;

function preload() {
	dustbinImg = loadImage('Dustbin.png');
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,40);

	paper = new Paper(200,150,40);

	Engine.run(engine);

	box1=new Ground(600,650,220,20);
	box2=new Ground(480,500,20,300);
	box3=new Ground(680,500,20,300);

	launcher = new Launcher(paper.body,{x:200, y:150});
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  image(dustbinImg,470,325);
  paper.display();
  ground.display();
  launcher.display();
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY})
}
function mouseReleased() {
    launcher.fly()
}

//function keyPressed() { 
//	if (keyCode === UP_ARROW) {
//		 Matter.body.applyForce(paper.body, paper.body.position, {x: 85, y: -85}); 
//	} 
//}

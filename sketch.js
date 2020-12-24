
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var villageImg, cloudImg;
var boyImg, mangoImg, treeImg;
var ground, stone, chain;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var bird, birdImg;

function preload(){
	
   boyImg = loadImage("sprites/boy.png");
   mangoImg = loadImage("sprites/mango.png");
   treeImg = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(width / 2, height - 50, width, 20);
	stone = new Rock(100, height /2, 30);
	chain = new Chain(stone.body, 140, height / 2 + 150);
	
	//creating mangoes
	mango1 = new Mango(width - 50, height / 2, 30);
	mango2 = new Mango(width - 150, height / 2 - 10, 30);
	mango3 = new Mango(width - 250, height / 2 - 20, 30);
	mango4 = new Mango(width - 350, height / 2 - 10, 30);
	mango5 = new Mango(width - 450, height / 2 - 40, 30);
	mango6 = new Mango(width - 140, height / 2 - 80, 30);
	mango7 = new Mango(width - 250, height / 2 - 90, 30);
	mango8 = new Mango(width - 340, height / 2 - 100, 30);
	mango9 = new Mango(width - 4000, height / 2 - 150, 30);
	mango10 = new Mango(width - 150, height / 2 - 130, 30);

	Engine.run(engine);
  
}


function draw() {
  
	rectMode(CENTER);
	background(247,252,152);

	image(boyImg, 100, height / 2 + 80, 200, 270);
	
	drawSprites();

	image(treeImg, width - (width / 4 + 210), height / 2 - 250, width / 4 + 200, height / 2 + 200);
	
	chain.display();
	stone.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);

}

function mouseDragged(){

   Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});

}

function mouseReleased(){
	
	chain.fly();
	
	setTimeout(function(){

		Matter.Body.setPosition(stone.body, {x:100, y:height/2});
		chain.attach(stone.body);

	},2000);

}


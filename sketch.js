var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(700,700);
	rectMode(CENTER);
	//
	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2
	var package_options ={
        isStatic: true
    }

	var package_options ={
        restitution: 0.3 
    
    }

	helicopterSprite = createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.3, isStatic: true });
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);

	box1 = new Box(280,590,20,100);
   
   box2 = new Box(380,590,20,100)
   box3 = new Box(330,650,100,20)
	Engine.run(engine);
   
}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	box1.display();
	box3.display();

box2.display();
	drawSprites();
    
	 
}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
	
		helicopterSprite.x = helicopterSprite.x - 10
		packageSprite.x = packageSprite.x - 10
	
	}
	if(keyCode === RIGHT_ARROW){
	
		helicopterSprite.x = helicopterSprite.x + 10
	    packageSprite.x = packageSprite.x + 10
	}
	

if (keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false)
 

}
	
	
}





var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var food
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600,)
  

  
  
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
 
FoodGroup = new Group();
obstacleGroup = new Group();
  
  
  
}


function draw() {
  background("white")
  
     ground.velocityX = -4

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space"))
    monkey.velocityY = -12
  
  monkey.velocityY = monkey.velocityY +0.8
  
  monkey.collide(ground)
  
  food();

  
  stroke("white")
  textSize = 20;
  fill("white")
  text("score"+ score,500,500);
  
  stroke("black")
  textSize = 20
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime: " + survivalTime, 100,50);
  
  camera.position.x = monkey.x;
  
drawSprites();

  
}

 
function food(){
  if(frameCount % 80 === 0 ){
    banana=createSprite (380,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.lifetime = 150;
    banana.velocityX = -2
    FoodGroup.add(banana);
  }
}
  function obstacle(){
  if(frameCount % 300 === 0){
     obstacle = createSprite (0,Math.round(random(80,400)),30,30);
    obstacle.addImage(obstacleImage)
   // obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
  }

  }






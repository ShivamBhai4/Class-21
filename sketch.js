
var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;


function setup() {
  createCanvas(1000,1000);
 fixedRect = createSprite(600,400, 50, 80);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;

 movingRect = createSprite(800,400, 50, 80);
 movingRect.shapeColor = "green";
 movingRect.debug = true;
 
 gameObject1 = createSprite(100,100,50,50);
 gameObject1.shapeColor = "orange";

gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor = "yellow";

gameObject3 = createSprite(300,100,50,50);
gameObject3.shapeColor = "pink";

gameObject4 = createSprite(400,100,50,50);
gameObject4.shapeColor = "blue";


}

function draw() {
  background(255,255,255); 
  
  movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

  bounceOff(movingRect,fixedRect);

/*
if(isTouching(movingRect,gameObject3)){
  movingRect.shapeColor ="red";
  gameObject3.shapeColor = "red";
}
  else {
    movingRect.shapeColor ="green";
    gameObject3.shapeColor = "green";
  }
*/

  drawSprites();
}
/*
function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width /2+ object1.width /2 
    && object2.x - object1.x < object2.width /2+ object1.width /2 
    && object2.y - object1.y < object2.height /2+ object1.height /2
    && object1.y - object2.y < object2.height /2+ object1.height /2){
  

  return true;
  }
  else{
    

    return false;
  }

}
**/

function bounceOff(object1,object2){
  if(object1.x - object2.x < object2.width /2+ object1.width /2 
    && object2.x - object1.x < object2.width /2+ object1.width /2 ){
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if(object1.y - object2.y < object2.height /2+ object1.height /2
    && object2.y - object1.y < object2.height /2+ object1.height /2){
      object1.velocityY = object2.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
    }
}

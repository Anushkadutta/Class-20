var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 50);
    movingRect.shapeColor="blue";
    movingRect.debug = true;

  fixedRect = createSprite(400, 200, 50, 80);
   fixedRect.shapeColor="blue";
   fixedRect.debug = true;
}

function draw() {
  background(255,255,255); 
   
  movingRect.x = mouseX;
  movingRect.y =mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2  +  fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2  +  fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2  +  fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2  +  fixedRect.height/2){
      movingRect.shapeColor = "blue"
      fixedRect.shapeColor = "blue"
} else {
  movingRect.shapeColor = "red"
  fixedRect.shapeColor = "red"
}

  drawSprites();
}
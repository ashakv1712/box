var box;  //global scope

function setup() {
  createCanvas(400, 400);
  box = createSprite(200,200,20,20);
}

function draw() {
  background("pink");

  if(keyDown(LEFT_ARROW)){
    box.x = box.x - 2;
  }

  if(keyDown(RIGHT_ARROW)){
    box.x = box.x + 2;
  }




 
  drawSprites()
}
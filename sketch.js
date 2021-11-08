var space;

function setup() {
  createCanvas(800,400);
  space = createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  

  if (keyDown("LEFT_ARROW")) {
    space.x -= 2;
  } 

  if (keyDown("RIGHT_ARROW")) {
    space.x += 2;
  }

  if (keyDown("UP_ARROW")) {
    space.y -= 2;
  }

  if (keyDown("DOWN_ARROW")) {
    space.y += 2;
  }

  drawSprites();
}
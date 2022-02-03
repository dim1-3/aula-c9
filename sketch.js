var box;

function setup() {
  createCanvas(500, 500);

  box = createSprite(250,250,50,50);
  box.shapeColor = "red";

}

function draw() {
  background("#1fcc92");

  if (keyDown("up")) {
    box.y -= 5;
  }

  if (keyDown("down")) {
    box.y += 5;
  }

  if (keyDown("left")) {
    box.x -= 5;
  }

  if (keyDown("right")) {
    box.x += 5;
  }

  if (keyDown("space")) {
    background("orange");
  }


  drawSprites();
}


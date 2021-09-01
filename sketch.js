var character, characterImage;
var apple, appleImage;

function preload() {
  characterImage = loadImage("mario.png");
  appleImage = loadImage("apple.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  character = createSprite(windowWidth - 1300, height - 100);
  character.addImage(characterImage);
  character.scale = 0.03;

  apple = createSprite(865, 50);
  apple.addImage(appleImage);
  apple.scale = 0.4;
}

function draw() {
  background("red");

  text(mouseX + "," + mouseY, mouseX, mouseY); // Tells us the mouse X/Y position on the screen!
  text("START MAZE ^^", 34, 628);

  line(23, 604, 250, 605);
  line(23, 510, 131, 511);
  line(131, 511, 131, 100);
  line(131, 100, 312, 90);
  line(312, 90, 312, 20);
  line(312, 20, 912, 20);
  line(250, 605, 250, 170);
  line(250, 170, 362, 155);
  line(362, 155, 362, 130);
  line(362, 130, 762, 90);
  line(762, 90, 900, 90);

  if (keyDown("up")) {
    character.y -= 3;
  }

  if (keyDown("down")) {
    character.y += 3;
  }

  if (keyDown("left")) {
    character.x -= 3;
  }

  if (keyDown("right")) {
    character.x += 3;
  }

  if (character.x === apple.x && character.y === apple.y) {
    text("You got the apple! You now have to crack a code!", apple.x + 30, apple.y);
  }

  drawSprites();
}

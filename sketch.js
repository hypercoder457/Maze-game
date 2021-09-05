var character, characterImage;
var apple, appleImage;
var steak, steakImage;
var bread, breadImage;
var chicken, chickenImage;
var cake, cakeImage;
var cookie, cookieImage;
var diamond, diamondImage;
var gold, goldImage;
var carrot, carrotImage;

function preload() {
  characterImage = loadImage("images/mario.png");
  appleImage = loadImage("images/apple.png");
  steakImage = loadImage("images/steak.png");
  breadImage = loadImage("images/bread.png");
  chickenImage = loadImage("images/chicken.png");
  cakeImage = loadImage("images/cake.png");
  cookieImage = loadImage("images/cookie.png");
  diamondImage = loadImage("images/diamond.png");
  goldImage = loadImage("images/gold.png");
  carrotImage = loadImage("images/carrot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  character = createSprite(windowWidth - 1300, height - 100);
  character.addImage(characterImage);
  character.scale = 0.03;

  apple = createSprite(585, 55);
  apple.addImage(appleImage);
  apple.scale = 0.4;

  steak = createSprite(290, 120);
  steak.addImage(steakImage);
  steak.scale = 0.5;

  bread = createSprite(865, 50);
  bread.addImage(breadImage);
  bread.scale = 0.1;
  chicken = createSprite(483, 217);
  chicken.addImage(chickenImage);
  chicken.scale = 0.5;

  cake = createSprite(745, 240);
  cake.addImage(cakeImage);
  cake.scale = 0.1;
  
  cookie = createSprite(310, 570);
  cookie.addImage(cookieImage);
  cookie.scale = 0.3;

  diamond = createSprite(995, 535);
  diamond.addImage(diamondImage);
  diamond.scale = 0.5;

  gold = createSprite(1215, 200);
  gold.addImage(goldImage);
  gold.scale = 0.5;

  carrot = createSprite(315, 267);
  carrot.addImage(carrotImage);
  carrot.scale = 0.3;
}

function draw() {
  background("red");

  text(mouseX + "," + mouseY, mouseX, mouseY); // Tells us the mouse X/Y position on the screen! For dev purposes only
  text("START ^^", 34, 628);
  text("Get all the items!", 17, 25);

  createMazeLines();

  if (keyIsDown("up")) {
    character.y -= 3;
  }

  if (keyIsDown("down")) {
    character.y += 3;
  }

  if (keyIsDown("left")) {
    character.x -= 3;
  }

  if (keyIsDown("right")) {
    character.x += 3;
  }

  if (character.x === apple.x && character.y === apple.y) {
    text("You got the apple! You now have to crack a code!", apple.x + 30, apple.y);
  }

  drawSprites();
}

function createMazeLines() {
  // Draws all lines for the maze to the screen.
  line(23, 604, 250, 605);
  line(23, 510, 131, 511);
  line(131, 511, 131, 100);
  line(131, 100, 312, 90);
  line(312, 90, 312, 20);
  line(312, 20, 912, 20);
  line(250, 655, 250, 450);
  line(250, 360, 250, 170);
  line(250, 170, 362, 155);
  line(362, 155, 362, 130);
  line(362, 130, 762, 90);
  line(762, 90, 900, 90);
  line(250, 360, 300, 360);
  line(250, 500, 400, 500);
  line(400, 360, 400, 150);
  line(500, 500, 600, 500);
  line(600, 500, 600, height - 480);
  line(500, 500, 500, 550);
  line(400, 500, 400, 550);
  line(500, 550, 650, 550);
  line(650, 550, 650, 400);
  line(650, 400, 900, 400);
  line(900, 400, 900, 175)
  line(1100, 400, width-100, 400);
  line(1100, 400, 1100, 100);
}

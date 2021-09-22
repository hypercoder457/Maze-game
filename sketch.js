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
var line1, line2, line3, line4, line5, line6, line7, line8, line9, line10;
var linesGroup;
var obstacleGroup;
var lineSprites = [];
var foodSprites = [];
var score = 9;
var lives = 5;
var gameState = "play";

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

  character = createSprite(windowWidth - 1300, height - 70);
  character.addImage(characterImage);
  character.scale = 0.03;

  apple = createSprite(585, 55);
  apple.addImage(appleImage);
  apple.scale = 0.4;

  steak = createSprite(200, 120);
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

  foodSprites.push(apple, steak, bread, cake, cookie, diamond, gold, carrot, chicken);

  linesGroup = new Group();
}

function draw() {
  background("red");

  text(mouseX + "," + mouseY, mouseX, mouseY); // Tells us the mouse X/Y position on the screen! For dev purposes onl
  push();
  fill("lightblue");
  text("START MAZE\nBELOW", 34, 480);
  text("Get all the items!", 17, 25);
  text("You must get\nall items before getting the apple in the center of the\nmaze", 17, 40);
  text(`Score: ${score}`, 20, 90);
  text(`Lives: ${lives}`, 20, 120);
  pop();

  createMazeLines();
  characterBehavior();

  character.setCollider("circle", 0, 0);
  character.debug = true;
  characterCollide();

  drawSprites();
}

function createMazeLines() {
  // Draws all lines for the maze to the screen.
  push();
  line1 = createSprite(135, 600, 227, 1);
  line1.shapeColor = "black";

  line2 = createSprite(75, 510, 108, 1);
  line2.shapeColor = "black";

  line3 = createSprite(130, 305, 1, 410);
  line3.shapeColor = "black";

  line4 = createSprite(221.5, 95, 181, 1);
  line4.shapeColor = "black";

  line5 = createSprite(312, 55, 1, 70);
  line5.shapeColor = "black";

  line6 = createSprite(612, 20, 600, 1);
  line6.shapeColor = "black";

  line7 = createSprite(250, 552.5, 1, 180);
  line7.shapeColor = "black";

  line8 = createSprite(250, 265, 1, 190);
  line8.shapeColor = "black";

  line(250, 170, 362, 155);

  line10 = createSprite(362, 142.5, 1, 25);
  line10.shapeColor = "black";

  line(362, 130, 762, 90);

  line12 = createSprite(831, 90, 138, 1);
  line12.shapeColor = "black";

  line13 = createSprite(275, 360, 50, 1);
  line13.shapeColor = "black";

  line14 = createSprite(325, 500, 150, 1);
  line14.shapeColor = "black";

  line15 = createSprite(400, 255, 1, 210);
  line15.shapeColor = "black";

  line16 = createSprite(550, 500, 100, 1);
  line16.shapeColor = "black";

  line17 = createSprite(600, 322.5, 1, 355);
  line17.shapeColor = "black";

  line18 = createSprite(500, 525, 1, 50);
  line18.shapeColor = "black";

  line19 = createSprite(575, 550, 150, 1);
  line19.shapeColor = "black";

  line20 = createSprite(650, 475, 1, 150);
  line20.shapeColor = "black";

  line21 = createSprite(775, 400, 250, 1);
  line21.shapeColor = "black";

  line22 = createSprite(900, 287.5, 1, 200);
  line22.shapeColor = "black";

  line23 = createSprite(1180, 400, 160, 1);
  line23.shapeColor = "black";

  line24 = createSprite(1100, 250, 1, 300);
  line24.shapeColor = "black";

  lineSprites.push(line1, line2, line3, line4, line5, line6, line7, line8, line10,
    line12, line13, line14, line15, line16, line17, line18, line19, line20, line21, line22,
    line23, line24);

  pop();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function destroyItems() {
  character.destroy();
  for (var i = 0; i < lineSprites.length; i++) {
    lineSprites[i].destroy();
  }
  for (var j = 0; j < foodSprites.length; j++) {
    foodSprites[j].destroy();
  }
}

function characterBehavior() {
  if (gameState === "play") {
    if (lives === 0) {
      clear();
      destroyItems();
      background("gray");
      push();
      textSize(50);
      fill("blue");
      text("GAME OVER", width / 2, height / 2);
      text("REFRESH TO START OVER\nAGAIN", width/2, (height/2)+50)
      pop();
    }

    for (var i = 0; i < lineSprites.length; i++) {
      if (lineSprites[i].isTouching(character)) {
        character.x = windowWidth - 1300;
        character.y = height - 70;
        lives -= 1;
      }
    }

    for (var j = 0; j < foodSprites.length; j++) {
      if (foodSprites[j].isTouching(character)) {
        score += 1;
        foodSprites[j].destroy();
      }
    }

    if (score === 7) {
      line6.destroy();
      fill("blue");
      text("You have\nunlocked the golden\napple!", 20, 150);
    }

    if (score === 9) {
      fill("blue");
      text("You got the apple! You now have to\ncrack a code!", apple.x + 30, apple.y);
      gameState = "end";
    }
  } else if (gameState === "end") {
    //sleep(5000).then(() => {
      //destroyItems();
    //})
    //background("lightblue");
    //push();
    //fill("blue");
    //text("Wait for 5 seconds.....", 20, 140);
    //pop();
  }
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    character.y -= 7;
  }

  if (keyIsDown(DOWN_ARROW)) {
    character.y += 7;
  }

  if (keyIsDown(LEFT_ARROW)) {
    character.x -= 7;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    character.x += 7;
  }
}


function characterCollide() {
  // Character collision with ALL the lines.
  character.collide(line1);
  character.collide(line2);
  character.collide(line3);
  character.collide(line4);
  character.collide(line5);
  character.collide(line6);
  character.collide(line7);
  character.collide(line8);
  character.collide(line10);
  character.collide(line12);
  character.collide(line13);
  character.collide(line14);
  character.collide(line15);
  character.collide(line16);
  character.collide(line17);
  character.collide(line18);
  character.collide(line19);
  character.collide(line20);
  character.collide(line21);
  character.collide(line22);
  character.collide(line23);
  character.collide(line24);
}

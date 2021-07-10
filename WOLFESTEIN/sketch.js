var player1, iplayer, iplayer1, iplayer2, iplayer3, iplayer4;
var punch, sniper, pistol, kinfe, Akm;
var main_menue;
var score = 0;
var lives = 3;

function preload(){
    punch = loadImage("Images/punch.png");
    akm = loadImage("Images/AKM.png");
    pistol = loadImage("Images/p1_pistol.png");
    sniper = loadImage("Images/Sniper.png");
    kinfe = loadImage("Images/knife");
}

function setup(){
    createCanvas(1200,700);
    player1 = createSprite(600,630);
    player1.addImage(punch);
    player1.scale = 0.5;

    main_menue = createSprite(1100,10,250,1500)
    main_menue.shapeColor = "lightblue";

    iplayer = createSprite(600,630);
    iplayer.addImage(punch);
    iplayer.scale = 0.5;

    iplayer1 = createSprite(600,630);
    iplayer1.addImage(kinfe);
    iplayer1.scale = 0.5;

    iplayer2 = createSprite(600,630);
    iplayer2.addImage(punch);
    iplayer2.scale = 0.5;

    iplayer3 = createSprite(600,630);
    iplayer3.addImage(punch);
    iplayer3.scale = 0.5;

    iplayer4 = createSprite(600,630);
    iplayer4.addImage(punch);
    iplayer4.scale = 0.5;
}

function draw(){
    background('#717171');    

    if (keyDown(LEFT_ARROW)) {
        player1.x = player1.x - 5;
    }
    if (keyDown(RIGHT_ARROW)) {
        player1.x = player1.x + 5;
    }

    drawSprites();
    textSize(30)
    fill("black")
    text("Score: "+ score, 975, 50);
    text("Lives: "+ lives, 975, 100)
}
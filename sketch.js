var spacecraft,spacecraftImg;
var ufo,ufoImg;
var meteroites,meteroitesImg;
var bg,bgImg;
var hit;
var destroy;
var bgsound;
var completed;

function preload(){
  
  spacecraftImg=loadImage("images/pc.png")
  ufoImg=loadImage("images/npc2.png")
  meteroitesImg=loadImage("images/npc1.png")
  bgImg=loadImage("images/background.jpg")

  hit=loadSound("sounds/hit.mp3")
  destroy=loadSound("sounds/destroy.mp3")
  bgsound=loadSound("sounds/bgsound.mp3")
  completed=loadSound("sounds/completed.mp3")

}

function setup() {
  createCanvas(900,800);

bg=createSprite(450,400,900,800);
bg.addImage(bgImg)
bg.scale=2.5;

spacecraft=createSprite(300,700,10,10)
spacecraft.addImage(spacecraftImg)
spacecraft.scale=0.9;

}

function draw() {
  
  if(keyDown("RIGHT_ARROW")){

    spacecraft.x=spacecraft.x+10;

  }
  if(keyDown("LEFT_ARROW")){

    spacecraft.x=spacecraft.x-10;

  }
  
  drawSprites()
  
}

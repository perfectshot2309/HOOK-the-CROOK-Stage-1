var bg,bg2,form,system,code,security;
var score=0;

function preload() {  
  bg= loadImage("thief.jpg")
  bg2=loadImage("caught.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();    
}

function draw() {
  background(bg);
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 800,120);
  clues(); 
  drawSprites()
}
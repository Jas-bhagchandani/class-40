var database;
var canvas;
var allPlayers;
var form, game, player;
var playerCount;
var gameState=0;
var car1, car2, car3, car4, cars;
var car1_image, car2_image, car3_image, car4_image, track1_image;
var rank = 0;
var carSound

function preload(){
car1_image = loadImage("images/car1.png");
car2_image = loadImage("images/car2.png");
car3_image= loadImage("images/car3.png");
car4_image = loadImage("images/car4.png");
track1_image = loadImage("images/track.jpg");
carSound=loadSound("BMV+DRIVEBY.mp3");

}

function setup(){
  database = firebase.database();
  
  canvas=createCanvas(displayWidth-45, displayHeight-150);
  game= new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState===2){
    console.log("game ended");
  }
  
   
  
  
}



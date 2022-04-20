var database;
var game,form,player;
var playerCount = 0;
var gameState = 0;
var allPlayers ;
var carro1,carro2,carro3,carro4,carro1img,carro2img,carro3img,carro4img;
var backgroundImg;
var carros;

function preload(){
  carro1img = loadImage("Car1.png");
  carro2img = loadImage("Car2.png");
  carro3img = loadImage("Car3.png");
  carro4img = loadImage("Car4.png");
  backgroundImg = loadImage("PISTA.png")
}
function setup(){
    database = firebase.database();
    createCanvas(displayWidth - 20, displayHeight - 30);
    game = new Game();
    game.getState();
    game.start();
    
    
}

function draw(){
    
    if(playerCount === 2){
        game.update(1);
  
    }
   if(gameState === 1){
     clear();
     game.play();

   }
  if(gameState === 2){
    game.end();
  }

}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var villain,v2,v3,v4;
var hero;
var bg;
var form,game,player;
var  GameState,playerCount;
var player1,player2;
var player_img;
var players=[];

function preload(){
    bg=loadImage("Sprites/background.jpg");
}
function setup() {
  createCanvas(1400,800);


  database = firebase.database(); 
  game=new Game();
  game.getState();
  game.start();
  console.log("Bat");
}

function draw() {
  background(bg);  

  
  if (playerCount === 5) {
    game.update(0);
  }
  if (GameState === 1) {
    clear(); 
    game.play();
  }
  if (GameState === 2) {
   
    game.end();
  }
 
}
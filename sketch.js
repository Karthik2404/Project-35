const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var stone,rope,rope2,rope3;
var stone_con,stone_con2,stone_con3;

var bg_img;
var food;
var rabbit;

function preload()
{
  bg_img = loadImage('bg.png');
  food = loadImage('ball.png');
 // rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
 // ground = new Ground(200,680,600,20);

  rope = new Rope(4,{x:60,y:60});
  rope2 = new Rope(5,{x:200,y:60});
  rope3 = new Rope(7,{x:430,y:60});

  //creating stone(metal ball)
  stone = Bodies.circle(100,100,20);

  Matter.Composite.add(rope.body,stone);
  Matter.Composite.add(rope2.body,stone);
  Matter.Composite.add(rope3.body,stone);

  stone_con = new Link(rope,stone);
  stone_con2 = new Link(rope2,stone);
  stone_con3 = new Link(rope3,stone);

   //btn 1
   button = createImg('cut_btn.png');
   button.position(50,60);
   button.size(50,50);
   button.mouseClicked(drop);
 
    //btn 2
    button2 = createImg('cut_btn.png');
    button2.position(190,60);
    button2.size(50,50);
    button2.mouseClicked(drop2);
 
   //btn 3
   button3 = createImg('cut_btn.png');
   button3.position(420,60);
   button3.size(50,50);
   button3.mouseClicked(drop3);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);

  image(food,stone.position.x,stone.position.y,70,70);
  rope.show();
  rope2.show();
  rope3.show();
  Engine.update(engine);


 
   
}


function drop()
{
 // cut_sound.play();
  rope.break();
  stone_con.dettach();
  stone_con = null; 
}

function drop2()
{
 // cut_sound.play();
  rope2.break();
  stone_con2.dettach();
  stone_con2 = null; 
}

function drop3()
{
 // cut_sound.play();
  rope3.break();
  stone_con3.dettach();
  stone_con3 = null; 
}

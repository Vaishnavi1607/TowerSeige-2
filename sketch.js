var polygon;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
 
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
    world = engine.world;
    
   
    
   stand1 = new Stand(460,440,270,10);
   stand2 = new Stand(750,270,220,10);
   
   ground = new Stand(500,500,1000,10)


   //level four
   
  
  
    block1 = new Box(415,420,30,40);
    block2 = new Box(425,420,30,40);
    block3 = new Box(445,410,30,40);
    block4 = new Box(465,420,30,40);
    block5 = new Box(485,420,30,40);
    block6 = new Box(505,420,30,40);
    block7 = new Box(525,420,30,40);

    
 
    //level three
    block8 = new Box(435,400,30,40);
    block9 = new Box(445,400,30,40);
    block10 = new Box(465,390,30,40);
    block11 = new Box(485,400,30,40);
    block12 = new Box(505,400,30,40);

    block17 = new Box(710,250,30,40);
    block18 = new Box(730,250,30,40);
    block19 = new Box(750,250,30,40);
    block20 = new Box(770,250,30,40);
    block21 = new Box(790,250,30,40);



    //level two
    block13 = new Box(455,380,30,40);
    block14 = new Box(465,380,30,40);
    block15 = new Box(485,380,30,40);

    block22 = new Box(730,230,30,40);
    block23 = new Box(750,230,30,40);
    block24 = new Box(770,230,30,40);

    //top block
    block16 = new Box(470,360,30,40);

    block25 =  new Box(750,210,30,40);

   polygon = new Polygon(100,300,30);

   sling = new Sling(polygon.body,{x:100,y:280})
 


 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(56,44,44);
 


 

  polygon.display();

  sling.display();

  stand1.display();
  stand2.display();

  //level four
  push()
  strokeWeight(2)
  fill(246, 89, 89)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  pop()

  //level three
  push()
  strokeWeight(2)
 fill(198,154,203);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  pop()
  
  push()
  strokeWeight(2)
 fill(135,206,234)
  block17.display();
  block18.display(); 
  block19.display();
  block20.display();
  block21.display();
  pop()

 //level two
 push()
 strokeWeight(2)
 fill(63,224,208)
 block13.display();
 block14.display();
 block15.display();
 pop()

 push()
 strokeWeight(2)
 fill(140,232,140)
 block22.display();
 block23.display();
 block24.display();
 pop()

 //top block
 push()
 strokeWeight(2)
 fill(140,232,140);
 block16.display();
 pop()

 push()
 strokeWeight(2)
 fill(198,154,203);
 block25.display();
 pop()

 ground.display();

 drawSprites();

 push()
  fill(255)
  stroke(255)
  strokeWeight(0)
  textSize(25);
 text("Drag the Hexagonal Stone and Release it, to launch towards the blocks",100,70,)
 text("Press Space for second chance",100,150)
 pop()

}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:100,y:300})
   sling.attach(polygon.body);
  }
}







 
  

  

 


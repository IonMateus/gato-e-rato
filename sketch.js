var ret1
var ret2

function setup() {
  createCanvas(800,400);
 
 ret1=createSprite(300,300,10,10) 
 ret2=createSprite(700,300,10,10) 

 ret1.velocityX=3;

}

function draw() {
  background("black");  
  

  
if(ret1.x-ret2.x<ret1.width/2 + ret2.width/2 && ret2.x - ret1.x<ret1.width/2 + ret2.width/2 ){

ret1.shapeColor="red"
ret2.velocityX=-2;
ret2.shapeColor="green"
ret1.velocityX=-3;
}






  drawSprites();
}
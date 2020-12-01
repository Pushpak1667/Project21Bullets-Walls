var wall,thickness,bullet;
var speed,weight

function setup() {
  createCanvas(1600,400);

thickness = random(22,83);
  speed = random(223,331);
weight = random(30,52);

bullet = createSprite(50,200,50,50);
wall = createSprite(1200,200,thickness,height/2);
wall.debug = true;

bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  



if(hasCollided(bullet,wall)){

bullet.velocityX = 0;


var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);

if(damage < 10){
  bullet.shapeColor = color("green");
}
else if (damage > 10){
  bullet.shapeColor = color("red");
  }



}
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallleftEdge = wall.x;
  if(bulletRightEdge >= wallleftEdge){
    return true;
  }
  return false;
}
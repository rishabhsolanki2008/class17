var b2
function setup() 
{
  createCanvas(400, 400);
  b2 = new Box(200,200,20,20,2);
}

function draw() 
{
  background(220);
  b2.show();
  b2.move();

}


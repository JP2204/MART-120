var righteyeX = 100;
var righteyeY = 95;
var righteyeDirection = 2;

var bodyX = 135;
var bodyY = 185;
var bodyDirection = 3;


var leftlegX = 200;
var leftlegY = 350;
var leftlegDirection = 2;

var rightlegX = 150;
var rightlegY = 350;
var rightlegDirection = 3;

var rightarmX = 130;
var rightarmY = 275;
var rightarmDirection = 2;
function setup()
{
    createCanvas(500, 600);
    bodyDirection = Math.floor(Math.random() *10) + 1;

}

function draw()
{
  background(159, 41, 144);
  textSize(22)
  text('What Is Self?', 10,100);

// head
  fill(55, 238, 194);
  triangle(30, 220,208, 100, 360, 220);

// eyes
  strokeWeight(5);
  fill(61, 233, 202);
  point(righteyeX, 95);
  point(285,95);
  righteyeX+=righteyeDirection;
  if(righteyeX <= 418 || righteyeX <= 82);
  {
    righteyeDirection *= -1;
  }

// body
  fill(185, 129, 236);
  rect(135, bodyY, 100, 250);
  bodyY += bodyDirection;
  if(bodyY <=0 || bodyY >=350)
  {
    bodyDirection *= -1;
  }



// right arm
  line(rightarmX,rightarmY, 65, 305);
  rightarmX += rightarmDirection;
  if(rightarmX >=300 || <=60)
  {
    rightarmDirection *= -1;
  }
// left arm
  line(305,260, 35, 305);
// left leg
  fill(236, 110, 201)
  rect(200, leftlegY, 10, 60);
  leftlegY += leftlegDirection;
  if(leftlegY <=0 || leftlegY >=450)
  {
    leftlegDirection *= -1;
  }
// right leg
  fill(75, 202, 217)
  rect(rightlegX, 465, 20, 60);
  rightlegX += rightlegDirection;
  if(rightlegX >=400 || rightlegX <=80)
  {
    rightlegDirection *= -1;
  }

  fill(120);
  textSize(22);
  text("James Pierce",270,500 );



}

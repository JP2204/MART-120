

var bodyX = 135;
var bodyY = 185;
var bodyDirection = 3;


var leftlegX = 200;
var leftlegY = 350;
var leftlegDirection = 2;

var rightlegX = 150;
var rightlegY = 350;
var rightlegDirection = 3;

var righteyeX = 200;
var righteyeY = 115;
var righteyeDirection = 2;

var lefteyeX = 295;
var lefteyeY = 115;
var lefteyeXDirection = 1;
var lefteyeYDirection = -1.5;

var titlesize = 22;
var count = 0;
var titlesizeDirection = 1;




function setup()
{
    createCanvas(500, 600);
    bodyDirection = Math.floor(Math.random() *10) + 1;

}

function draw()
{
  background(159, 41, 144);
  textSize(titlesize);
  titlesize+=titlesizeDirection;
  count++;
  if(count > 5)
  {
    titlesizeDirection *= -1;
    count = 0;
  }
  text('What Is Self?', 10,100);

// head
  fill(55, 238, 194);
  triangle(30, 220,208, 100, 360, 220);

// eyes
  strokeWeight(3);
  fill(237, 151, 21);
  ellipse(righteyeX,115,30,20);
  righteyeX += righteyeDirection;
  if(righteyeX <=0 || righteyeX >=450)
  {
    righteyeDirection *= -1;
  }
  ellipse(lefteyeX,lefteyeY,30,20);
  lefteyeX+=lefteyeXDirection;
  lefteyeY+=lefteyeYDirection;
     if(lefteyeX >= 493 || lefteyeX <= 25)
     {
        lefteyeXDirection *= -1;

     }
     if(lefteyeY >= 585 || lefteyeY <= 45)
     {
        lefteyeYDirection *= -1;

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
  line(130,275, 65, 305);

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

var characterX = 250;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for shape1
var shapeX = 50;
var shapeY = 45;
var shapeXSpeed;
var shapeYSpeed;

// x and y for shape2
var shapeX2 = 379;
var shapeY2 = 379;
var shapeX2Speed;
var shapeY2Speed;

// shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(600, 650);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
}

function draw()
{
    background(114, 19, 116);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit
    textSize(14);
    text("EXIT", width-50,height-50)

    //character
    fill(19, 200, 232);
    circle(characterX,characterY,45);

    // key move speed
    if(keyIsDown(w))
    {
        characterY -= 6;
    }
    if(keyIsDown(s))
    {
        characterY += 6;
    }
    if(keyIsDown(a))
    {
        characterX -= 6;
    }
    if(keyIsDown(d))
    {
        characterX += 6;
    }

    // potential enemy
    fill(241, 104, 5);
    circle(shapeX, shapeY, 20);
    //second enemy
    fill(235, 15, 213);
    circle(shapeX2,shapeY2,65)


    // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeX2 += shapeX2Speed;
    shapeY2 += shapeY2Speed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    if(shapeX2 > width)
    {
        shapeX2 = 0;
    }
    if(shapeX2 < 0)
    {
        shapeX2 = width;
    }
    if(shapeY2 > height)
    {
        shapeY2 = 0;
    }
    if(shapeY2 < 0)
    {
        shapeY2 = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(229, 249, 0);
        stroke(5);
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }

    // shape on the mouse click
    fill(12, 12, 14);
    circle(mouseShapeX, mouseShapeY, 25);
    }
    function mouseClicked()
    {
      mouseShapeX = mouseX;
      mouseShapeY = mouseY;
    }

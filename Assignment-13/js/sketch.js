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

    // call borderCreation function
    borderCreation();

    // exit message
    exitMessage();

    //character creation function
    createCharacter();

    // this function controls the character
    characterControls();

    // calls enemy
    createEnemy();

     // gets a random speed for the enemy each time page is refreshed
    getEnemySpeed();

    // moves the enemy (with WASD)
    moveEnemy();

    // function that checks to see if the shape has gone out of bounds
    outOfBoundsCheck();

    // checks to see if the character has left the exit
    exitCheck();

    // creates the shape based on the mouse click location
    createShapeOnMC();






function borderCreation()
{
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);
}

function exitMessage()
{
     // exit message
     textSize(16);
     text("EXIT", width-50,height-50)
}

function createCharacter()
{
     //character
     fill(0,255,0);
     circle(characterX,characterY,25);
}

function characterControls()
{

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}

function createEnemy()
{
     // potential enemy
     fill(0,0,0);
     // draw the shape
     circle(shapeX, shapeY, 75);
     fill(255,255,255);
     circle(shapeX2,shapeY2, 50);
}

function getEnemySpeed()
{
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXSpeed2 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed2 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

}

function moveEnemy()
{
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeX2 += shapeXSpeed2;
    shapeY2 += shapeYSpeed2;
}

function outOfBoundsCheck()
{
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

}

function exitCheck()
{
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}

function mouseClicked()
    {
      mouseShapeX = mouseX;
      mouseShapeY = mouseY;
    }

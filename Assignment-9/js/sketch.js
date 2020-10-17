function setup()
{
    createCanvas(500, 600);
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
  point(150,95);
  point(285,95);

// body
  fill(185, 129, 236);
  rect(135,220,100,250);


// right arm
  line(130,260, 65, 305);
// left arm
  line(305,260, 35, 305);
// left leg
  fill(236, 110, 201)
  rect(200,465,10,60);
// right leg
  fill(75, 202, 217)
  rect(150,465,20,60);

  fill(120);
  textSize(22);
  text("James Pierce",270,500 );



}

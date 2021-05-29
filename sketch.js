var hr,mn,sc;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0); 
  translate(200,200);
  rotate(-90); 
  
  hr = hour();
  mn = minute();
  sc = second();
   
  
  stroke("red");
  strokeWeight(10);
  noFill();
  var scAngle = map(sc, 0, 60, 0, 360);
  arc( 0 , 0 , 300 , 300, 0, scAngle);
  push();
  rotate(scAngle);
  line(0,0,100,0);
  pop();
  stroke("blue");
  var mnAngle = map(mn, 0, 60, 0, 360);
  arc( 0 , 0 , 270 , 270, 0, mnAngle);
  push();
  rotate(mnAngle);
  line(0,0,80,0);
  pop();

  stroke("green");
  var hrAngle = map(hr%12, 0, 12, 0, 360);
  arc( 0 , 0 , 240 , 240, 0, hrAngle);
  push();
  rotate(hrAngle);
  line(0,0,60,0);
  pop();

 
  


  drawSprites();
}
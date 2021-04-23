var hr,min,sec,hrangle,minangle,secangle

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);
  hr=hour()
  min=minute()  
  sec=second()
  hrangle=map(hr%12,0,12,0,360)
  minangle=map(min,0,60,0,360)
  secangle=map(sec,0,60,0,360)
  ellipse(400,200,200,200)
  translate(400,200)
  push()
  rotate(hrangle)
  stroke(20)
  line(0,0,50,0)
  pop()

  push()
  rotate(minangle)
  stroke(20)
  line(0,0,75,0)
  pop()

  push()
  rotate(secangle)
  stroke(7)
  line(0,0,100,0)
  pop()



  drawSprites();
}
let blue, red, yellow;

function setup() {
  createCanvas(8.5*150, 11*150); // todo: figure out dimensions for print
  yellow = new Riso ("yellow", width, height);
  blue = new Riso("blue", width, height);
  red = new Riso("red", width, height);
}

function draw() {
  var s=100;
  background(255);
  blue.noStroke();
  red.noStroke();
  yellow.noStroke();



  for(var x=140;x<width-140;x = x+140){
    for(var y=140;y<height-140;y=y+140){
      blue.fill(map(y,0,height,20,220));
      blue.ellipse(x + random(-20, 20), y+ random(-20, 20), s+ random(-20, 20) ,s+ random(-20, 20));
      red.fill(map(x,0,width,20,220));
      red.ellipse(x + random(-20, 20), y+ random(-20, 20), s+ random(-20, 20) ,s+ random(-20, 20));
      yellow.fill(map(x,0,width,220,20));
      yellow.ellipse(x + random(-20, 20), y+ random(-20, 20), s+ random(-20, 20) ,s+ random(-20, 20));
    }
  }

  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont("Helvetica");
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(20);
  // textGraphic.text("ABOLISH", mouseX, mouseY);

  red.cutout(textGraphic);
  blue.cutout(textGraphic);
  yellow.cutout(textGraphic);

  drawRiso();
  // noLoop();
}

function mousePressed(){
  exportRiso();
}

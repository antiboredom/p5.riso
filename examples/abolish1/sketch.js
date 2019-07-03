let blue, red, yellow;

function setup() {
  createCanvas(8.5*72, 11*72); // todo: figure out dimensions for print
  blue = new Riso("blue", width, height);
  // yellow = new Riso("yellow", width, height);
  red = new Riso("red", width, height);
  // black = new Riso("black", width, height);
}

function draw() {
  background(255);

  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont("Helvetica");
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(100);
  textGraphic.text("ABOLISH", width/2, height/2);

  // black.image(textGraphic, 5, 5);
  // black.cutout(textGraphic);

  let channelIndex = 0;
  let gridWidth = width / 102;
  let channels = [blue, red];
  for (var x = 0; x < width; x+=gridWidth) {
    for (var y = 0; y < height; y+=gridWidth) {
      // let channel = random(Riso.channels);
      let channel = channels[channelIndex % channels.length];
      channel.noStroke();
      channel.fill(random(20, 255));
      channel.rect(x, y, gridWidth, gridWidth);
      channelIndex ++;
    }
  }

  // blue.image(textGraphic, 0, 0);

  red.cutout(textGraphic);
  blue.cutout(textGraphic);

  // red.cutout(black);
  // blue.cutout(black);

  //

  drawRiso();
  noLoop();
}

function mousePressed(){
  exportRiso();
}

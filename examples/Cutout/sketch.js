let black;
let yellow;

function setup() {
  createCanvas(600, 600);
  yellow = new Riso('yellow');
  black = new Riso('black');
  
  background(220);
  clearRiso();

  black.fill(255);
  black.ellipse(200, height / 2, 300, 300);

  yellow.fill(255);
  yellow.ellipse(400, height / 2, 300, 300);
  
  yellow.cutout(black); // cut black out of yellow

  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Arial');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(20);
  textGraphic.text('P5.RISO', width / 2 + 5, height / 2);

  black.cutout(textGraphic); // cut text out of black

  drawRiso();
}

function draw() {
  
}

function mouseClicked() {
  exportRiso();
}
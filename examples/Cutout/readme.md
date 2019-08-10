# Cutout
[Run it with the p5 editor](https://editor.p5js.org/brain/sketches/GpuJH1Zur)

```javascript
let blue;
let red;

function setup() {
  createCanvas(600, 600);
  red = new Riso('red');
  blue = new Riso('blue');
}

function draw() {
  background(220);
  clearRiso();

  blue.fill(255);
  blue.ellipse(200, height / 2, 300, 300);

  red.fill(255);
  red.ellipse(400, height / 2, 300, 300);

  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Arial');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(20);
  textGraphic.text('P5.RISO', width / 2 + 5, height / 2);

  red.cutout(textGraphic); // cut text out of red
  blue.cutout(textGraphic); // cut text out of blue
  red.cutout(blue); // cut blue out of red

  drawRiso();
}

function mouseClicked() {
  exportRiso();
}
```


# Dither

This sketch uses p5.riso's dither function to create different effects on a single color channel.  
[Run it with the p5 editor](https://editor.p5js.org/brain/sketches/hU0ANATF-)

```javascript
let black;
let img;
let ditherType = 'atkinson';

function preload() {
  img = loadImage('data/no_threat.jpg');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  black = new Riso('black');
}

function draw() {
  background(220);

  let threshold = map(mouseX, 0, width, 0, 255);

  clearRiso();

  let dithered = ditherImage(img, ditherType, threshold);
  black.image(dithered, 0, 0);

  drawRiso();
}

function mouseClicked() {
  exportRiso();
}

function keyReleased() {
  if (key == 1) ditherType = 'atkinson';
  else if (key == 2) ditherType = 'floydsteinberg';
  else if (key == 3) ditherType = 'bayer';
  else if (key == 4) ditherType = 'none';
}
```



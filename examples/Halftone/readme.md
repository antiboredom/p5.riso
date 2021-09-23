# Dither

This sketch uses p5.riso's dither function to create different effects on a single color channel.  
[Run it with the p5 editor](https://editor.p5js.org/brain/sketches/hU0ANATF-)

```javascript
let pink;
let img;

function preload() {
  img = loadImage('data/no_threat.jpg');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  pink = new Riso('fluorescentpink');
}

function draw() {
  background(220);

  clearRiso();

  let halftoned = halftoneImage(img);

  pink.image(halftoned, 0, 0);

  drawRiso();
}

function mouseClicked() {
  // exportRiso();
}
```



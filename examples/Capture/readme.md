# Capture

This sketch uses p5.dom's video capture function, and p5.riso's extractRGB function to create a 2-channel print with a webcam.  
[Run it with the p5 editor](https://editor.p5js.org/brain/sketches/pdl2eG240)

```javascript
let blue;
let red;
let capture; // this is the video camera

function setup() {
  pixelDensity(1);

  let canvas = createCanvas(640, 480);

  // create riso channels
  red = new Riso('red');
  blue = new Riso('blue');

  // start and hide camera
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  frameRate(10);
}

function draw() {
  background(255);

  // clear riso layers
  clearRiso();

  // extract the red ang blue channels
  let reds = extractRGBChannel(capture, 'red');
  let blues = extractRGBChannel(capture, 'blue');

  // draw the blue pixels on the blue channel
  // and red pixels on the red channel
  blue.image(blues, 0, 0);
  red.image(reds, 0, 0);

  // remove overlapping pixels
  blue.cutout(red);

  // draw all riso layers
  drawRiso();
}

function mouseClicked() {
  exportRiso();
}
```

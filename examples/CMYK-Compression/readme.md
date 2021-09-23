# Capture

This sketch uses p5.dom's video capture function to demonstrate the "channel compression" option in p5.riso's extractCMYK function, in which multiple CMYK channels can be extracted into one Riso color layer. Once the webcam feed is running, you can click to toggle between two versions of the image and see the difference.

(Thanks to [Max Stadnik](https://maxstadnik.com/) for the channel compression technique!)


```javascript
let warmLayer;
let coolLayer;
let compressChannels = true; // should two CMYK channels go into each Riso layer or nah?
let capture; // this is the video camera

function setup() {
  pixelDensity(1);

  let canvas = createCanvas(640, 480);

  // create riso channels
  warmLayer = new Riso('fluorescentpink');
  coolLayer = new Riso('teal');

  // start and hide camera
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  textSize(28);
  frameRate(10);
}

function draw() {
  background(255);

  // clear riso layers
  clearRiso();

  let warms;
  let cools;
  if (compressChannels) {
    // put magenta and yellow into one layer
    warms = extractCMYKChannel(capture, "my");
    // put cyan and black into the other
    cools = extractCMYKChannel(capture, "ck");
  } else {
    // put just magenta into one layer
    warms = extractCMYKChannel(capture, "m");
    // put just cyan into the other
    cools = extractCMYKChannel(capture, "c");
  }
  // draw the warm pixels on the warm (pink) channel
  // and cool pixels on the cool (teal) channel
  warmLayer.image(warms, 0, 0);
  coolLayer.image(cools, 0, 0);

  // remove overlapping pixels
  coolLayer.cutout(warmLayer);

  // draw all riso layers
  drawRiso();

  console.log((frameCount / 100.0) % width);
  text( compressChannels ? "channel compression on; click to turn off" : "channel compression off; click to turn on",
        frameCount % width,
        height - 50.0 + Math.sin(frameCount/10.0) * 25.0);

}

function mouseClicked() {
  compressChannels = !compressChannels;
}
```

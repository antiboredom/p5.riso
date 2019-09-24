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
    warms = extractCMYKChannel(capture, "my");
    cools = extractCMYKChannel(capture, "kc");
  } else {
    warms = extractCMYKChannel(capture, 1); // 1 == magenta
    cools = extractCMYKChannel(capture, 0); // 0 == cyan
  }
  // draw the warm pixels on the warm (pink) channel
  // and cool pixels on the cool (teal) channel
  warmLayer.image(warms, 0, 0);
  coolLayer.image(cools, 0, 0);

  // remove overlapping pixels
  coolLayer.cutout(warmLayer);

  // draw all riso layers
  drawRiso();

  text( compressChannels ? "channel compression on; click to turn off" : "channel compression off; click to turn on",
        28, height-28);

}

function mouseClicked() {
  compressChannels = !compressChannels;
}

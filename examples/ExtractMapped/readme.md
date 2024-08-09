# Extract Mapped

This sketch uses p5.riso's extractMappedChannels function. The function attempts to map colors from an input image onto riso layers.

Imagine you have green and orange riso colors and you wanto to reproduce an image. The extractMappedChannels function will try to find the right combination of orange and green inks to match each pixel in the input image.

```javascript
let layer1;
let layer2;

let img;

function preload() {
  img = loadImage("data/no_threat.jpg");
}

function setup() {
  pixelDensity(1);

  createCanvas(img.width, img.height);

  background(255);

  layer1 = new Riso("orange");
  layer2 = new Riso("green");

  let images = extractMappedChannels(img, 0.05);

  layer1.image(images[0], 0, 0);
  layer2.image(images[1], 0, 0);

  drawRiso();
}

function mouseClicked() {
  exportRiso();
}
```

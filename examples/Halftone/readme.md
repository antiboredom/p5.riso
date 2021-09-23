# Halftone

This sketch uses p5.riso's halftone function to apply a halftone pattern to an image.  
[Run it with the p5 editor](https://editor.p5js.org/rachelehyman/sketches/k3HBcRDXs)

```javascript
let pink;
let img;

function preload() {
  img = loadImage('data/monkeys.jpg');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  pink = new Riso('fluorescentpink');
}

function draw() {
  background(220);

  clearRiso();

  let halftoned = halftoneImage(img, 'line', 3, 45, 90);

  pink.image(halftoned, 0, 0);

  drawRiso();
}
```

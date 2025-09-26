# Dither

This sketch creates a test print to show different settings for p5.riso's dither function.
[Run it with the p5 editor](https://editor.p5js.org/brain/sketches/g87wkzvuW)

```javascript
let black;
let img;
let ditherTypes =['atkinson','floydsteinberg','bayer','none'];
let s = 250;
let gutter = 0.5 *72;

function preload() {
  img = loadImage('data/rosa.jpg');
}

function setup() {
  pixelDensity(1);
  createCanvas(8.5 * 150, 11.5 * 150);
  black = new Riso('black', 8.5 * 150, 11.5 * 150);
}


function draw() {

  clearRiso();
  for (var x = 0; x < 4; x = x + 1) {
    for (var y = 0; y < 4; y = y + 1) {
      dithered = ditherImage(img, ditherTypes[x], (y+1) * 50); //dither img object
      black.image(dithered, 2*gutter + x * s, 2*gutter+y * s, s, s); //draw image to black layer
      if (x == 0) { //write numbers along first column
        black.text((y+1)*50, gutter + x * s, 3*gutter+y * s, s, s);

      }


    }
  }

  //draw dither labels
  black.text('atkinson', 2* gutter + 0 * s, 2*gutter-20);
  black.text('floydsteinberg', 2*gutter + 1 * s, 2*gutter-20);
  black.text('bayer', 2*gutter + 2 * s, 2*gutter-20);
  black.text('none', 2*gutter + s * 3, 2*gutter-20);
  drawRiso();
  noLoop();
}

function mouseClicked() {
  exportRiso();
}
```



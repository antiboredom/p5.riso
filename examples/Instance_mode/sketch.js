// Example adapted from the color_test example, to demonstrate using
// the library in P5/s instant mode. The color_test example is adapted from
// Paola Dutra and Crystal Chen

const sketch = function (p) {
  let blue;
  let yellow;
  let red;

  p.setup = function() {
    // Set up a global object to capture this instance.
    window._p5Instance = p;
    p.createCanvas(600, 600);
    p.pixelDensity(1);
    p.noStroke();

    red = new Riso("red");
    blue = new Riso("blue");
    yellow = new Riso("yellow");

    p.colorGrid(red, 0);
    p.colorGrid(yellow, 90);
    p.colorGrid(blue, 270);

    drawRiso();
  }

  p.draw = function() {}

  p.mouseClicked = function() {
    exportRiso();
  }

  p.colorGrid = function(layer, angle) {
    deg = angle*(p.PI/180);
    layer.push();
    layer.translate(299,299);
    layer.rotate(deg);
    layer.translate(-299,-299);
    //GRID
    layer.noStroke();
    for (var x = 0; x < 20; x++) {
      for (var y = 0; y < 20; y++) {
        let a = p.map(y, 0, 19, 255, 0);
        let w = p.map(x, 0, 20, 50, 550);
        let h = p.map(y, 0, 20, 50, 550);
        layer.fill(a);
        layer.rect(w, h, 23, 23);

        //key
        if(w>510){ //only draw edge strip once
        layer.rect(550+30, h, 23, 23);
        }
      }
    }
    layer.pop();
  }
}

// Create the custom instance.
const myp5 = new p5(sketch);



# Color test print

Test print for layering three colors, two color or one color at different opacities
[Run it with the p5 editor](https://editor.p5js.org/brain/sketches/rCdUW72sC)

```javascript
//Example adapted from Paola Dutra and Crystal Chen
//Color test print
//See custom function colorGrid(color, angle); to layer color grids and test color combinations

let blue;
let yellow;
let red;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  //blendMode(MULTIPLY);
  noStroke();
  
  red = new Riso("red");
  blue = new Riso("blue");
  yellow = new Riso("yellow");
  
  colorGrid(red, 0);
  colorGrid(yellow, 90);
  colorGrid(blue, 270);

  drawRiso();
}

function draw() {
  

}

function mouseClicked() {
  exportRiso();
}

function colorGrid(layer, angle) {
  deg = angle*(PI/180);
  layer.push();
  layer.translate(299,299);
  layer.rotate(deg);
  layer.translate(-299,-299);
  //GRID
  layer.noStroke();
  for (var x = 0; x < 20; x++) {
    for (var y = 0; y < 20; y++) {
      let a = map(y, 0, 19, 255, 0);
      let w = map(x, 0, 20, 50, 550);
      let h = map(y, 0, 20, 50, 550);
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
    
    
  
```

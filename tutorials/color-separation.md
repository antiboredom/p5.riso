# Color Separation

Color images can be printed by seperating different color channels, and printing the color data from each channels as a separate layer. The following two functions enable you two extract color channels from an image. This data can then be copied to the riso objects for each color layer.

* [extractRGBChannel(img, channel);](https://antiboredom.github.io/p5.riso/#channel)  
* [extractCMYKChannel(img, channel);](https://antiboredom.github.io/p5.riso/#channelCMYK)  

Here is an example for a two color print in blue and red. It takes a color image and uses the extractRGBChannel() function to extract the reds and blues from an image. It copies this data to the red and blue riso object for printing.  


```javascript
let blue, red; //declare variables for blue and red p5.riso objects to print in blue and red ink.  
let img;

function preload() {
  img = loadImage('data/claire.jpg'); //load in the color image file
}

function setup() {
  pixelDensity(1); //set pixel density to 1
  createCanvas(8.5 * 72, 11 * 72); //create a canvas that is letter size
  blue = new Riso('blue'); // create the blue object 
  red = new Riso('red'); //create the red object
  noLoop(); //we don't want draw to loop as this is a static image
}

function draw() {
  background(255);

  clearRiso();

  let reds = extractRGBChannel(img, "red");  //extract reds from img
  let blues = extractRGBChannel(img, "blue"); //extract blue from img

  blue.imageMode(CENTER);
  red.imageMode(CENTER);

  blue.image(blues, width / 2, height / 2, img.width / 2, img.height / 2); //copy blues to blue riso object
  red.image(reds, width / 2, height / 2, img.width / 2, img.height / 2); //copy reds to red riso object


  let textGraphic = createGraphics(width, height); //create new graphics object for text
  textGraphic.fill(0); //make fill 0
  textGraphic.textStyle(BOLD); //style text
  textGraphic.textFont('Helvetica');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(80);
  textGraphic.text('ABOLISH', width * 0.5, height * 0.7); //write string 'ABOLISH' to object

  blue.cutout(textGraphic); //cutout text from blue channel
 
  drawRiso(); //preview print
}

function mousePressed() { //when mouse is pressed
  exportRiso(); //export files for print
}

```


Here is the [complete code described in this example.](https://editor.p5js.org/brain/sketches/wLGAPKEMk)  
Here is the [print we made](https://github.com/antiboredom/p5.riso/blob/master/docs/assets/claire.gif) from this code.  


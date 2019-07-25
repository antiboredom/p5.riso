# p5.riso.js

A p5 library for risograph printing by Sam Lavigne and Tega Brain.

Please note: this library is pre-alpha, and likely to change!

## Risograph Printer

How to use the Risograph Printer: 
- https://wp.nyu.edu/idmprintclub/

## What & Why?
- p5.Riso.js is a library that allows you to code with the logic of Risograph printing in mind. 
- A Risograph printer prints in color layers, one color at a time. The p5.Riso Library was created so that creative coders can code in color layers, making the process of turning your sketch into print art simple.
- In the Riso Library, the colors layers are called Riso objects.

## Documentation

**Riso Object**
- The Riso object is a color layer. 
- [3 parameters:]
1. Color
2. Width
3. Height 
- Example: *var blue = new Riso(“blue”, width, height);*
	- Here we create a blue color layer. The order which you create colors layers affects the composition of the canvas and how colors mix. If you top layer (created last) has opacity of 255, you will not be able to see the layers underneath. It is also important to keep in mind that a red layer on top of a blue layer looks different than a blue layer on top of a red layer. This is true for different color combinations, but these particular examples will turn out to be different shades of purple.

**Fill**
- *riso.fill( );*
- The fill method for Riso object has been overloaded so that it only takes one value. That value is a number between 0 and 255 and it corresponds to the alpha channel of that particular color.

**Stroke**
- *riso.stroke( );*
- The stroke method for Riso object has been overloaded so that it only takes one value. That value is a number between 0 and 255 and it corresponds to the alpha channel of that particular color.

**Draw**
- *riso.draw( );*
- Displays a particular Riso object. Should be used at the end of your draw.

**Image**
- *riso.image(img, x, y, width, height);*
- [5 parameters:]
1. Which image to display on the layer
1. x-position
1. y-position
1. width
1. height

**drawRiso( )**
- Displays all Riso objects. Should be used at the end of your draw.

**exportRiso( )**
- Allows you to save the color layers on your computer

**risoNoFill( )**
- Removes fill from all objects in all layers

**risoNoStroke( )**
- Removes stroke from all objects in all layers

**clearRiso( )**
- Clears all objects in all layers

**extractRGBChannel( )**
- Allows you to extract a certain color channel from an image
- [2 parameters:]
1. Image object
1. Number corresponding to the Color Channel
	- 0 = red
	- 1 = green
	- 2 = blue

**cutout( )**
- Allows you to cut out a certain object out of a color layer so that the colors don’t mix


## How to “install” it / enable it for use
Using:
- OpenProcessing
 	- Create a new tab by clicking the '+' button next to the mySketch tab. 
	- Copy & Paste our [source code](https://raw.githubusercontent.com/antiboredom/p5.riso/master/lib/p5.riso.js) into your new tab
 	- You can also fork one of our sample sketches (made on OpenProcessing) and work from there!

- Local Editors (such as Sublime)
	- Download our source code and save it in the same folder where you keep your local .js files.
	- On your html file used to run the .js code, insert the following line under <head>:
    	- <script src="../../lib/p5.riso.js"></script>
    	* This should contain the path to the file on your computer 

- p5.js Web Editor
	- Click the grey '>' button under the pink play button on the top left
	- Add a new file to your sketch by clicking the '▼' button. We suggest calling it p5.riso.js
	- Copy & Paste our [source code](https://raw.githubusercontent.com/antiboredom/p5.riso/master/lib/p5.riso.js) into your new file
	- Click on the index.html file on the sidebar
	- add the line of code below under <head>: 
	- <script src="p5.riso.js"></script>


## Sketch Examples

## Notes to self:

To resolve:
- What file format should it export in? SVG, PDF, PNG ?
- Should it be png with transparent background?
- Test on riso.
- What happens with channel overlays. Need to check preview versus print outputs.
- Should there be a cut out mode with overlapping shapes so that the underneath layers are masked? Or should it show blended color?

To do:
- dithering options
- color separation
- add examples for drawing in setup, use of noloop and drawing with iteration
- add perceptual color spaces

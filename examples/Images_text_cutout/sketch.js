var imglist = {};
imglist.dumpling = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/dumplings.png";
imglist.dogs = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/AFriendInNeed.png";
imglist.sunday = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/ASundayAfternoon.png";
imglist.bosch = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/bosch.png";
imglist.breakfast = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/breakfast.png";
imglist.doors = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/doors.png";
imglist.kobra = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/kobra2.png";
imglist.chinatown = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/neon_chinatown.png";
imglist.marilyn = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/marilyn.png";
imglist.starry = "https://raw.githubusercontent.com/IDMNYU/SummerJam2019/master/testimages/starry_night.png";
imglist.egg="https://raw.githubusercontent.com/IDMNYU/p5.js-image/master/testimages/egg.png";
imglist.orange = "https://raw.githubusercontent.com/IDMNYU/p5.js-image/master/testimages/orange.png";
let blue;
let red;
let img;

function preload() {
  img = loadImage(imglist.marilyn);
}

function setup() {
  createCanvas(600, 600);
	red = new Riso("red", width, height);
  blue = new Riso("blue", width, height);
	yellow = new Riso("yellow", width, height);
}

function draw() {
  background(220); 
	clearRiso();
	
	let blues = extractRGBChannel(img, 2);
	let reds = extractRGBChannel(img, 0);
	
  blue.imageMode(CENTER);
  red.imageMode(CENTER);
  blue.image(blues, width / 2, height / 2, img.width, img.height);
  red.image(reds, width / 2, height / 2, img.width, img.height);
	
	let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont("Arial");
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(70);
  textGraphic.text("MARILYN", width/2+5, height-130);
	
	// using cutout makes program crash

  red.cutout(textGraphic);
  blue.cutout(textGraphic);
	
	drawRiso();
}

function mouseClicked(){
	exportRiso();
}


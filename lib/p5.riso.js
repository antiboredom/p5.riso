const RISOCOLORS = [
  {name: 'BLACK', color: [0, 0, 0]},
  {name: 'BURGUNDY', color: [145, 78, 114]},
  {name: 'BLUE', color: [0, 120, 191]},
  {name: 'GREEN', color: [0, 169, 92]},
  {name: 'MEDIUMBLUE', color: [50, 85, 164]},
  {name: 'BRIGHTRED', color: [241, 80, 96]},
  {name: 'RISOFEDERALBLUE', color: [61, 85, 136]},
  {name: 'PURPLE', color: [118, 91, 167]},
  {name: 'TEAL', color: [0, 131, 138]},
  {name: 'FLATGOLD', color: [187, 139, 65]},
  {name: 'HUNTERGREEN', color: [64, 112, 96]},
  {name: 'RED', color: [255, 102, 94]},
  {name: 'BROWN', color: [146, 95, 82]},
  {name: 'YELLOW', color: [255, 232, 0]},
  {name: 'MARINERED', color: [210, 81, 94]},
  {name: 'ORANGE', color: [255, 108, 47]},
  {name: 'FLUORESCENTPINK', color: [255, 72, 176]},
  {name: 'LIGHTGRAY', color: [136, 137, 138]},
  {name: 'METALLICGOLD', color: [172, 147, 110]},
  {name: 'CRIMSON', color: [228, 93, 80]},
  {name: 'FLUORESCENTORANGE', color: [255, 116, 119]},
  {name: 'CORNFLOWER', color: [98, 168, 229]},
  {name: 'SKYBLUE', color: [73, 130, 207]},
  {name: 'SEABLUE', color: [0, 116, 162]},
  {name: 'LAKE', color: [35, 91, 168]},
  {name: 'INDIGO', color: [72, 77, 122]},
  {name: 'MIDNIGHT', color: [67, 80, 96]},
  {name: 'MIST', color: [213, 228, 192]},
  {name: 'GRANITE', color: [165, 170, 168]},
  {name: 'CHARCOAL', color: [112, 116, 124]},
  {name: 'SMOKYTEAL', color: [95, 130, 137]},
  {name: 'STEEL', color: [55, 94, 119]},
  {name: 'SLATE', color: [94, 105, 94]},
  {name: 'TURQUOISE', color: [0, 170, 147]},
  {name: 'EMERALD', color: [25, 151, 93]},
  {name: 'GRASS', color: [57, 126, 88]},
  {name: 'FOREST', color: [81, 110, 90]},
  {name: 'SPRUCE', color: [74, 99, 93]},
  {name: 'MOSS', color: [104, 114, 77]},
  {name: 'SEAFOAM', color: [98, 194, 177]},
  {name: 'KELLYGREEN', color: [103, 179, 70]},
  {name: 'LIGHTTEAL', color: [0, 157, 165]},
  {name: 'IVY', color: [22, 155, 98]},
  {name: 'PINE', color: [35, 126, 116]},
  {name: 'LAGOON', color: [47, 97, 101]},
  {name: 'VIOLET', color: [157, 122, 210]},
  {name: 'ORCHID', color: [170, 96, 191]},
  {name: 'PLUM', color: [132, 89, 145]},
  {name: 'RAISIN', color: [119, 93, 122]},
  {name: 'GRAPE', color: [108, 93, 128]},
  {name: 'SCARLET', color: [246, 80, 88]},
  {name: 'TOMATO', color: [210, 81, 94]},
  {name: 'CRANBERRY', color: [209, 81, 122]},
  {name: 'MAROON', color: [158, 76, 110]},
  {name: 'RASPBERRYRED', color: [209, 81, 122]},
  {name: 'BRICK', color: [167, 81, 84]},
  {name: 'LIGHTLIME', color: [227, 237, 85]},
  {name: 'SUNFLOWER', color: [255, 181, 17]},
  {name: 'MELON', color: [255, 174, 59]},
  {name: 'APRICOT', color: [246, 160, 77]},
  {name: 'PAPRIKA', color: [238, 127, 75]},
  {name: 'PUMPKIN', color: [255, 111, 76]},
  {name: 'BRIGHTOLIVEGREEN', color: [180, 159, 41]},
  {name: 'BRIGHTGOLD', color: [186, 128, 50]},
  {name: 'COPPER', color: [189, 100, 57]},
  {name: 'MAHOGANY', color: [142, 89, 90]},
  {name: 'BISQUE', color: [242, 205, 207]},
  {name: 'BUBBLEGUM', color: [249, 132, 202]},
  {name: 'LIGHTMAUVE', color: [230, 181, 201]},
  {name: 'DARKMAUVE', color: [189, 140, 166]},
  {name: 'WINE', color: [145, 78, 114]},
  {name: 'GRAY', color: [146, 141, 136]},
  {name: 'CORAL', color: [255, 142, 145]},
  {name: 'WHITE', color: [255, 255, 255]},
  {name: 'AQUA', color: [94, 200, 229]},
  {name: 'MINT', color: [130, 216, 213]},
  {name: 'CLEARMEDIUM', color: [242, 242, 242]},
  {name: 'FLUORESCENTYELLOW', color: [255, 233, 22]},
  {name: 'FLUORESCENTRED', color: [255, 76, 101]},
  {name: 'FLUORESCENTGREEN', color: [68, 214, 44]}
];

class Riso extends p5.Graphics {
  constructor(channelColor, w, h) {
    if (!w) w = width;
    if (!h) h = height;

    super(w, h, null, p5.instance);

    let foundColor;

    if (typeof channelColor === "string") {
      channelColor = channelColor.trim().replace(/ /g, '').toUpperCase();
      foundColor = RISOCOLORS.find(c => c.name === channelColor);
    }

    if (foundColor) {
      this.channelColor = foundColor.color;
      this.channelName = foundColor.name;
    } else {
      this.channelColor = channelColor;
      this.channelName = null;
    }

    // store original versions of fill and stroke
    this._fill = p5.prototype.fill.bind(this);
    this._stroke = p5.prototype.stroke.bind(this);
    this._image = p5.prototype.image.bind(this);

    this.stroke(this.channelColor[0], this.channelColor[1], this.channelColor[2]); // stroke with channel color by default

    this.channelIndex = Riso.channels.length;

    Riso.channels.push(this);
  }

  export(filename) {
    if (!filename) {
      if (this.channelName) {
        filename = this.channelName + '.png';
      } else {
        filename = this.channelIndex + '.png';
      }
    }

    //this.filter(GRAY);
    let buffer = createGraphics(this.width, this.height);

    buffer.loadPixels();
    this.loadPixels();

    for (let i=0; i < this.pixels.length; i+=4) {
      buffer.pixels[i]   = 0;
      buffer.pixels[i+1] = 0;
      buffer.pixels[i+2] = 0;
      buffer.pixels[i+3] = this.pixels[i+3];
    }

    buffer.updatePixels();
    buffer.save(filename);
  }

  cutout(imageMask) {
    let img = this.get();
    img.cutout(imageMask);
    this.clear();
    this.copy(img, 0, 0, this.width, this.height, 0, 0, img.width, img.height);
  }

  stroke(c) {
    this._stroke(this.channelColor[0], this.channelColor[1], this.channelColor[2], c);
  }

  fill(c) {
    this._fill(this.channelColor[0], this.channelColor[1], this.channelColor[2], c);
  }

  image(img, x, y, w, h) {
    let newImage = createImage(img.width, img.height);
    img.loadPixels();
    newImage.loadPixels();
    for (let i=0; i < newImage.pixels.length; i+=4) {
      newImage.pixels[i]   = this.channelColor[0];
      newImage.pixels[i+1] = this.channelColor[1];
      newImage.pixels[i+2] = this.channelColor[2];
      newImage.pixels[i+3] = 255 - (img.pixels[i] + img.pixels[i+1] + img.pixels[i+2])/3;
    }
    newImage.updatePixels();
    this._image(newImage, x, y, w, h);
    return newImage;
  }

  draw() {
    image(this, 0, 0);
  }
}

function drawRiso() {
  blendMode(MULTIPLY);
  Riso.channels.forEach(c => c.draw());
  blendMode(BLEND);
}

function exportRiso() {
  Riso.channels.forEach(c => c.export());
}

function clearRiso() {
  Riso.channels.forEach(c => c.clear());
}

function risoNoFill() {
  Riso.channels.forEach(c => c.noFill());
}

function risoNoStroke() {
  Riso.channels.forEach(c => c.noStroke());
}

function rgb2cmyk(r, g, b) {
  // adapted from https://www.rapidtables.com/convert/color/rgb-to-cmyk.html

  let c, m, y, k;

  r = r / 255;
  b = b / 255;
  g = g / 255;

  k = Math.min(1-r, 1-b, 1-g);
  c = 1 - (1-r-k) / (1-k);
  m = 1 - (1-g-k) / (1-k);
  y = 1 - (1-b-k) / (1-k);

  k = 1 - k;

  return [c*255, m*255, y*255, k*255];
}

function extractRGBChannel(img, c) {
  if (c == "r" || c == "red") c = 0;
  if (c == "g" || c == "green") c = 1;
  if (c == "b" || c == "blue") c = 2;

  let channel = createImage(img.width, img.height);
  img.loadPixels();
  channel.loadPixels();
  for (let i = 0; i < img.pixels.length; i+=4) {
    channel.pixels[i]   = img.pixels[i+c];
    channel.pixels[i+1] = img.pixels[i+c];
    channel.pixels[i+2] = img.pixels[i+c];
    channel.pixels[i+3] = img.pixels[i+3];
  }
  channel.updatePixels();
  return channel;
}

function extractCMYKChannel(img, c) {
  let desiredCMYKChannels = [];
  if(typeof c == "number" && c < 4) {
    desiredCMYKChannels.push(c);
  } else {
    c = c.toLowerCase();
    if (c == "cyan" || c.includes("c")) desiredCMYKChannels.push(0);
    if (c == "magenta" || c.includes("m")) desiredCMYKChannels.push(1);
    if (c == "yellow" || c.includes("y")) desiredCMYKChannels.push(2);
    if (c == "black" || c.includes("k")) desiredCMYKChannels.push(3);
  }
  let channel = createImage(img.width, img.height);
  img.loadPixels();
  channel.loadPixels();
  for (let i = 0; i < img.pixels.length; i+=4) {
    let r = img.pixels[i];
    let g = img.pixels[i+1];
    let b = img.pixels[i+2];
    let cmyk = rgb2cmyk(r, g, b);
    let val = 0;
    desiredCMYKChannels.forEach(function(channelIndex){
      val += cmyk[channelIndex];
    });
    val /= desiredCMYKChannels.length;
    channel.pixels[i]   = val;
    channel.pixels[i+1] = val;
    channel.pixels[i+2] = val;
    channel.pixels[i+3] = img.pixels[i+3];
  }
  channel.updatePixels();
  return channel;
}

function ditherImage(img, type, threshold) {
  // source adapted from: https://github.com/meemoo/meemooapp/blob/44236a29574812026407c0288ab15390e88b556a/src/nodes/image-monochrome-worker.js

  if (threshold === undefined) threshold = 128;

  let out = img.get();
  let w = out.width;
  let newPixel, err;


  let bayerThresholdMap = [
    [  15, 135,  45, 165 ],
    [ 195,  75, 225, 105 ],
    [  60, 180,  30, 150 ],
    [ 240, 120, 210,  90 ]
  ];

  let lumR = [];
  let lumG = [];
  let lumB = [];

  out.loadPixels();

  for (let i=0; i<256; i++) {
    lumR[i] = i*0.299;
    lumG[i] = i*0.587;
    lumB[i] = i*0.114;
  }

  for (let i = 0; i <= out.pixels.length; i += 4) {
    out.pixels[i] = Math.floor(lumR[out.pixels[i]] + lumG[out.pixels[i+1]] + lumB[out.pixels[i+2]]);
  }

  for (let i = 0; i <= out.pixels.length; i+=4) {

    if (type === "none") {
      // No dithering
      out.pixels[i] = out.pixels[i] < threshold ? 0 : 255;
    } else if (type === "bayer") {
      // 4x4 Bayer ordered dithering algorithm
      let x = i/4 % w;
      let y = Math.floor(i/4 / w);
      let map = Math.floor( (out.pixels[i] + bayerThresholdMap[x%4][y%4]) / 2 );
      out.pixels[i] = (map < threshold) ? 0 : 255;
    } else if (type === "floydsteinberg") {
      // Floyd–Steinberg dithering algorithm
      newPixel = out.pixels[i] < 129 ? 0 : 255;
      err = Math.floor((out.pixels[i] - newPixel) / 16);
      out.pixels[i] = newPixel;
      out.pixels[i       + 4 ] += err*7;
      out.pixels[i + 4*w - 4 ] += err*3;
      out.pixels[i + 4*w     ] += err*5;
      out.pixels[i + 4*w + 4 ] += err*1;
    } else {
      // Bill Atkinson's dithering algorithm
      newPixel = out.pixels[i] < 129 ? 0 : 255;
      err = Math.floor((out.pixels[i] - newPixel) / 8);
      out.pixels[i] = newPixel;

      out.pixels[i       + 4 ] += err;
      out.pixels[i       + 8 ] += err;
      out.pixels[i + 4*w - 4 ] += err;
      out.pixels[i + 4*w     ] += err;
      out.pixels[i + 4*w + 4 ] += err;
      out.pixels[i + 8*w     ] += err;
    }

    // Set g and b pixels equal to r
    out.pixels[i + 1] = out.pixels[i + 2] = out.pixels[i];
  }
  out.updatePixels();
  return out;

}


function lookupTable() {
  //https://gist.github.com/kishmiryan-karlen/559c190f6c20856ee323
  //https://www.emanueleferonato.com/2018/06/09/playing-with-javascript-photos-and-3d-luts-lookup-tables/
}

p5.Image.prototype.cutout = function(p5Image) {
  // this is basically the same as mask but without an different compositeoperation

  if (p5Image === undefined) {
    p5Image = this;
  }
  let currBlend = this.drawingContext.globalCompositeOperation;

  let scaleFactor = 1;
  if (p5Image instanceof p5.Renderer) {
    scaleFactor = p5Image._pInst._pixelDensity;
  }

  let copyArgs = [
    p5Image,
    0,
    0,
    scaleFactor * p5Image.width,
    scaleFactor * p5Image.height,
    0,
    0,
    this.width,
    this.height
  ];

  this.drawingContext.globalCompositeOperation = 'destination-out';
  p5.Image.prototype.copy.apply(this, copyArgs);
  this.drawingContext.globalCompositeOperation = currBlend;
  this.setModified(true);
};

Riso.channels = [];

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

function show_ins() {
  var x = document.getElementById('openPro');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
function show_ins2() {
  var x = document.getElementById('localIns');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
function show_ins3() {
  var x = document.getElementById('p5Ins');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

let colorSpans = RISOCOLORS.map(c => `<span class="riso-color riso-${c.name}" style="background-color: rgb(${c.color[0]}, ${c.color[1]}, ${c.color[2]});">${c.name}</span>`);

document.querySelector('#all-colors').innerHTML = colorSpans.join(' ');

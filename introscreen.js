let img;
const poly = [];


function preload(){
img = loadImage('introscreen.jpg')
}

var cnv;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000,1000);
  centerCanvas ();
  poly[0] = createVector(137,385);
  poly[1] = createVector(180,362);
  poly[2] = createVector(176,286);
  poly[3] = createVector(253,285);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(125);
  image(img, 0, 0, width, height);
}

function mouseClicked() {
  hit = collidePointPoly(mouseX,mouseY,poly);
  if (hit) {
    let thisphrase = phrases[round(random(7))]
    alert(thisphrase)
  }
}
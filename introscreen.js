function introscreen() {

let img;
const poly = [];


this.preload = function(){
img = loadImage('introscreen.jpg')
}


this.enter = function() {
  poly[0] = createVector(137,385);
  poly[1] = createVector(180,362);
  poly[2] = createVector(176,286);
  poly[3] = createVector(253,285);
}

this.draw = function() {
  background(125);
  image(img, 0, 0, width, height);
}

this.mouseClicked = function() {
  hit = collidePointPoly(mouseX,mouseY,poly);
  if (hit) {
    mgr.showScene(bodymap);
  }
}
}
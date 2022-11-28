function introscreen() {

let img;
const poly = [];


this.setup = function(){
img = loadImage('introscreen.jpg')
}


this.enter = function() {
  poly[0] = createVector(137,385);
  poly[1] = createVector(180,362);
  poly[2] = createVector(176,286);
  poly[3] = createVector(253,285);
  console.log("introscreen")
}

this.draw = function() {
  background(255);
  image(img, 0, 0);
}

this.mouseClicked = function() {
  hit = collidePointPoly(mouseX,mouseY,poly);
  if (hit) {
    mgr.showScene(bodymap);
  }
}
}
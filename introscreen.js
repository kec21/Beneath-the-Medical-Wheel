function introscreen() {

let img;
const poly = [];


this.setup = function(){
img = loadImage('introscreen.jpg')
}


this.enter = function() {
  poly[0] = createVector(310,757);
  poly[1] = createVector(694,761);
  poly[2] = createVector(694,928);
  poly[3] = createVector(309,929);
  console.log("introscreen")
}

this.draw = function() {
  background(255);
  image(img, 0, 0);
  //beginShape();
  //for (const {x,y} of poly) vertex(x,y);
  //endShape(CLOSE);
}

this.mouseClicked = function() {
  hit = collidePointPoly(mouseX,mouseY,poly);
  console.log("made it into mouse clicked")
  if (hit) {
    console.log("hit");
    mgr.showScene(bodymap);
  }
}
}
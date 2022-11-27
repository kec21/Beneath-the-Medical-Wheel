let mgr;

function setup() {
  createCanvas(1000, 1000);
  mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(introscreen);
}

function draw() {
  mgr.draw();
}

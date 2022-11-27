function feedbackloop() {

this.enter = function() {
    background(255);
    let button = createButton('GO TO THE DOCTOR');
    button.id("doctorButton");
    button.mousePressed(doctorClicked);
  }
  this.draw = function() {
    background(255);
  }
  
  this.doctorClicked = function() {
    let button1 = createButton("YOUR DOCTOR HAS REFERRED YOU TO A SPECIALIST");
    button1.id("specialist1Button");
    button1.mousePressed(labwork);
    let button2 = createButton("YOUR DOCTOR HAS REFERRED YOU TO A SPECIALIST");
    button2.id("specialist2Button");
    button2.mousePressed(labwork2);
    let button3 = createButton("YOUR DOCTOR HAS REFERRED YOU TO A SPECIALIST");
    button3.id("specialist3Button");
    button3.mousePressed(labwork3);
  }
  
  
  this.labwork = function() {
    let button4 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
    button4.id("labworkButton");
    button4.mousePressed(scan1);
  }
  
  this.labwork2 = function() {
    let button5 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
    button5.id("labwork2Button");
    button5.mousePressed(scan2);
  }
  
  this.labwork3 = function() {
    let button6 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
    button6.id("labwork3Button");
    button6.mousePressed(scan3);
  }
  
  this.scan1 = function() {
    let button7 = createButton("YOUR LABS ARE NORMAL, YOUR SPECIALIST HAS ORDERED A SCAN");
    button7.id("scan1Button");
    button7.mousePressed(normal1);
  }
  
  this.scan2 = function() {
    let button8 = createButton("YOUR LABS ARE NORMAL, YOUR SPECIALIST HAS ORDERED A SCAN");
    button8.id("scan2Button");
    button8.mousePressed(normal2);
  }
  
  this.scan3 = function() {
    let button9 = createButton("YOUR LABS ARE NORMAL, YOUR SPECIALIST HAS ORDERED A SCAN");
    button9.id("scan3Button");
    button9.mousePressed(normal3);
  }
  
  this.normal1 = function() {
    let button10 = createButton("YOUR SCAN WAS INCONCLUSIVE, GO BACK TO THE DOCTOR");
    button10.id("normal1");
    button10.mousePressed(endlesscycle1);
  }
  
  this.normal2 = function() {
    let button11 = createButton("YOUR SCAN WAS NORMAL, YOU ARE HEALTHY");
    button11.id("normal2");
    button11.mousePressed(endlesscycle3);
  }
  
  this.normal3 = function() {
    let button12 = createButton("YOUR SCAN WAS NORMAL, GO BACK TO THE DOCTOR");
    button12.id("normal3");
    button12.mousePressed(resetSketch);
  }
  
  this.endlesscycle1 = function() {
    let button13 = createButton("GO BACK TO THE DOCTOR AGAIN AND START THE PROCESS OVER");
    button13.id("endlesscycle1");
    button13.mousePressed(resetSketch);
  }
  
  this.resetSketch = function() {
    createCanvas(1000, 1000);
    background(255);
    let button = createButton('GO TO THE DOCTOR');
    button.id("doctorButton");
    button.mousePressed(doctorClicked);
  }
  
  this.endlesscycle3 = function() {
    let button15 = createButton("EXIT");
    button15.id("endlesscycle3");
    button15.mousePressed(this.sceneManager.showScene(introscreen));
  }
}
  
  
  
  
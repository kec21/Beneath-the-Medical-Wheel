function setup() {
    background(255);
    let button = createButton('GO TO THE DOCTOR');
    button.id("doctorButton");
    button.mousePressed(doctorClicked);
  }
  function draw() {
    background(255);
  }
  
  function doctorClicked() {
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
  
  
  function labwork() {
    let button4 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
    button4.id("labworkButton");
    button4.mousePressed(scan1);
  }
  
  function labwork2() {
    let button5 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
    button5.id("labwork2Button");
    button5.mousePressed(scan2);
  }
  
  function labwork3() {
    let button6 = createButton("YOUR SPECIALIST HAS ORDERED LABWORK");
    button6.id("labwork3Button");
    button6.mousePressed(scan3);
  }
  
  function scan1() {
    let button7 = createButton("YOUR LABS ARE NORMAL, YOUR SPECIALIST HAS ORDERED A SCAN");
    button7.id("scan1Button");
    button7.mousePressed(normal1);
  }
  
  function scan2() {
    let button8 = createButton("YOUR LABS ARE NORMAL, YOUR SPECIALIST HAS ORDERED A SCAN");
    button8.id("scan2Button");
    button8.mousePressed(normal2);
  }
  
  function scan3() {
    let button9 = createButton("YOUR LABS ARE NORMAL, YOUR SPECIALIST HAS ORDERED A SCAN");
    button9.id("scan3Button");
    button9.mousePressed(normal3);
  }
  
  function normal1() {
    let button10 = createButton("YOUR SCAN WAS INCONCLUSIVE, GO BACK TO THE DOCTOR");
    button10.id("normal1");
    button10.mousePressed(endlesscycle1);
  }
  
  function normal2() {
    let button11 = createButton("YOUR SCAN WAS NORMAL, YOU ARE HEALTHY");
    button11.id("normal2");
    button11.mousePressed(endlesscycle3);
  }
  
  function normal3() {
    let button12 = createButton("YOUR SCAN WAS NORMAL, GO BACK TO THE DOCTOR");
    button12.id("normal3");
    button12.mousePressed(resetSketch);
  }
  
  function endlesscycle1() {
    let button13 = createButton("GO BACK TO THE DOCTOR AGAIN AND START THE PROCESS OVER");
    button13.id("endlesscycle1");
    button13.mousePressed(resetSketch);
  }
  
  function resetSketch () {
    createCanvas(1000, 1000);
    background(255);
    let button = createButton('GO TO THE DOCTOR');
    button.id("doctorButton");
    button.mousePressed(doctorClicked);
  }
  
  function endlesscycle3() {
    let button15 = createButton("EXIT");
    button15.id("endlesscycle3");
    button15.mousePressed(console.log("go to intro"));
  }
  
  
  
  
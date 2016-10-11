// adjective is: "methodical"
//This code is supposed to teach the process of trial and error

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER);
  stroke(102);
  frameRate(8);
  angleMode();
}

function draw() {
  tableOfContents();
}

function tableOfContents() {
  background(100);
  textSize(20);
  fill(255);
  text("Welcome! This course is designed to teach", 100, 425);
  text("you the importance of being methodical.", 200, 450);
  text("Hopefully, by the end of this course", 200, 475);
  text("you will gained insight on how to", 200, 500);
  text("apply the method of trial and error", 200, 525);
  text("in your daily life", 100, 550);
  textSize(15);
  text("To go forward, press 1", 750, 475);
  var a = map(mouseX, 0, 900, 100, 500);
  var b = map(mouseY, 0, 900, 0, 300);
  bob(a, b, "Hi, I'm Bob. I'm here to assist you.");
  meme();
  if (key === '1') {
    trial();
    var x = map(mouseX, 0, 900, 600, 800);
    var p = map(mouseY, 0, 600, 100, 230);
    bob(x, p, "Pay attention!"); //
  }
  if (key === '2') {
    problem();
    var d = map(mouseX, 0, 900, 550, 600);
    var h = map(mouseY, 0, 600, 100, 250);
    bob(d, h, "Oh, dear!");
  }
  if (key === '3') {
    eureka();
    var e = map(mouseX, 0, 900, 100, 350);
    var z = map(mouseY, 0, 900, 200, 450);
    bob(e, z, "Eureka!");
  }
  if (key === '4') {
    rubber();
    var r = map(mouseX, 0, 900, 600, 750);
    var t = map(mouseY, 0, 900, 100, 350);
    bob(r, t, "Don't give up!");
  }
  if (key === '5') {
    glue();
    var f = map(mouseX, 0, 900, 400, 500);
    var v = map(mouseY, 0, 900, 300, 400);
    bob(f, v, "Don't give up!");
  }
  if (key === '6') {
    youwin();
    push();
    scale(.8);
    var g = map(mouseX, 0, 900, 400, 700);
    var u = map(mouseY, 0, 600, 50, 150);
    bob(g, u, "Congrats!");
    pop();
  }
  if (key === '7') {
    end();
    var q = map(mouseX, 0, 600, 650, 700);
    var s = map(mouseY, 0, 600, 100, 400);
    bob(q, s, "See you around!");
  }
}



function meme() {
  text("If at first you don't succeed", 700, 300);
  text("Try, try again---", 700, 350);
  text("William Edward Hickson", 700, 400);
}

function trial() {
  background(100, 100, 0);
  textSize(20);
  text("Let me introduce you to the methodology of trial and error", 300, 300);
  text("In this system of problem solving,", 300, 350);
  text("You consider all the possible solutions,", 300, 400);
  text("and apply them one at a time", 300, 450);
  text("until you find a solution that works.", 300, 500);
  textSize(15);
  text("To go forward, press 2", 750, 475);
}

function problem() {
  background(200, 200, 100);
  fill(100, 100, 100);
  rect(700, 200, 150, 200);
  fill(255);
  textSize(20);
  text("For example, suppose you're stuck at home", 300, 300);
  text("on a rainy day. You discover that your window", 300, 350);
  text("won't stay closed. If only there was", 300, 400);
  text("a quick fix for this problem...", 300, 450);
  for (y = 220; y <= 400; y += 20) { // rain
    for (x = 705; x <= 845; x += 20) {
      fill(200, 200, 200);
      // textSize(18 + random(5));
      text("1", x, random(220, y));
    }
  }
  fill(255);
  textSize(15);
  text("To go forward, press 3", 750, 475);
  text("To go back, press 1", 750, 525);
}

function eureka() { // map the range so he doesn't go off the screen

  background(200, 100, 50);

  textSize(20);
  text("You have an idea!", 600, 80);
  text("Could you fix the window with:", 600, 120);
  text("a) rubber bands (press 4)", 600, 160);
  text("b) glue (press 5)", 600, 200);
  text("c) duct tape (press 6)", 600, 240);
  text("Note: In the spirit of this lesson,", 600, 290);
  text("consider taking the trial-and-error approach", 600, 330);
  text("and trying each answer choice", 600, 360);
  text("one at a time.", 600, 390);
  text("The journey is more important", 600, 420);
  text("than the destination.", 600, 450);

  textSize(15);
  text("To go back, press 2", 750, 525);

}


function bob(a, b, c) {
  fill(200, 200, 110); // speech bubble
  ellipse(190, 80, 350, 95);
  triangle(80, 120, a, b, 100, 120);
  fill(255);
  textSize(20);
  text(c, 190, 80);


  fill(255);
  ellipse(a, b, 100, 100); // head 
  if (b % 5 === 0) {

    line(a - 20, b - 20, a - 18, b - 20);
    line(a + 20, b - 20, a + 22, b - 20);
  } else {
    ellipse(a - 20, b - 20, 5, 5);
    ellipse(a + 20, b - 20, 5, 5);
  }
  if (a % 5 === 0) {
    ellipse(a, b + 30, 10, 2);
  } else {
    ellipse(a, b + 30, 10, 10);
  }
  rect(a, b + 6, 2, 5);
  rect(a - 5, b + 50, 12, 15); // neck
  ellipse(a, b + 150, 100, 170);
}

function glue() {
  background(50, 50, 50);
  for (y = 220; y <= 400; y += 20) { // glue
    for (x = 705; x <= 845; x += 15) {
      fill(252, 252, 252);
      text("1", x, random(220, y));
    }
  }

  textSize(30);
  text("Wrong! Glue isn't strong enough. Try again :)", 200, 200);
  text("Press 3 to continue", 200, 250);
}

function rubber() {
  background(84, 34, 200);
  fill(184, 134, 93);
  var cello = map(mouseX, 0, 900, 0, 200); // rubber band
  rect(100, 300, 20 + cello, 30);
  rect(100, 350, 20 + cello, 30);
  rect(100, 400, 20 + cello, 30);
  rect(100, 450, 20 + cello, 30);
  rect(100, 500, 20 + cello, 30);
  rect(100, 550, 20 + cello, 30);
  rect(100, 600, 20 + cello, 30);
  fill(255);
  textSize(30);
  text("Wrong! Rubber bands are too thin :)", 300, 200);
  text("Press 3 to continue", 200, 250);
}

function youwin() {
  background(10, 50, 50);
  fill(255);
  textSize(20 + random(10));
  text("Congratulations! You win", 450, 300);
  textSize(20);
  text("Duct tape is golden", 450, 330);
  fill(255);
  textSize(15);
  text("To go forward, press 7", 750, 525);
  fill(100);
  var duct = map(mouseX, 0, 900, 0, 200); // duct tape
  rect(100, 300, 20 + duct, 30);
  rect(100, 350, 20 + duct, 30);
  rect(100, 400, 20 + duct, 30);
  rect(100, 450, 20 + duct, 30);
  rect(100, 500, 20 + duct, 30);
  rect(100, 550, 20 + duct, 30);
  rect(100, 600, 20 + duct, 30);
}


function end() {
  background(100, 100, 100);
  textSize(150);
  text("The end", 300, 300);
  textSize(15);
  text("Congratulations. You've completed this course", 300, 500);
  text("You are now a certified 'trial-and-error'-or!", 300, 550);
}


function leave(a) {
  textSize(15);
  fill(255);
  text("To return to main menu, press w", 750, 550);
  if (key === "w") {
    tableOfContents();}}
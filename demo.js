var theta;
// var branchLength = 100

function setup() {
  createCanvas(500,500);

  background(200);
  stroke(0);
  translate(width/2, height);

  branch(100);
}

function draw() {

}

function branch(branchLength) {
  var theta = random(0,PI/4);

  strokeWeight(branchLength/5);

  line(0,0,0,-branchLength);
  translate(0, -branchLength);

  branchLength *= 0.66;

  if (branchLength > 5) {

    if (branchLength > 50) {
      push();
      branch(branchLength * random(0.95, 1.5))
      pop();
    }


    push();
    rotate(theta);
    branch(branchLength * random(0.75, 1.5))
    pop();

    push();
    rotate(-theta);
    branch(branchLength * random(0.75, 1.5));
    pop();
  }
}

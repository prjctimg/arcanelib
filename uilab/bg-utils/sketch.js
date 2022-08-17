function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(85);
  ellipse(50, 50, 80, 80);

  if (mouseIsPressed) {
    fill(204, 189, 102)
  } else {
    fill(0);
  }

  ellipse(mouseX, mouseY, 80, 80)
}

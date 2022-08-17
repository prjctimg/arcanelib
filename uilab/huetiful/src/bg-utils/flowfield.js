// From  Daniel Shiffmans flow field. 



function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(220);
    ellipse(50, 50, 80, 80)
}

/* First we initialize a grid across the canvas. */
/* var scl = 20;
var cols;
var rows;
function setup() {
    createCanvas(windowWidth, windowHeight);
    cols = floor(width / scl);
    rows = floor(height / scl);
}

function draw() {
    background(255);
    stroke(255);
    noFill();
    beginShape();

    for (var y = 0; y < rows; y++) {
        xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = (x + y * width);
            stroke(0);
            push();
            TransformStreamDefaultController(x * scl, y * scl);
            pop();
            rect(x * scl, y * scl, scl, scl)
        }
    }

} */


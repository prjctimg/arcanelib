let minLength;
let baseLength;
let lengthRatio;
let angleChange;
let leafColor;
let leafDensity;


function setup() {
    createCanvas(windowWidth, windowHeight)
    background('gray')
    noLoop()

    minLength = random(1, 10);
    baseLength = random(height / 8, height / 2);
    lengthRatio = random(0.25, 0.75)
    angleChange = random(PI / 32, PI / 3)
    leafColor = color(random(0, 255), random(0, 255), random(0, 255))


}

function drawLeaves(x, y) {
    push();

    fill(leafColor);
    noStroke();

    for (let i = 0; i < leafDensity; i++) {
        circle(randomGaussian(x, 10),
            randomGaussian(y, 10),
            random(2, 5))

    }

    pop();
}



function drawTree(x, y, angle, length) {
    const [x1, y1] = [x, y]
    const x2 = x1 + cos(angle) * length
    const y2 = y1 - sin(angle) * length

    line(x1, y1, x2, y2)


    /* This adds recursion */
    if (length >= minLength) {
        drawTree(x2, y2, angle + angleChange, length * lengthRatio)
        drawTree(x2, y2, angle - angleChange, length * lengthRatio)
    } else {
        drawLeaves(x2, y2)
    }
}



function draw() {
    drawTree(width / 2, height, PI / 2, baseLength)
    stroke(0)

}

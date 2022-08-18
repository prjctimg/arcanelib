var numberOfRows;    // Determine number of rows
var numberOfColumns;// Determine number of columns

var xStep;// Determine the size of the gap between 2 points on the x axis.
var yStep;// Determine the size of the gap between 2 points on the y axis.

var positions = [];//An array of positions where we will store each of our Vectors.


function setup() {
    createCanvas(windowWidth, windowHeight)
    numberOfColumns = 16;
    numberOfRows = 9;

    xStep = width / numberOfColumns; //To make sure they are evenly spaced out, we divide the width and height by the numberofColumns
    yStep = height / numberOfRows;//and number of rows respectively.

    for (var x = 0; x < width; x += xStep) {// Start at the first column where x = 0
        for (var y = 0; y < height; y += yStep) {// go through all the rows (y = 0, y = yStep * 1,y = yStep * 2,etc)
            var p = createVector(x, y);// We create a vector at this location

            positions.push(p); // and then we put the vector into array.

        }
        //at the end of the inner loop, we go back to the first loop, and we increment x
        //now our column is going to be x = xStep*1,and we populate all the rows with the inner for loop
        //and again, and again until x > width.
    }


}

function draw() {
    background(85);
    fill('black');
    for (var i = 0; i < positions.length; i++) {//put a circle at each of them
        // put a circle at each of them.

        ellipse(positions[i].x, positions[i].y, 10, 10)
    }
}




function setup () {
  createCanvas(windowWidth, windowHeight)
  noLoop()
}

function draw () {
  const maxWidth = windowWidth
  for (let i = 0; i < 100; i ++) {
    let randomNumber = random(maxWidth)
    let randomWidth = random(10)
    strokeWeight(randomWidth)
    line(0, i * 30, 10 + randomNumber, 0)
  }


function setup () { createCanvas(window.innerWidth, window.innerHeight) noLoop() } function draw () { for (let i = 0; i < 30; i++) { let top = random(windowHeight) let bottom = random(windowWidth) let size = random(20, 300) let opacity = random(90) fill(0, 0, 255, opacity) noStroke() ellipse(top, bottom, size, size) } }

function setup () { createCanvas(windowWidth, windowHeight) } function draw () { for (let i = 0, color = 0; i < 50; i++, color += 5) { let randomNumber = random(windowWidth) strokeWeight(3) stroke(color, color / 2, 255) line(0, i * 30, 10 + randomNumber, 0) stroke(255, color / 2, color, color) line(0, i * 30, 10 + randomNumber, 0) } }




function setup() { createCanvas(window.innerWidth, window.innerHeight) frameRate(6) } const colors = [ { r: 255, g: 162, b: 243 }, { r: 251, g: 158, b: 244 }, { r: 239, g: 144, b: 242 }, { r: 193, g: 75, b: 228 }, { r: 121, g: 44, b: 205 }, { r: 47, g: 32, b: 172 }, { r: 24, g: 54, b: 135 } ]

//Drawing lines
const MAX_HEIGHT = 600;
const MAX_WIDTH = 600;
const STEP = 16;function setup(){
createCanvas(MAX_HEIGHT, MAX_WIDTH);
stroke(169, 251, 215);
strokeWeight(2);
noLoop();
}function draw(){ 
const lines = [];
for(let i = STEP; i < MAX_HEIGHT - STEP; i += STEP){
lines.push([{x: STEP, y: i}, {x: MAX_HEIGHT, y: i}]);
}

// draw
for(let i = 0; i < lines.length; i++){
for(let j = 0; j < lines[i].length; j+=2){
line(lines[i][j].x, lines[i][j].y, lines[i][j+1].x, lines[i][j+1].y);
}
}
}



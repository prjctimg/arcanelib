
/*  Definations for classic palettes. */


//We'll be working with chroma.js for handling the color manipulation logic
const chroma = require('./chroma');


type Palettes = {
    analogous: [0, 30, 60];
    triadic: [0, 120, 240];
    tetradic: [0, 90, 180, 270];
    complementary: [0, 180];
    splitComplementary: [0, 150, 210];
    monochromatic:[//Must search for thi]
};

//For capturing the generated palettes. Palette type can be accessed using dot notation for example when iterating over the selected palette type 

const palettes = {};


/**
 * Takes a baseColor as an arg and returns a palettes object with all palette types.
 * @param baseColor Any color notation;LCH,HSL,hex etc
 * @returns palettes{}
 */
function _palettes(baseColor){
const _hue = chroma(baseColor).get('lch.h');




}
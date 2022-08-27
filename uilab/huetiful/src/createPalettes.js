
const $ = require('./chroma');

function adjustHue(val) {
  if (val < 0) {
    val += Math.ceil(-val / 360) * 360;
  }
  return val % 360;
}


//Provide a base color to the func and then get the hue channel.
const dab = $('blue').get('lch.h')
console.log(dab)


//Define the hue steps which will be added to the retrieved hue channel.
const targetHueSteps = {
  analogous: [0, 30, 60],
  triadic: [0, 120, 240],
  tetradic: [0, 90, 180, 270],
  complementary: [0, 180],
  splitComplementary: [0, 150, 210]
};

//Use  a nested for...in loop to iterate over the JSON nodes and return the internal values in them.
//Add the hueStep to the retrieved hue channel.


const baseColor = 'red'

function generate(baseColor) {
  const _palettes = {};
  const hue = $(baseColor).get('lch.h')
  console.log(hue)
  for (const type of Object.keys(targetHueSteps)) {
    {
      _palettes[type] = targetHueSteps[type].map((step) => ({
        l: baseColor.l,
        c: baseColor.c,
        h: adjustHue(hue + step)
      })
      )
    }

  }
  return _palettes;
}
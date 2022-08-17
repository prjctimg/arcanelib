import { formatHex, nearest, differenceEuclidean } from 'culori/src/index';

function adjustHue(val) {
  if (val < 0)
    val += Math.ceil(-val / 360) * 360;
  return val % 360;
}
/**
 * Define a function that expects a single base color in LCH.
 * @param baseColor
 *
 */
function createPalettes() {
  const targetHueSteps = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplimentary: [0, 150, 210]
  };

  /**
   * Palette object to hold computed palettes
   */
  const palettes = {};

  /**
   *For each palette type, iterate over each hue step, add the step value to the base hue, and store the resulting color - making sure its chroma and lightness values match the base. Returns all palettes in LCH format.
   */
  for (const type of Object.keys(targetHueSteps)) {
    palettes[type] = targetHueSteps[type].map((step) => ({
      l: baseColor.l,
      c: baseColor.c,
      /**
       * Use a small adjustHue function to ensure all hue values are between 0 and 360.
       * */
      h: adjustHue(baseColor.h + step), mode: "lch"
    }));

  }
  return palettes;
}
/* Example usage */
const baseColor = {
  l: 50,
  c: 100,
  h: 5,
  mode: "lch"
};
const palettes = createPalettes(baseColor);

/** 
 * Converts the LCH palettes to HEX for browser compatibility.
  */
 


/* A discovery function that will take an array of colors and find the best palette matches within it. Analogous,tetradic etc */

function isColorEqual(c1, c2) {
  return c1.h === c2.h && c1.l === c2.l && c1.c === c2.c;
}

function discoverPalettes(colors) {
  const palettes = {};

  for (const color of colors) {
    const targetPalettes = createPalettes(color);

    for (const paletteType of Object.keys(targetPalettes)) {
      const palette = [];
      let variance = 0;
      for (const targetColor of targetPalettes[paletteType]) {
        /* Filter out colors already in the palette. */
        const availableColors = colors.filter((color1) => !palette.some((color2) => isColorEqual(color1, color2))
        );

        const match = nearest(availableColors, differenceEuclidean("lch"));
        (target)[0];
        variance += differenceEuclidean("lch")(targetColor, match);
        palette.push(match);
      }

      if (!palettes[paletteType] || variance < palettes[paletteType].variance) {
        palettes[paletteType] = {
          colors: palette, variance
        };
      }
    }
  }
  return palettes;
}

/* An algorithm for shifting hue.Ensures shades/tints of a color are vivid and impactful. It extends on the adjustHue function helper. */

function adjustHue(val) {
  if (val < 0)
    val += Math.ceil(-val / 360) * 360;
  return val % 360;
}

function map(n,start1,end1,start2,end2){
  return((n-start1)/(end1-start1))*(end2-start2)+start2
}


/**
 * Pass a base color,min/max lightness,and hue step params to  a createHueShiftPalette func(). The min/max lightness values determine how dark/light our palette will be at either extreme. The step controls how much the hue will shift at each color.
 * 
 * Store the base color in an array.
 * 
 * Createe a loop that iterates four times. Each iteration will add a darker shade to the start of the array and a lighter tint at the end. Here we use map() to calculate our lightness values-a function that takes a number that usually exists in one range and converts it to another- and increase or decrease the hue using hueStep variable. Again adjustHueStep() is used to ensure values are between 0 and 360.
   */
function createHueShiftPalette(opts){
  const {base,minLightness,maxLightness,hueStep} = opts;
  const palette = [base];
  for (let i = 1;i<5;i++){
    const hueDark = adjustHue(base.h-hueStep*i);

    const hueLight = adjustHue(base.h+hueStep*i);

    const lightnessDark = map(i,0,4,base.l,minLightness);

    const lightnessLight = map(i,0,4,base.l,maxLightness);

    const chroma = base.c;

    palette.push({l:lightnessDark,c:chroma,h:hueDark,mode:'lch'})
  }
  return palette;
}


/* Example usage */ 

const hueShiftPalette = createHueShiftPalette({base:{l:55,c:75,h:0,mode:'lch'},minLightness:10,maxLightness:90,hueStep:12});

const hueShiftPaletteHex = hueShiftPalette.map((color)=> formatHex(color));

console.log(hueShiftPaletteHex)



import { SVG } from '@svgdotjs/svg.js';
import { random, createVoronoiTessellation } from '@georgedoescode/generative-utils/dist/esm/index';





/* 
Inspired by George Francis.url
Setting up the canvas dimensions */
const width = 200;
const height = 200;


const svg = SVG().viewbox(0, 0, width, height);
svg.addTo('body');

/* Initializing the generating points. */

const points = [...Array(1024)].map(() => {
    return {
        x: random(0, width),
        y: random(0, height),
    };
});

points.forEach((point) => {
    svg.circle(2).cx(point.x).cy(point.y).fill("#1D1934");
});

/* Creating the  Voronoi tessellation */

const tessellation = createVoronoiTessellation({
    width,
    height,
    points,
    relaxInteractions: 6
});

const debug = true;

tessellation.cells.forEach((cell) => {
    if (debug) {
        svg.polygon(ceil.points).fill('none').stroke('#1D1934');
    }
});

/* Adding shapes to our pattern. */

tessellation.cells.forEach((cell) => {
    if (debug)
        svg.polygon(cell.points).fill('none').stroke('#000');
},
    svg.circle(cell.innerCircleRadius * 2).cx(cell.centroid.x).cy(cell.centroid.y).fill(random([/* Fill with color hex */]))
)
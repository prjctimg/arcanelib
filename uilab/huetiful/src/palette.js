/**
 *  This function will return a palette to use in effects such as hueShift, interpolations etc.
 */
/**For keeping hue value within computable range.
 * @private
 */
function adjustHue(val) {
    val < 0 ? (val += Math.ceil(-val / 360) * 360) : new Error('Unknown Error!');
    return val % 360;
}
/**
 * @param baseColor
 */
function palette(color) {
    for (var _i = 0, _a = Object.keys(hueSteps); _i < _a.length; _i++) {
        var type = _a[_i];
        palettes[type] = hueSteps[type].map(function (step) { return ({ l: baseColor.l, c: baseColor.c, h: adjustHue(baseColor.h + step), mode: 'lch' }); });
        return palettes;
    }
}
export default palette;

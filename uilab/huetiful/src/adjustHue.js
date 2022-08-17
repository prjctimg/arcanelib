function adjustHue(val) {
    if (val < 0)
        val += Math.ceil(-val / 360) * 360;

    return val % 360;
}
exports.adjustHue = adjustHue;

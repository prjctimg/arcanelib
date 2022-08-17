const path = require('path');

module.exports = {
    entry: './src/culoriPalette.js',
    output: {
        filename: 'palletteEmit.js',
        path: path.resolve(__dirname, 'build')

    }
}
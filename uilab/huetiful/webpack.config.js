const path = require('path');

module.exports = {
    entry: './src/blobs.js',
    output: {
        filename: 'blob.js',
        path: path.resolve(__dirname, 'build')

    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
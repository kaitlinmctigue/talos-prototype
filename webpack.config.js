var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, '');
var BUILD_DIR = path.resolve(__dirname, '');

module.exports = {
    entry: APP_DIR + '/src/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                },
                // match files based on pattern
                test: /\.js$/,
                // ignore files matching pattern
                exclude: /node_modules/
            }
        ]
    }
};
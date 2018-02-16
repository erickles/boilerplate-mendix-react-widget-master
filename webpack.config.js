'use strict';

var webpack = require('webpack'),
    path = require('path'),
    widget = require('./package.json').name,
    jsPath = 'src/widget',
    jsEntry = widget + '.jsx',
    buildPath = 'build/' + widget + '/widget',
    buildFile = widget + '.js';

var config = {
    target: 'web',
    entry: {
        app: path.join(__dirname, jsPath, jsEntry)
    },
    output: {
        libraryTarget: 'amd',
        path: path.resolve(__dirname, buildPath),
        publicPath: '',
        filename: buildFile
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/
            }
        ]
    },
    externals: {
        dojoBaseDeclare: "dojo/_base/declare",
        widgetBase: "mxui/widget/_WidgetBase"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
};

module.exports = config;

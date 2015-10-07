// Globals
var NODE_ENV = process.env.NODE_ENV || 'development';
var srcRoot = './src/';
var distRoot = './dist/';
var paths = {
    mainScript: srcRoot + 'main.ts',
    outBundle: distRoot + 'bundle.js'
};

// npm
var pkg = require('./package.json');
var webpack = require('webpack');


// Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var DefinePlugin = webpack.DefinePlugin;

module.exports = {
    entry: paths.mainScript,
    output: {
        path: distRoot,
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },
    devtool: 'source-map',
    debug: true,
    verbose: true,
    displayErrorDetails: true,
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.json$/, loader: 'json'},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]}
        ]
    },

    plugins: [
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            'VERSION': JSON.stringify(pkg.version)
        }),
        new CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        })
    ]
};
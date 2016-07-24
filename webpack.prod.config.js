var path = require('path');
var webpack = require('webpack');
var TARGET = process.env.TARGET || null;

var config = {
  entry: {
    index: './src/react-aria-ui.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'react-aria-ui.js',
    sourceMapFilename: 'react-aria-ui.sourcemap.js',
    library: 'ReactARIAUI',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
    { test: /\.(js|jsx)/, loader: 'babel?stage=0' }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
};

if (TARGET === 'minify') {
  config.output.filename = 'react-aria-ui.min.js';
  config.output.sourceMapFilename = 'react-aria-ui.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: {
      except: ['React', 'ReactDOM', 'ReactARIAUI']
    }
  }));
}

module.exports = config;

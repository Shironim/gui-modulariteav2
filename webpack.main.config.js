const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    fallback: { 
      fs: require.resolve("fs"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
    },
    extensions: ['.js', '.jsx'],
    alias: {
      path: require.resolve("path-browserify"),
      fs: require.resolve("fs"),
    }
  },
  
};

const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [
    { loader: 'style-loader' }, 
    { loader: 'css-loader' },
    { loader: 'postcss-loader' }
  ],
},
{
  test: /\.(png|jpe?g|gif|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: './',
        outputPath: 'assets/', // Modify this path if needed
      },
    },
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
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
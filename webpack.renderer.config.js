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
        publicPath: './src/assets/',
        outputPath: './src/assets/', // Modify this path if needed
      },
    },
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};

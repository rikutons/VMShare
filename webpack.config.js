const path = require('path');
const outputPath = path.resolve(__dirname, 'public');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  watchOptions: {
    ignored: /node_modules/
  },
  entry: './src/scripts/index.js',
  output: {
    path: outputPath,
    publicPath: "/",
    filename: 'app.min.js'
  },

  module: {
    rules: [{
      test: /\.s(a|c)ss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false,
            importLoaders: 2
          }
        },
        'sass-loader',
        'import-glob-loader'
      ]
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }]
    }]
  },
  
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true,
    open: true,
    watchContentBase: true
  }
};
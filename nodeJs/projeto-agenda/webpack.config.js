const path = require('path');

module.exports = {
  mode: 'production',
  entry: './frontend/main.js',
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.frontend.json'
        },
      },
    ],
  },
  resolve:{
    extensions: ['.tsx', '.ts', '.js']
  },
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'assets', 'js')
  },
  devtool: 'source-map'
}
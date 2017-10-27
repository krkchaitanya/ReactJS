const path = require('path');
module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015','react'],
            "plugins":  ["transform-object-rest-spread"]
        },
      }
    },
    {
  test: /\.(html)$/,
  use: {
    loader: 'html-loader'
  }
}
  ]
},
devServer: {
  contentBase: path.join(__dirname, "/"),
  port: 9009
}
};

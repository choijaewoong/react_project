module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true, // 직접 주소로 연결 할 경우 이슈 해결
    contentBase: __dirname + '/public/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            cacheDirectory: true,
            presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplaceMentPlugin()
  ]
};

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  context:path.resolve(__dirname,'client'),
  entry:{
      index:'./static/component/index.js'
    },
  output: {
        filename: 'js/[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'client/build'),
  },


  plugins:[
      new htmlWebpackPlugin({
          template:'view/index.html',
          filename:'index.html',
        })
  ],


  module:{
    rules:[
        {
            test:/\.css$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: {importLoaders: 1 } },
                'postcss-loader'
            ]
        },

        {
            test:/\.(png|svg|jpg|jpeg|gif)$/,
            use:[
                'file-loader'
            ]
        },

        {
            test:/\.(js|jsx)$/,
            use:[
                { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/react']} },             
            ]
        }
        
    ]
  }
};
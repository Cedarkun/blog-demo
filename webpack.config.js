const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件


module.exports = {
  mode:'development',
  context:path.resolve(__dirname,'client'),
  entry:{
      index:'./static/component/index.js'
    },
  output: {
        filename: 'assets/js/[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'client/build'),
  },


  plugins:[
      new htmlWebpackPlugin({
          template:'view/index.html',
          filename:'index.html',
        }),
        new miniCssExtractPlugin({
            filename: "assets/css/[name].css",
            chunkFilename: "[id].css"
        }),
        new optimizeCssAssetsPlugin()

  ],


  module:{
    rules:[
        {
            test:/\.css$/,
            use: [
                //'style-loader',
                miniCssExtractPlugin.loader,
                'css-loader'
                //{ loader: 'css-loader', options: {importLoaders: 1 } },
                //'postcss-loader'
            ]
        },

        {
            test:/\.(png|svg|jpg|jpeg|gif)$/,
            use:[
                {loader:'url-loader', options:{ name: 'image/[name].[ext]'}}
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
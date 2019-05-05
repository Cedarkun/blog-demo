const path = require('path'),
    webpack = require('webpack'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    miniCssExtractPlugin = require("mini-css-extract-plugin"),//提取css到单独文件的插件
    WebpackDevServerOutput = require('webpack-dev-server-output'),
    optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件


module.exports = {
  mode:'development',
  context:path.resolve(__dirname,'client'),
  entry:[
   // 'webpack-hot-middleware/client?noInfo=true&reload=true' ,
    './static/app/index.js'
  ],

  output: {
    filename: 'assets/js/[hash].js',
    path: path.resolve(__dirname, 'client/build')
  },
  devtool: 'source-map',
  plugins:[
      /*
      new htmlWebpackPlugin({
          template:'view/index.html',
          filename:'index.html',
        }),
        new miniCssExtractPlugin({
            filename: "assets/css/[name].css",
            chunkFilename: "[id].css"
        }),
        */
        new optimizeCssAssetsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),// 实现刷新浏览器必写
        new webpack.NoEmitOnErrorsPlugin(),
        
        new WebpackDevServerOutput({
            // 文件输出路径,这里设置为devServer服务路径的子路径
            // 这样就可以通过URL访问到了
            path: "./bulid/assets",
            // 重新编译时删除之前你的文件
            // 这里可能会有效率问题
            isDel: true
        })
        

  ],


  module:{
    rules:[
        {
            test:/\.css$/,
            use: [
                'style-loader',
                //miniCssExtractPlugin.loader,
                'css-loader'
                //{ loader: 'css-loader', options: {importLoaders: 1 } },
                //'postcss-loader'
            ]
        },

        {
            test:/\.(png|svg|jpg|jpeg|gif)$/,
            use:[
                {loader:'file-loader', options:{name: 'image/[name].[ext]', outputPath:'assets/image', publicPath:'../image/'}}
            ]
        },

        {
            test:/\.(js|jsx)$/,
            use:{ 
                loader: 'babel-loader', 
                options: { presets: ['@babel/preset-env', '@babel/react'],compact:true} 
            },             
        }
        
    ]
  }
};
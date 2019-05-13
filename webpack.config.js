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
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?noInfo=true&reload=true' ,
    './static/app/index.js'
  ],

  output: {
    filename: 'assets/js/[hash].js',
    path: path.resolve(__dirname, 'client/build')
  },
  devtool: 'source-map',
  plugins:[
       new htmlWebpackPlugin({
          template:'view/index.html',
          filename:'index.html',
        }),
        
        
        new miniCssExtractPlugin({
            filename: "assets/css/[name].css",
            chunkFilename: "[id].css"
        }),
        
        new optimizeCssAssetsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),// 实现刷新浏览器必写
        new webpack.NoEmitOnErrorsPlugin(),
        
        new WebpackDevServerOutput({
            // 文件输出路径,
            // 这样就可以通过URL访问到了
            path: "./client/build",//当前config文件路劲为基准
            // 重新编译时删除之前你的文件
            isDel: true
        })
        

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
            use:{
              loader:'file-loader', 
              options:{
                name: '[name].[ext]', 
                outputPath:'assets/image', 
                publicPath:'../image/'//打包输出文件引用路径
              }
            }
        },

        {
            test:/\.(js|jsx)$/,
            use:{ 
                loader: 'babel-loader', 
                options: { 
                  presets: ['@babel/preset-env', '@babel/react'],
                  compact:true,
                  plugins:[
                    

                    "react-hot-loader/babel",
                    ["import", { "libraryName": "antd", "style": true }],
                  ]  
                } 
            },             
        }
        
    ]
  },
  
  resolve: {
    extensions: ['.js', '.jsx'], //后缀名自动补全
  }
};
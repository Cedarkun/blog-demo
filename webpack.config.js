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
      //当webpack自动生成html文件的时候，会基于某个模板来进行。当然你也可以自定义自己的模板，
      //如果没有定义webpack会使用默认的模板.默认情况下webpack使用ejs模板
       new htmlWebpackPlugin({
          //template:'view/index.html',
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
            test:/\.(css)$/,
            exclude: /node_module/,
            use: [
                'style-loader',
                miniCssExtractPlugin.loader,
                'css-loader'
                //{ loader: 'css-loader', options: {importLoaders: 1 } },
                //'postcss-loader'
            ]
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 
            {loader:'less-loader',options:{modifyVars: {'primary-color': '#fb9593'},javascriptEnabled:true}}
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
            exclude: /node_module/,
            use:{ 
                loader: 'babel-loader', 
                options: { 
                  presets: [['@babel/preset-env'], '@babel/react'],
                  compact:true,
                  plugins:[ 
                    ["@babel/plugin-transform-runtime",
                      {
                        "helpers": false,
                        "regenerator": true,
                      }
                    ],
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
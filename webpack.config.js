const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const cssLoaders = extra => {
    const loaders = [
        {
           loader: MiniCssExtractPlugin.loader,
           options:{}
       }, 
           'css-loader',
     ]
     if(extra){
        loaders.push(extra)
     }

     return loaders;
}
module.exports = {
    context: path.resolve(__dirname,'src'),
    mode:'development',
    entry: {
        main: './index.js',
       
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
    new HTMLWebpackPlugin({
        template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test:/\.(ttf|woff|woff2|eot)$/,
                use:['file-loader']
            }
        ]
    }
}
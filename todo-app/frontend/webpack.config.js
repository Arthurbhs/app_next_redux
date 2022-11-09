const webpack = require('webpack')

const ExtracTextPlugin = require('extract-text-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        patch:_dirname + '/public',
        filename: './app.js'
    },

    devServer: {
        port: 8080,
        contentBase: './public',
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias:{
            modules:__dirname + '/node_modules'
        }
    },
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
     module:{
        loaders: [{
            text: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']

            }

        },{
            test: /\.css$/,
            lader: ExtracTextPlugin.extract('style-loader', 'css-loader')

        }, {
            tyest: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]

    }

}
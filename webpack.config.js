const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        popup: './app/popup/main.js',
        background: './app/background/main.js',
        account: './app/account/main.js'
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                config: './postcss.config.js'
                            }
                        }
                    ] 
                })
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true,
                    cssModules: {
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        cameCase: true
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('public'),
        new HtmlWebpackPlugin({
            chunks: ['popup'], 
            filename: 'popup.html',
            template: path.resolve(__dirname, 'app/popup/popup.html')
        }),
        new HtmlWebpackPlugin({
            chunks: ['account'],
            filename: 'account.html',
            template: path.resolve(__dirname, 'app/account/account.html')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'app/manifest.json')
            }, {
                from: path.resolve(__dirname, 'app/assets/images'),
                to: 'images'
            }, {
                from: path.resolve(__dirname, 'app/_locales'),
                to: '_locales'
            }
        ]),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ]
}
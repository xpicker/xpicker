const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        popup: './app/popup/main.js'
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name]-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    cssModules: {
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        cameCase: true
                    }
                }
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            config: './postcss.config.js'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['popup'], 
            filename: 'popup.html',
            template: path.resolve(__dirname, 'app/popup/popup.html')
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
        new CleanWebpackPlugin('public')
    ]
}
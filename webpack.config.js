const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        popup: path.join(__dirname, 'app/popup.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name]-bundle-[hash].js'
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
            template: path.resolve(__dirname, 'app/popup.html')
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'app/manifest.json')
            }, {
                from: path.join(__dirname, 'app/icons'),
                to: path.resolve(__dirname, 'public/icons')
            }, {
                from: path.join(__dirname, 'app/_locales'),
                to: path.resolve(__dirname, 'public/_locales')
            }
        ]),
        new CleanWebpackPlugin('public')
    ]
}
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        popup: './app/scripts/popup.js',
        background: './app/scripts/background.js',
        account: './app/scripts/account.js'
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'scripts/[name].js'
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
                                config: {
                                    path: './postcss.config.js'
                                }
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
            }, {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?name=fonts/[name].[hash:base64:5].[ext]'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('public'),
        new HtmlWebpackPlugin({
            chunks: ['popup'], 
            filename: 'views/popup.html',
            template: path.resolve(__dirname, 'app/views/popup.html')
        }),
        new HtmlWebpackPlugin({
            chunks: ['account'],
            filename: 'views/account.html',
            template: path.resolve(__dirname, 'app/views/account.html')
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'app/manifest.json')
            }, {
                from: path.resolve(__dirname, 'app/images'),
                to: 'images'
            }, {
                from: path.resolve(__dirname, 'app/styles'),
                to: 'styles',
                ignore: ['variables*']
            }, {
                from: path.resolve(__dirname, 'app/_locales'),
                to: '_locales'
            }
        ]),
        new ExtractTextPlugin({
            filename: 'styles/[name].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            styles: path.resolve(__dirname, 'app/styles'),
            lib: path.resolve(__dirname, 'app/lib'),
            components: path.resolve(__dirname, 'app/components')
        }
    }
}
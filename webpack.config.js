const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        popup: './app/popup/main.js',
        background: './app/background/main.js',
        login: './app/login/main.js'
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
                loader: extractTextPlugin.extract({
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
        new cleanWebpackPlugin('public'),
        new htmlWebpackPlugin({
            chunks: ['popup'], 
            filename: 'views/popup.html',
            template: path.resolve(__dirname, 'app/views/popup.html')
        }),
        new htmlWebpackPlugin({
            chunks: ['login'],
            filename: 'views/login.html',
            template: path.resolve(__dirname, 'app/views/login.html')
        }),
        new copyWebpackPlugin([
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
        new extractTextPlugin({
            filename: 'styles/[name].css'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            '~lib': path.resolve(__dirname, 'app/lib'),
            '~styles': path.resolve(__dirname, 'app/styles'),
            '~login': path.resolve(__dirname, 'app/login'),
            '~popup': path.resolve(__dirname, 'app/popup')
        }
    }
}
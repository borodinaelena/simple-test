const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true
                        }
                    }]

                })
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader:'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/'
                }
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css'],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            path: __dirname + '/dist',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            filename: "[name].css",
            disable: false,
            allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        port: 8080
    }
};
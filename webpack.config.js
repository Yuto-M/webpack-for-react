const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/js/index.js',
    },
    output: {
        filename: 'assets/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader'
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         {
            //             loader: MiniCssExtractPlugin.loader,
            //             options: {},
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 url: false,
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         }
            //     ]
            // }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css'
        }),
        new CopyWebpackPlugin(
            [
                // {
                //     from: 'images',
                //     to: 'assets/images',
                //     context: 'src/'
                // },
            ],
        ),
    ],
};

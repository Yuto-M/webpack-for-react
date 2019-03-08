const path = require('path');
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
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new CopyWebpackPlugin(
            [
                {
                    from: 'images',
                    to: 'assets/images',
                    context: 'src/'
                },
            ],
        ),
    ],
};

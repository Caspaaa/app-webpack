const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
mode: 'development',
entry: {
    index: './src/index.js'
},
devtool: 'inline-source-map',
devServer: {
    contentBase: './dist',
},
plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
    title: 'Development',
    template: './index.html'
    }),
],
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
},
module: {
    rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
        },
        {
        test: /\.css$/,
        use: [
            {
            loader: "style-loader"
            },
            {
            loader: "css-loader"
            }
        ]
        }
    ]
}
};
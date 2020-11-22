const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
mode: 'development',
entry: {
    index: './src/index.tsx'
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
resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
},
module: {
    rules: [
        {
        test: /\.(js|jsx|ts|tsx)$/,
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
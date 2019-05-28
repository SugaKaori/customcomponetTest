const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './customcomponetTest/footer/app/src/app.ts'),
    output: {
        path: path.resolve(__dirname, './customcomponetTest/footer/app/dist'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: __dirname + './customcomponetTest/footer/app/src/index.html',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts",".tsx",".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './customcomponetTest/footer/app/src/index.html'})
    ]
};
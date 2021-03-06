const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module : {
        rules: [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins: [
                            "react-hot-loader/babel",
                            "babel-plugin-jsx-control-statements"
                        ]
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]'
                        }

                    }
                ]
            },
            {
                test: /\.css$/,
                use : [
                    MiniCssExtractPlugin.loader,
                   'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        port: 8081,
    }
};
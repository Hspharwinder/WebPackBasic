const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

var DIST_DIR = path.resolve(__dirname, "dist"); // copy everything into dist folder
var SRC_DIR = path.resolve(__dirname, "app"); // where to find untransfile src code 

module.exports = {
    mode: 'development',
        entry: './src/index.js', // SRC_DIR + '\app/\index.js',
        output:{ 
            path: DIST_DIR, //also write like this path.resolve(__dirname, "dist"),
            filename: 'bundle.js'
            // publicPath: "/app/"
        },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,    // all js files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader" // babel-loader for transfile files
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};

/** with localhost  npm i webpack-dev-server */
//  "scripts": {
// "start": "webpack-dev-server --mode development --open --hot --port 6000",  by default port 8080
//     "build": "webpack --mode production"
//   }, 

/** without localhost */
//  "scripts": {
// "start": "webpack -w", 
//     "build": "webpack --mode production"
//   },

// https://blog.usejournal.com/setting-up-react-webpack-4-babel-7-from-scratch-2019-b771dca2f637
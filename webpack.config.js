 




// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     output: {
//         path: path.join(__dirname, '/dist'),
//         filename: 'index.bundle.js',
//     },
//     devServer: {
//         static: path.resolve(__dirname, 'src'),
//         port: 8080,
//         open: true,
//         hot: true

//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     'sass-loader',
//                 ],
//             }
//         ]
//     },
//     plugins: [new MiniCssExtractPlugin()],
// };


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: { static: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",//injects style into dom
           "css-loader",//turns css into common js
           "sass-loader", //turns sass to css
          ], 
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};

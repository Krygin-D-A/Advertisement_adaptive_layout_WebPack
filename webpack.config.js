const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: "./src/css/styles.css",
    output: {
        filename: "main-[contenthash].js",
        path: path.resolve(__dirname + "/dist") //path.resolve - concatenating
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "Advertisement_adaptive_layout_Krygin_D.A..html",
            inject: "body", // in the new version - <script> under the <body>
            template: "./src/Advertisement_adaptive_layout_Krygin_D.A..html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "site-[contenthash].css"
        }),
        new CopyPlugin({
            patterns: [
              { 
                  from: "./src/img/*.*",
                  to({ context, absoluteFilename }) {
                    return "img/[name][ext]";
                  },
              }
            ],
          })
    ],
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
}
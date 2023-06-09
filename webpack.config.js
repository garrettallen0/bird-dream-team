const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const mode = process.env.NODE_ENV === "production" ? "production" : "development";
  

module.exports = {
  mode: mode,
  context: __dirname,
  entry: {src: "./src/index.jsx"},
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"], ["@babel/preset-react"],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ 
    title: 'Development',
    template: "./src/index.html" 
  })],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: "/",
    },
    proxy: {
      '/addBirds': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/src/**': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/getBirds': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
};

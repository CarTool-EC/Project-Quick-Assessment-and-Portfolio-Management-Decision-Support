const path = require("path");
const fs = require("fs");

module.exports = {
  mode: "development",
  entry: (() => {
    const temp = {};
    const files = fs
      .readdirSync("./jsFE/")
      .map((file) => `./jsFE/${file}`);
    files.forEach((file) => {
      let name = file.split(".").slice(0, -1).join(".").split("/").slice(-1);
      temp[name] = ["core-js/fn/promise", file];
    });
    return temp;
  })(),
  devtool: "cheap-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./public/JSBuild"),
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",

                {
                  targets: {
                    ie: "10",
                  },
                },
              ],
            ],
            plugins: ["es6-promise"],
          },
        },
      },
    ],
  },
  target: ["web", "es5"],
};

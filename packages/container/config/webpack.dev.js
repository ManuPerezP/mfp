const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require('../package.json');

const devConfig = {
  mode: "development",
  output: {
    publicPath: 'http://localhost:8088/'
},
  devServer: {
    port: 8088,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8089/remoteEntry.js",
        auth: "auth@http://localhost:8087/remoteEntry.js",
        dashboard: 'dashboard@http://localhost:8090/remoteEntry.js',
      },
      shared: packageJson.dependencies //['react','react-dom']
    })
  ],
};

module.exports = merge(commonConfig, devConfig);

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  "extends": "@snowpack/app-scripts-react",
  // "plugins": [
  //   ["@snowpack/plugin-webpack",{
  //   extendConfig:(config)=>{
  //     config.plugins.push(new BundleAnalyzerPlugin())
  //     return config
  //   }
  // }]
  // ],
  // "scripts": { "bundle:*": "@snowpack/plugin-webpack" },
  "devOptions":{
    "bundle":false,
    "fallback": "./index.html",
  }
}

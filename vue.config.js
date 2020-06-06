const path = require("path");
// const chalk = require("chalk");
// const webpack = require("webpack");
// const env = process.env.NODE_ENV;
const resolve = (dir) => path.join(__dirname, './', dir);
// let publicPath=env==="production"?""
module.exports = {
    publicPath: '',
    outputDir: 'dist',
    assetsDir: "static",
    devServer: {
        port: 8080,
        proxy: {
            "/api": {
                target: "http://192.168.43.1",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    css: {
        loaderOptions: {
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@static", resolve("static"))
    }
};

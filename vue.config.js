const path = require("path");
// const chalk = require("chalk");
// const webpack = require("webpack");
// const env = process.env.NODE_ENV;
const resolve = (dir) => path.join(__dirname, './', dir);
// let publicPath=env==="production"?""
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
    publicPath: '',
    outputDir: 'dist',
    assetsDir: "static",
    lintOnSave:false,
    devServer: {
        port: 8080,
        open:true,
        proxy: {
            "/api": {
                target: "http://192.168.43.1",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
            "/ifol": {
                target: "http://10.10.254.161:8888",
                changeOrigin: true,
                pathRewrite: {
                    "^/ifol": ""
                }
            }
        },
    },
    css: {
        loaderOptions: {
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@static", resolve("static"))
    },
    configureWebpack: {
        plugins: [
            new MonacoWebpackPlugin({
                languages: ['javascript', 'css', 'html', 'typescript', 'json']
            }),
        ]
    }
};


const path = require('path');

module.exports = {
    //
    dev: {
        //
        assetsSubDirectory: 'static',
        //
        assetsPublicPath: '/',
        //
        proxyTable: {
            '/Web': {
                target: 'http://localhost:9093',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/Web': ''
                }
            }
        },
        //
        host: 'localhost',
        //
        port: 3000,
        //
        autoOpenBrowser: true,
        //
        errorOverlay: true,
        //
        poll: false,
        //
        devtool: '#eval-source-map',
        //
        cssSourceMap: false
    },
    //
    preview: {
        target: 'http://localhost:9093',
        port: 3001,
        host: '0.0.0.0',
        dir: '../dist',
        prefix: '/v1',
        debug: true
    }
}

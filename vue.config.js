module.exports = {
    publicPath:'./',
    outputDir: (process.env.NODE_ENV === "production")? 'dist' : 'test', // 不同的环境打不同包名
    productionSourceMap: false,
    devServer: {
        port: 8080, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            }
        }
    }
}
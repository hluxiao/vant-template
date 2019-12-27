module.exports = {
    publicPath:'./',
    outputDir: (process.env.NODE_ENV === "production")? 'dist' : 'test', // 不同的环境打不同包名
    productionSourceMap: false,
    devServer: {
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        proxy: {
            '/api': {    
                target: 'http://127.0.0.1:7300/mock/5df83c4e36786b49606baff6/example',  // 接口域名
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': ''   //需要rewrite的,
                }              
            }
        }
    }
}
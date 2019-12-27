module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8'
            ]
        },
        'postcss-pxtorem': {
            rootValue: 37.5, //根据设计稿的基准尺寸设置。一般是iphone6的375*667为基准或者2倍尺寸
            propList: ['*']
        }
    }
}
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports =function(app) {
    // app.use(
    //     createProxyMiddleware('/api',{
    //         target:'http://api.github.com/',
    //         changOrigin:true, // 控制服务器收到的响应头中host的值
    //         pathRewrite:{'^/api':''}
    //     })
    // )
}
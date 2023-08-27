
// const proxy = require('http-proxy-middleware')// 这是低版本的, 在最新的react上已经不能用了
const {createProxyMiddleware: proxy} = require('http-proxy-middleware');// 这是高版本的

module.exports = function(app){
	app.use(
		proxy('/api',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'http://localhost:5000', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api':''} //重写请求路径(必须), 就是把请求地址中/api1给替换成空字符串
		})
	)
}
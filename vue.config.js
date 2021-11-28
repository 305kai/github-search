module.exports = {
    pages:{
        index:{
            //入口
            entry: 'src/main.js'
        },
    },
    lintOnSave:false,  //关闭语法检查
    //开启代理服务器
    devServer:{
        proxy: {
			'/kai': {
				target: 'http://localhost:5000', // 接口的域名
				// secure: false,  // 如果是https接口，需要配置这个参数
				/* changeOrigin: true, */ // 如果接口跨域，需要进行这个参数配置
                //匹配，将头转为空
				pathRewrite: {
					'^/kai': ''
				}		
			},
            '/hui': {
				target: 'http://localhost:5001', // 接口的域名
				// secure: false,  // 如果是https接口，需要配置这个参数
				/* changeOrigin: true, */ // 如果接口跨域，需要进行这个参数配置
                //匹配，将头转为空
				pathRewrite: {
					'^/hui': ''
				}		
			}
		},
    }
}

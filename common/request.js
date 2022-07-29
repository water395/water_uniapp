// const { default: config } = require("uview-ui/libs/config/config");
module.exports = (vm) => {
	//初始化请求配置
	uni.$u.http.setConfig((config)=>{
		// config 为默认全局配置
		config.baseURL = "https://api.shop.eduwork.cn"; //根域名
		config.timeout = 60000;
		config.validateStatus = (statusCode) => statusCode >= 200 && statusCode < 300 ;// statusCode http状态码,此处示例为全局默认配置
		
		// console.log("初始化config",config);
		return config
	})
	
	//请求拦截
	uni.$u.http.interceptors.request.use((config)=>{
		//初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
		// console.log(config)
		config.data = config.data || {};
		console.log("请求拦截成功...设置token...")
		config.header.Authorization = "Bearer " +  vm.access_token
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		// if(config?.custom?.auth){
			 // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			 // config.header.token = vm.$store.state.userInfo.token
		//  }else{
		// 	 console.log("没有拦截")
		// }
		 return config
	},config => {
		return Promise.reject(config)
	})
	
	//响应拦截
	uni.$u.http.interceptors.response.use((response)=>{
		// console.log("返回完整数据对象结构",response);
		const { statusCode } = response;//状态码
		const res = response.data; //数据
		
		if(statusCode == 200){
			console.log("成功获取数据",res)
			return res === undefined ? [] : res 
		}
		
		//自定义参数
		const custom = response.config?.custom;
		
		if( statusCode !== 200 ){
			// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
			if(custom.toast !== false){
				uni.$u.toast(response.errMsg)
			}
		//如果需要catch返回，则进行reject
			if(custom?.catch){
				return Promise.reject(data)
			}else{
				// 否则返回一个pending中的promise，请求不会进入catch中
			    return new Promise(() => { })
			}
		}
	},(response) => {
		return Promise.reject(response)
	})
}

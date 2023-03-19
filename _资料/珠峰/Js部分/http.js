//axios创建默认的baseURL
axios.defaults.baseURL = "http://127.0.0.1:9999";

//axios创建默认的timeout
axios.defaults.timeout = 1000;

//axios创建默认的withCredentials
axios.defaults.withCredentials = false;

//axios创建默认的validateStatus
axios.defaults.validateStatus = function(status) {
	return status >= 200 && status < 400; // default
}

//判断是不是纯对象
const isPlainObject = function isPlainObject(obj) {
	let proto, Ctor;
	if (!obj || Object.prototype.toString.call(obj) !== "[object Object]") return false;
	proto = Object.getPrototypeOf(obj);
	if (!proto) return true;
	Ctor = proto.hasOwnProperty('constructor') && proto.constructor;
	return typeof Ctor === "function" && Ctor === Object;
};
//axios创建默认的transformRequest，只供post系列
axios.defaults.transformRequest = function(data) {
	if (isPlainObject(data)) {
		data = Qs.stringify(data)
	}
	return data;
}

// 添加请求拦截器
//在发送请求之前，要统一配置token
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
//对返回的数据进行统一处理
axios.interceptors.response.use(function (response) {
	//console.log(response,"111");//请求回来的具体数据
    // 对响应数据做点什么
    return response.data;//直接返回 response.data 然后让then来接收
  }, function (error) {
	  //console.dir(error);
	 //错误分类
	 //1. 有状态码的错误   error.response.status (404)
	 //2. 没有状态码的错误  error.response-->undefined
	 //   请求超时 code:"ECONNABORTED"
	 //   断网  navigator.onLine   true 浏览器有网   false 浏览器没网
	let err="未知错误1";
	if(error.response){//有状态码的错误
		switch (error.response.status){
			case 404:
			    err="找不到页面"
				break;
			case 500:
			    err="服务器问题"
				break;
			default:
			    err="未知错误2"
				break;
		}
	}else{//没有状态码的错误 
		if(error.code==="ECONNABORTED"){//请求超时
			err="请求超时"
		}else if(navigator.onLine==false){
			err="网络问题"
		}
	}
    return Promise.reject(err);
  });

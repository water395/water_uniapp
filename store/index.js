import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)

let lifeData = {};

try{
	lifeData = uni.getStorageSync("lifeData");
}catch(e){
	console.log(e)
}

//需求永久存储，且下次app启动需要取出的，在state中变量名
let saveStateKeys = [];

//保存变量到本地存储
const saveLifeData = function(key,value){
	//判断变量名是否在需要存储的数组中
	if(saveStateKeys.indexOf(key) != -1){
		let tmp = uni.getStorageInfoSync('lifeData');
		
		//第一次打开app,不存在lifeData变量，故放一个{}
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		
		//存储
		uni.setStorageSync("lifeData",tmp);
	}
}

export default new Vuex.Store({
	state:{},
	actions:{}
	mutations:{},
	getters:{},
	modules:{}
})
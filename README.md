# water_uniapp
学习uniapp
项目创建
（1）编译器直接创建
（2）命令行：vue create -p dcloudio/uni-preset-vue [文件名]

项目目录
pages 页面存放目录
static 静态文件资源目录
App.vue 应用入口文件
main.js 应用入口文件
manifest.json 项目的配置
common 存放公用文件
components 自定义组件
store vuex目录
unpackage 编译后的文件存放目录

条件编译
根据不同平台的条件编译

生命周期
应用的生命周期：
onLaunch ： 应用初始化完成执行，全局只执行一次
onShow：应用显示的时候执行，或者从后台进入前台
onHide：应用隐藏的时候执行，或者从前台进入后台

页面生命周期
onLoad
onReady
onShow
onHide
onunLoad
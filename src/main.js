/* 引入vue【此处的vue不是完整版】 */
import Vue from 'vue'
/* 引入App.vue */
import App from './App.vue'
/* 不提示开发者模式 */
Vue.config.productionTip = false

//全局配置混合
/* Vue.mixin(hunhe) */


/* 创建vue */
new Vue({
  el:'#app',
  /* 当引入的是运行版本的vue的时候，没有模板解析器，需要用render配置 */
  render: h => h(App),
  /* 安装全局事件总线 */
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})

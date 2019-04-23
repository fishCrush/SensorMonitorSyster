import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import vuex from "vuex";
import store from "./store/index";
import service from "./request";

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(iView);
// Vue.use(vuex);

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

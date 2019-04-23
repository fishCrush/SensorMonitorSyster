import Vue from "vue";
import Router from "vue-router";
import Project from "./views/index/project.vue";
import Index from "./views/index.vue";
import Login from "./views/account/login.vue";
import ForgetPw from "./views/account/forgetpw.vue";
import District from "./views/index/district.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/project'
    },
    {
      path:"/index",
      name:"index",
      component:Index,
      children:[
        {
          path:"project",
          name:"project",
          component:Project
        }
      ]
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/forgetPw",
      name:"forgetPw",
      component:ForgetPw
    },
    {
      path:"/districtDetail/:id",
      name:"district",
      component:District,
      meta: {
        title: "区域监控"
      }
    }
  ]
});

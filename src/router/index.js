import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Index";
import particles from "@/components/particles/particles";
import balloon from "@/components/c3Animation/balloon/balloon";
import firefly from "@/components/c3Animation/fireFly/firefly";
import heartLoading from "@/components/c3Animation/heartLoading/loading";

import demo1 from "@/components/h5Canvas/demo1/index"
Vue.use(Router);

export default new Router({
  routes: [
    {
      // meta: {
      //   requiresAuth: true //是否需要权限
      // },
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/particles",
      name: "particles",
      component: particles
    },
    {
      path: "/balloon",
      name: "balloon",
      component: balloon
    },
    {
      path: "/firefly",
      name: "firefly",
      component: firefly
    },
    {
      path: "/heartLoading",
      name: "heartLoading",
      component: heartLoading
    },
    {
      path:"/demo1",
      name:"demo1",
      component:demo1
    }
  ]
});

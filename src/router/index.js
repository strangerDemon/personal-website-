import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Index";
import particles from "@/components/particles/particles";
import balloon from "@/components/balloon/balloon";
import firefly from "@/components/fireFly/firefly";
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
    }
  ]
});

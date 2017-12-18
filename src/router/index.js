import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Index";

// css3 animation
import balloon from "@/components/c3Animation/balloon/balloon";
import firefly from "@/components/c3Animation/fireFly/firefly";
import heartLoading from "@/components/c3Animation/heartLoading/loading";
// h5 canvas
import drawImage from "@/components/h5Canvas/drawImage/drawImage";
import imageEnlarge from "@/components/h5Canvas/imageEnlarge/imageEnlarge";
import eatBeans from "@/components/h5Canvas/eatBeans/eatBeans.vue";
import timeBeans from "@/components/h5Canvas/timeBeans/timeBeans.vue"
import snake from "@/components/h5Canvas/snake/snake.vue"
// three js

//others
import particles from "@/components/others/particles/particles";
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
    // css3 animation
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
    // h5 canvas
    {
      path: "/drawImage",
      name: "drawImage",
      component: drawImage
    },
    {
      path: "/imageEnlarge",
      name: "imageEnlarge",
      component: imageEnlarge
    },
    {
      path: "/eatBeans",
      name: "eatBeans",
      component: eatBeans
    },
    {
      path: "/timeBeans",
      name: "timeBeans",
      component: timeBeans
    },
    {
      path: "/snake",
      name: "snake",
      component: snake
    },
    // three js
    //others
    {
      path: "/particles",
      name: "particles",
      component: particles
    }
  ]
});

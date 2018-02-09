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
import rectRotate from "@/components/h5Canvas/rectRotate/rectRotate.vue"
import kaleidoscope from "@/components/h5Canvas/kaleidoscope/kaleidoscope.vue"
import sixStars from "@/components/h5Canvas/sixStars/sixStars.vue"
import regularPolygons from "@/components/h5Canvas/regularPolygons/regularPolygons.vue"
// three js
import threeDemo1 from "@/components/three3D/learnDemo/demo1.vue"
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
    {
      path: "/rectRotate",
      name: "rectRotate",
      component: rectRotate
    },
    {
      path: "/kaleidoscope",
      name: "kaleidoscope",
      component: kaleidoscope
    },
    {
      path: "/sixStars",
      name: "sixStars",
      component: sixStars
    },
    {
      path: "/regularPolygons",
      name: "regularPolygons",
      component: regularPolygons
    },
    // three js
    {
      path: "/threeDemo1",
      name: "threeDemo1",
      component: threeDemo1
    },
    //others
    {
      path: "/particles",
      name: "particles",
      component: particles
    }
  ]
});

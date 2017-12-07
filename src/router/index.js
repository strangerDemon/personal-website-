import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/Index";
import particles from "@/components/particles/particles";
// css3 animation
import balloon from "@/components/c3Animation/balloon/balloon";
import firefly from "@/components/c3Animation/fireFly/firefly";
import heartLoading from "@/components/c3Animation/heartLoading/loading";
// h5 canvas
import drawImage from "@/components/h5Canvas/drawImage/drawImage";
import imageEnlarge from "@/components/h5Canvas/imageEnlarge/imageEnlarge";
import bgParticle from "@/components/h5Canvas/20171207/index.vue";

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
      path: "/bgParticle",
      name: "bgParticle",
      component: bgParticle
    }
  ]
});

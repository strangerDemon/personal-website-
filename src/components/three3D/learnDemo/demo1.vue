<template>
  <div id="WebGL-output" class="threeDemos">
  </div>
</template>
<script>
  import * as THREE from 'three';
  export default {
    name: "threeDemo1",
    directives: {},
    components: {},
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      init() {
        //创建一个场景（场景是一个容器，用于保存、跟踪所要渲染的物体和使用的光源）
        var scene = new THREE.Scene();

        //创建一个摄像机对象（摄像机决定了能够在场景里看到什么）
        var camera = new THREE.PerspectiveCamera(45,
          window.innerWidth / window.innerHeight, 0.1, 1000);

        //设置摄像机的位置，并让其指向场景的中心（0,0,0）//视野角度
        camera.position.x = 40;
        camera.position.y = 40;
        camera.position.z = 40;
        camera.lookAt(scene.position);

        //创建一个WebGL渲染器并设置其大小
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(new THREE.Color(0xaabbcc));
        renderer.setSize(window.innerWidth, window.innerHeight);

        //在场景中添加坐标轴 坐标系
        var axes = new THREE.AxisHelper(20);
        scene.add(axes);

        //创建一个平面
        var planeGeometry = new THREE.PlaneGeometry(60, 60); //长、宽
        //平面使用颜色为0xcccccc的基本材质
        var planeMaterial = new THREE.MeshBasicMaterial({ color: 0x426531 });
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        //设置屏幕的位置和旋转角度
        plane.rotation.x = -0.5 * Math.PI;
        //偏移
        // plane.position.x = 15;
        // plane.position.y = 0;
        // plane.position.z = 0;
        //将平面添加场景中
        scene.add("plane", plane);

        //矩形， 长宽高
        //THREE.BoxGeometry(length, width, height)
        // var cubeGeometry = new THREE.BoxGeometry(10, 10, 10); //矩形的长宽高
        // var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x654321,
        //   wireframe: true }); //将线框（wireframe）属性设置为true，这样物体就不会被渲染为实物物体
        // var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        // //设置立方体的位置 ，中心点的位置
        // cube.position.x = -5;
        // cube.position.y = 5;
        // cube.position.z = 0;
        // scene.add("cube", cube); //将立方体添加到场景中


        //球体 
        //THREE.SphereGeometry(10, 20, 20); //半径，经度，纬度
        // var sphereGeometry = new THREE.SphereGeometry(10, 20, 20); //半径，经度，纬度
        // //将线框（wireframe）属性设置为true，这样物体就不会被渲染为实物物体
        // var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x123456,
        //   wireframe: true }); //颜色，线框
        // var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        // //设置球体的位置
        // sphere.position.x = 10;
        // sphere.position.y = 10;
        // sphere.position.z = 0;
        // scene.add("sphere", sphere); //将球体添加到场景中

        
        //圆柱形 THREE.CylinderGeometry(radiusTop,radiusBottom,height,radiusSegments, heightSegments, openEnded)
        //顶面半径，底面半径，高，分数段竖向(越大越圆)，分数段横向，是否没有顶面和底面
        // let cylinderGeometry = new THREE.CylinderGeometry(5, 10, 10, 100, 5,
        //   false);
        // let cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x67C23A,
        //   wireframe: true }); //颜色，线框
        // let cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        // cylinder.position.x=20
        // cylinder.position.y = 5
        // cylinder.position.z=20
        // scene.add("cylinder", cylinder);

        //正四面体 ，radius是半径；detail是细节层次（Level of Detail）的层数
        /*let tetrahedronGeometry = THREE.TetrahedronGeometry(10)
        let tetrahedronMaterial = new THREE.MeshBasicMaterial({
          color: 0x409EFF,
          wireframe: true
        }); //颜色，线框
        let tetrahedron = new THREE.Mesh(tetrahedronGeometry,
          tetrahedronMaterial);
        tetrahedron.position.x = 0
        tetrahedron.position.y = 5
        tetrahedron.position.z = 0
        scene.add("tetrahedron", tetrahedron);*/

        //正八面体
        /*let octahedronGeometry = THREE.OctahedronGeometry(10)
        let octahedronMaterial = new THREE.MeshBasicMaterial({
          color: 0x409EFF,
          wireframe: true
        }); //颜色，线框
        let octahedron = new THREE.Mesh(octahedronGeometry,
          octahedronMaterial);
        octahedron.position.x = 0
        octahedron.position.y = 5
        octahedron.position.z = 0
        scene.add("octahedron", octahedron);*/
        //20面体
        // THREE.IcosahedronGeometry(radius, detail)

        //圆环面 THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
        // radius：圆环半径　
        // tube： 管道半径
        // radialSegments
        // 径向的分段数，
        // tubularSegments： 管的分段数，
        //　arc：圆环面的弧度，
        // let torusGeometry = THREE.TorusGeometry(3, 1, 4, 8);
        // let torusMaterial = new THREE.MeshBasicMaterial({
        //   color: 0x409EFF,
        //   wireframe: true
        // }); //颜色，线框
        // let torus = new THREE.Mesh(torusGeometry,
        //   torusMaterial);
        // torus.position.x = 0
        // torus.position.y = 5
        // torus.position.z = 0
        // scene.add("torus", torus);

        //圆环结 THREE.TorusKnotGeometry(radius,tube,radialSegments,tubularSegments, p, q, heightScale)
        // radius： 圆环半径　
        // tube： 管道半径　
        // radialSegments： 径向的分段数　
        // tubularSegments： 管的分段数　
        // p： p\ Q: 对knot(节) 状方式有效, 控制曲线路径缠绕的圈数， 其中p决定垂直方向的参数（ 可缺省）　　　　 q： 水平方向的参数（ 可缺省）　　　　
        //  heightScale： z轴方向上的缩放， 默认值1

        //将渲染的结果输出到指定页面元素中
        document.getElementById("WebGL-output").appendChild(renderer.domElement);
        //渲染场景
        renderer.render(scene, camera);
      }
    },
    beforeCreate() {},
    created() {},
    destroyed() {},
    mounted() {
      this.init();
    }
  }
</script>
<style lang="css"
       scoped>
</style>
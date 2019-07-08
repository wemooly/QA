import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect:'/echarts',
      component: () => import("../components/ShowQuestion.vue")
    },
    {
      path: "/showQuestion",
      component: () => import("../components/ShowQuestion.vue")
    },
    {
      path: "/addQuestion",
      component: () => import("../components/SearchSQL.vue")
    },
    {
      path: "/singleQusetion",
      component: () => import("../components/SingleQuestion.vue")
    },
    {
      path: "/webSoket",
      component: () => import("./../components/WebSoket.vue")
    },
    {
      path:"/eleTree",
      component:()=>import("./../components/eleTree")
    },
    {
      path:"/html",
      component:()=>import("./../components/htmlEdit")
    },{
      path:"/picture",
      component:()=>import("./../components/pictureUpload.vue")
    },{
      path:"/table",
      component:()=>import("./../components/TableFrom")
    },{
      path:"/echarts",
      component:()=>import("./../components/echarts")
    },{
      path:"/echarts22",
      component:()=>import("./../components/echarts22")
    },{
      path:"/upload",
      component:()=>import("./../components/upload.vue")
    },
    {
      path:"*",
      redirect:"/"
    }
  ],
  mode: "history",
})

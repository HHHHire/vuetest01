import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/page/Form'
import user from '@/components/page/user'
import echarts from '@/components/page/echarts'
import Error from '@/components/page/Error'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path:'/user',
      name:'user',
      component:user
    },
    {
      path:'/echarts',
      name:'echarts',
      component:echarts
    },
    {
      path:'*',
      name:'error',
      component:Error
    }


  ],
  
})

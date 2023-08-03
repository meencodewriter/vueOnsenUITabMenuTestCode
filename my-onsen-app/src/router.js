import Vue from 'vue'
import Router from 'vue-router'


import HomeThat from './views/HomeThat'
import AboutThat from './views/AboutThat'

Vue.use(Router)  //플러그인 등록

export default new Router({
    mode : 'history',
    routes : [
        //각 path 마다 연결시킬 component를 router를 통해 설정
        //router의 사용 선언은 main.js에서 해줄예정
        {
            path: '/ㄴ', 
            redirect: '/home' 
        },
        {
            path : '/home',
            component : HomeThat
        },
        {
            path : '/about',
            component : AboutThat
        }
    ]
}) 
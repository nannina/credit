import Vue from 'vue'

import {createRouter, createWebHistory} from 'vue-router'
 

// import index from '@/components/home/index'
import HelloWorld from '@/components/HelloWorld'
import buildingSceneLayer from '@/components/Layers/buildingSceneLayer' //建筑安全巡查 鉴定

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    // mode: 'hash',
    routes: [
        {
            path: '/',
            name: '首页',
            component: HelloWorld,
        },
        {
            path: '/buildingSceneLayer',
            name: 'buildingSceneLayer',
            component: buildingSceneLayer,
        }
    ]
})

export default router;
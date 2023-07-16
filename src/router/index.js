import Vue from 'vue'

import {createRouter, createWebHistory} from 'vue-router'
 

import HelloWorld from '@/components/HelloWorld'

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
    ]
})

export default router;
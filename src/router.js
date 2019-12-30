import Vue from 'vue'
import Router from 'vue-router'

import List from './pages/list.vue'
import Cart from './pages/cart.vue'
import Product from './pages/product.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '首页',
            component: List
        },
        {
            path: "/list",
            name: '商品列表',
            component: List
        },
        {
            path: "/cart",
            name: '购物车',
            component: Cart
        },
        {
            path: "/product/:id",
            name: '商品详情',
            component: Product
        }
    ]
})
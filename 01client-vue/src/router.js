import Vue from 'vue'
import Router from 'vue-router'
import BookView from '@/views/BookView'
import IndexView from '@/views/IndexView'
import Bookstore from '@/views/Bookstore'
import BookListView from '@/views/BookListView'
import ShopRegistView from '@/views/ShopRegistView'
import Booklistimgs from '@/views/Booklistimgs'
import RegisterView from '@/views/RegisterView'
import LoginView from '@/views/LoginView'
import ShoppingCar from '@/views/ShoppingCar'
import Settlement from '@/views/Settlement'

// Settlement

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/book',
            name: 'BookView',
            component: BookView
        }, {
            path: "/",
            name: "IndexView",
            component: IndexView
        }, {
            path: "/store",
            name: "Bookstore",
            component: Bookstore
        },
        {
            path: "/booklist",
            name: "BookListView",
            component: BookListView
        },
        {
            path: "/shopregist",
            name: "ShopRegistView",
            component: ShopRegistView
        },
        {
            path: "/booklistimgs",
            name: "Booklistimgs",
            component: Booklistimgs
        },
        {
            path: "/shoppingcar",
            name: "ShoppingCar",
            component: ShoppingCar
        },
        {
            path: "/register",
            name: "RegisterView",
            component: RegisterView
        },
        {
            path: "/login",
            name: "LoginView",
            component: LoginView
        },
        {
            path: "/settlement",
            name: "Settlement",
            component: Settlement
        }
    ]
})
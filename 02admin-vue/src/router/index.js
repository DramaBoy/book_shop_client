import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            // meta: { title: '自述文件' },
            children: [{
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: {
                        title: '基础表格'
                    }
                },
                {
                    path: '/products',
                    component: resolve => require(['../components/page/Products.vue'], resolve),
                    meta: {
                        title: '产品展示'
                    }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '产品添加' }
                },
                {
                    path: '/top',
                    component: resolve => require(['../components/page/Top.vue'], resolve),
                    meta: { title: '首页展示' }
                }
            ]
        },
        {
            path: '/',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
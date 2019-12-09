import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/index',
            name: 'index',
            component: () =>
                import ('../views/index'),
            children: [{
                path: '/home',
                name: 'home',
                component: () =>
                    import ('../views/home/home'),
                children: [{
                    path: '/goods',
                    name: 'goods',
                    component: () =>
                        import ('../views/goods/goods'),
                }],
                redirect: '/goods'
            }, ],
            redirect: '/home'
        },
        {
            path: '/',
            name: 'orderNum',
            component: () =>
                import ('../views/orderNum/orderNum'),
        },
        {
            path: '/comment',
            name: 'comment',
            component: () =>
                import ('../views/comment/comment'),
        },
        {
            path: '/pay',
            name: 'pay',
            component: () =>
                import ('../views/pay/pay'),
        },
    ]
})
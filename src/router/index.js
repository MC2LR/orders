import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        // 就餐人数选择
        {
            path: '/',
            name: 'orderNum',
            component: () =>
                import ('../views/orderNum'),
        },
        // 点餐页面
        {
            path: '/index',
            name: 'index',
            component: () =>
                import ('../views/index'),
            // 二级路由
            children: [{
                    path: '/pay',
                    name: 'pay',
                    component: () =>
                        import ('../views/components/pay/pay'),
                },
                {
                    path: '/comment',
                    name: 'comment',
                    component: () =>
                        import ('../views/components/comment/comment'),
                },
                {
                    path: '/home',
                    name: 'home',
                    component: () =>
                        import ('../views/components/home/home'),
                    // 三级路由
                    children: [{
                        path: '/goods',
                        name: 'goods',
                        component: () =>
                            import ('../views/components/goods/goods'),
                    }],
                    redirect: '/goods'
                }
            ],
            redirect: '/home'
        }
    ]
})
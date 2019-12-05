import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: () =>
                import ('../views/index'),
            children: [{
                path: '/goods',
                name: 'goods',
                component: () =>
                    import ('../views/goods/goods'),
            }, ],
            redirect: '/goods'
        },
        {
            path: '/orderNum',
            name: 'orderNum',
            component: () =>
                import ('../views/orderNum/orderNum'),
        },
        {
            path: '/comment',
            name: 'comment',
            component: () =>
                import ('../views/comment/comment'),
        }
    ]
})
export default [
    {
        // 订单列表
        path:'order/index',
        name:'OrderIndex',
        component:() => import('components/order/index.vue'),
        meta:{
            IsLogin:true
        }
    },
    {
        // 订单详情
        path:'order/info',
        component:() => import('components/order/info.vue'),
        meta:{
            IsLogin:true
        }
    },
    {
        // 查看物流
        path:'order/logistics',
        component:() => import('components/order/logistics.vue'),
        meta:{
            IsLogin:true
        }
    },
]
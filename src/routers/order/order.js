export default [
    {
        path:'order/index',
        name:'OrderIndex',
        component:() => import('components/order/index.vue'),
        meta:{
            IsLogin:true
        }
    },
    {
        path:'order/info',
        name:'OrderInfo',
        component:() => import('components/order/info.vue'),
        meta:{
            IsLogin:true
        }
    },
]
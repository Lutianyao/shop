export default [
    {
        path:'order/index',
        name:'OrderIndex',
        component:() => import('components/order/index.vue'),
    },
    {
        path:'order/info',
        name:'OrderInfo',
        component:() => import('components/order/info.vue'),
    },
]
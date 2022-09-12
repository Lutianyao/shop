export default [
    {
        // 所有商品
        path:'product/index',
        name:'ProductIndex',
        component:() => import('components/product/product/index.vue'),
    },
    {
        // 商品详情
        path:'product/info',
        name:'ProductInfo',
        component:() => import('components/product/product/info.vue'),
    },
]
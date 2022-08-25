export default [
    {
        path:'product/index',
        name:'ProductIndex',
        component:() => import('components/product/product/index.vue'),
    },
    {
        path:'product/info',
        name:'ProductInfo',
        component:() => import('components/product/product/info.vue'),
    },
]
export default [
    {
        path:'cart/index',
        name:'CartIndex',
        component:() => import('components/product/cart/index.vue'),
        meta:{
            IsLogin:true
        }
    },
]
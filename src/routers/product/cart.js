export default [
    {
        path:'cart/index',
        name:'CartIndex',
        component:() => import('components/product/cart/index.vue'),
        meta:{
            IsLogin:true
        }
    },
    {
        path:'cart/confirm',
        name:'CartConfirm',
        component:() => import('components/product/cart/confirm.vue'),
        meta:{
            IsLogin:true
        }
    },
]
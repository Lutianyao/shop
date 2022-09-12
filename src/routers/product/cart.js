export default [
    {
        // 购物车列表
        path:'cart/index',
        name:'CartIndex',
        component:() => import('components/product/cart/index.vue'),
        meta:{
            IsLogin:true
        }
    },
    {
        // 购物车结算
        path:'cart/confirm',
        name:'CartConfirm',
        component:() => import('components/product/cart/confirm.vue'),
        meta:{
            IsLogin:true
        }
    },
]
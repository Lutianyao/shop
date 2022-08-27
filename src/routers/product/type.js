export default [
    {
        path:'type/index',
        name:'TypeIndex',
        component:() => import('components/product/type/index.vue'),
        meta:{
            IsLogin:true
        }
    },
]
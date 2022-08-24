/* 
    收货地址
        列表
        新增
        编辑
*/
export default [
    {
        path:'address/index',
        name:'AddressIndex',
        component:() => import('components/user/address/index.vue'),
        meta:{
            IsLogin:true
        }
    },
    {
        path:'address/add',
        name:'AddressAdd',
        component:() => import('components/user/address/add.vue'),
        meta:{
            IsLogin:true
        }
    }
]
/* 
    收货地址
        列表
        新增
        编辑
*/
export default [
    {
        // 列表
        path: 'address/index',
        name: 'AddressIndex',
        component: () => import('components/user/address/index.vue'),
        meta: {
            IsLogin: true
        }
    },
    {
        // 新增
        path: 'address/add',
        name: 'AddressAdd',
        component: () => import('components/user/address/add.vue'),
        meta: {
            IsLogin: true
        }
    },
    {
        // 编辑
        path: 'address/edit',
        name: 'AddressEdit',
        component: () => import('components/user/address/edit.vue'),
        meta: {
            IsLogin: true
        }
    }
]
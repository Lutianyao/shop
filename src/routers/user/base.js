export default [
    {
        /* 
            index => 父路由
            base => 子集路由
            /user/base/index
        */
        path: 'base/index',// query 接收参数 path属性
        name: 'BaseIndex', // params 接收参数 name属性
        component: () => import('components/user/base/index.vue'),
        meta: {
            IsLogin: true
        }
    },
    // 注册
    {
        path: 'base/register',
        name: 'BaseRegister',
        component: () => import('components/user/base/register.vue')
    },
    // 登录
    {
        path: 'base/login',
        name: 'BaseLogin',
        component: () => import('components/user/base/login.vue')
    },
    // 修改资料
    {
        path: 'base/profile',
        name: 'BaseProfile',
        component: () => import('components/user/base/profile.vue')
    },
    // 邮箱认证
    {
        path: 'base/emailauth',
        name: 'BaseEmailauth',
        component: () => import('components/user/base/emailauth.vue')
    },
    // 消费记录
    {
        path: 'base/record',
        name: 'BaseRecord',
        component: () => import('components/user/base/record.vue')
    },
    // 充值中心
    {
        path: 'base/pay',
        name: 'BasePay',
        component: () => import('components/user/base/pay.vue')
    },
    // 充值记录
    {
        path: 'base/payrecord',
        name: 'BasePayrecord',
        component: () => import('components/user/base/payrecord.vue')
    },
]
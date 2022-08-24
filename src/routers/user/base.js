export default [
    {
        /* 
            index => 父路由
            base => 子集路由
            /user/base/index
        */
        path:'base/index',// query 接收参数 path属性
        name:'BaseIndex', // params 接收参数 name属性
        component: () => import('components/user/base/index.vue'),
        meta:{
            IsLogin:true
        }
    },
    // 注册
    {
        path:'base/register',
        name:'BaseRegister',
        component: () => import('components/user/base/register.vue')
    },
    // 登录
    {
        path:'base/login',
        name:'BaseLogin',
        component: () => import('components/user/base/login.vue')
    },
    // 修改资料
    {
        path:'base/profile',
        name:'BaseProfile',
        component: () => import('components/user/base/profile.vue')
    },
    
]
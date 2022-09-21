import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// Vant UI框架
import Vant from 'vant'
import 'vant/lib/index.css';

// 接口
import Api from './api/index'

// 路由
import Routers from './routers/index'

// cookies
import VueCookies from 'vue3-cookies'


var app = createApp(App)
    .use(Vant)
    .use(Api)
    .use(Routers)
    .use(VueCookies)
    .mount('#app')


Routers.beforeEach(async (to, form, next) => {
    var IsLogin = to.meta.IsLogin ? to.meta.IsLogin : false
    if (IsLogin) {
        let LoginUser = app.$cookies.get('LoginUser') ? app.$cookies.get('LoginUser') : {}

        if (!LoginUser || JSON.stringify(LoginUser) == '{}') {
            app.$notify({
                type: 'warning',
                message: '请先登录',
            })

            next('/user/base/login')
            return false
        }

        let userid = LoginUser.id ? LoginUser.id : 0
        let result = await app.$api.check({ userid: userid })
        if (result.code === 0) {
            app.$notify({
                type: 'warning',
                message: result.msg,
            })
            app.$cookies.remove('LoginUser')
            next('/user/base/login')
            return false
        }
        next()
    } else {
        next()
    }
})

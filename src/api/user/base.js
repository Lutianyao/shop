// 引入封装服务
import {GET,POST,UPLOAD} from '@/services/request.js'

// 导出接口
export default{
    // 登录
    login(data = {})
    {
        return POST({
            // api/user/base/login
            url:'/user/base/login',
            params:data
        })
    },
    // 注册
    register(data = {})
    {
        return POST({
            url:'/user/base/register',
            params:data
        })
    },
    // 登录验证
    check(data = {})
    {
        return POST({
            url:'/user/base/check',
            params:data
        })
    }
}
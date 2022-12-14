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
    },
    // 修改资料
    profile(data = {})
    {
        return UPLOAD({
            url:'/user/base/profile',
            params:data
        })
    },
    // 邮箱验证
    email(data = {})
    {
        return POST({
            url:'/user/base/email',
            params:data
        })
    },
    // 邮箱验证
    emailcode(data = {})
    {
        return POST({
            url:'/user/base/emailcode',
            params:data
        })
    },
    // 充值中心
    pay(data = {})
    {
        return POST({
            url:'/user/base/pay',
            params:data
        })
    },
    // 充值中心
    PayRecord(data = {})
    {
        return POST({
            url:'/user/base/payrecord',
            params:data
        })
    },
    // 消费记录
    Record(data = {})
    {
        return POST({
            url:'/user/base/record',
            params:data
        })
    }
}
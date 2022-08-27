// 引入封装服务
import {GET,POST,UPLOAD} from '@/services/request.js'

export default{
    CartIndex(data = {})
    {
        return POST({
            url:'/product/cart/index',
            params:data
        })
    },
    CartAdd(data = {})
    {
        return POST({
            url:'/product/cart/add',
            params:data
        })
    },
    CartStepper(data = {})
    {
        return POST({
            url:'/product/cart/stepper',
            params:data
        })
    }
}
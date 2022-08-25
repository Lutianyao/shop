// 引入封装服务
import {GET,POST,UPLOAD} from '@/services/request.js'

export default{
    ProductIndex(data = {})
    {
        return POST({
            url:'/product/product/index',
            params:data
        })
    },
    ProductInfo(data = {})
    {
        return POST({
            url:'/product/product/info',
            params:data
        })
    },
}
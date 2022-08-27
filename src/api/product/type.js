// 引入封装服务
import {GET,POST,UPLOAD} from '@/services/request.js'

export default{
    TypeIndex(data = {})
    {
        return POST({
            url:'/product/type/index',
            params:data
        })
    },
    TypeProduct(data = {})
    {
        return POST({
            url:'/product/type/product',
            params:data
        })
    },
}
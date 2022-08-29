// 引入封装服务
import {GET,POST,UPLOAD} from '@/services/request.js'

export default{
    OrderAdd(data = {})
    {
        return POST({
            url:'/order/order/add',
            params:data
        })
    }
}
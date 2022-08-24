// 引入封装服务
import {GET,POST,UPLOAD} from '@/services/request.js'

export default {
    HomeList(data = {})
    {
        return POST({
            url:'/home/index',
            params:data
        })
    }
}
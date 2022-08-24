// 引入封装服务
import {GET,POST,UPLOAD} from '@/services/request.js'

export default {
    AddressIndex(data = {}){
        return POST({
            url:'/user/address/index',
            params: data
        })
    },
    AddressAdd(data = {}){
        return POST({
            url:'/user/address/add',
            params: data
        })
    }
}
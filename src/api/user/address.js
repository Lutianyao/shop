// 引入封装服务
import {GET,POST,UPLOAD} from '@/services/request.js'

export default {
    AddressIndex(data = {}){
        return POST({
            url:'/user/address/index',
            params: data
        })
    },
    // 新增收货地址
    AddressAdd(data = {}){
        return POST({
            url:'/user/address/add',
            params: data
        })
    },
    // 设置默认地址
    AddressSelect(data = {}){
        return POST({
            url:'/user/address/select',
            params: data
        })
    },
    // 收货地址详情
    addressInfo(data = {}){
        return POST({
            url:'/user/address/info',
            params: data
        })
    },
    // 编辑收货地址
    AddressEdit(data = {}){
        return POST({
            url:'/user/address/edit',
            params: data
        })
    },
    // 删除收货地址
    AddressDelete(data = {}){
        return POST({
            url:'/user/address/delete',
            params: data
        })
    },
}
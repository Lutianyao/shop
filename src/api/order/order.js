// 引入封装服务
import { GET, POST, UPLOAD } from '@/services/request.js'

export default {
    // 订单列表
    OrderIndex(data = {}) {
        return POST({
            url: '/order/order/index',
            params: data
        })
    },
    // 新增订单（购物车）
    OrderAdd(data = {}) {
        return POST({
            url: '/order/order/add',
            params: data
        })
    },
    // 新增订单（立即购买）
    OrderGain(data = {}) {
        return POST({
            url: '/order/order/gain',
            params: data
        })
    },
    // 订单详情
    OrderInfo(data = {}) {
        return POST({
            url: '/order/order/info',
            params: data
        })
    },
    // 退货
    ProAfter(data = {}) {
        return POST({
            url: '/order/order/after',
            params: data
        })
    },
    // 确认收货
    Receipt(data = {}) {
        return POST({
            url: '/order/order/receipt',
            params: data
        })
    },
    // 评价
    Rate(data = {}) {
        return POST({
            url: '/order/order/rate',
            params: data
        })
    },
    // 删除订单
    Del(data = {}) {
        return POST({
            url: '/order/order/del',
            params: data
        })
    },
}
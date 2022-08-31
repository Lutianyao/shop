// 引入封装服务
import { GET, POST, UPLOAD } from '@/services/request.js'

export default {
    // 购物车页面
    CartIndex(data = {}) {
        return POST({
            url: '/product/cart/index',
            params: data
        })
    },
    // 加入购物车
    CartAdd(data = {}) {
        return POST({
            url: '/product/cart/add',
            params: data
        })
    },
    // 购物车页面商品数量加减
    CartStepper(data = {}) {
        return POST({
            url: '/product/cart/stepper',
            params: data
        })
    },
    CartDel(data = {}) {
        return POST({
            url: '/product/cart/del',
            params: data
        })
    },
    // 订单支付
    ConfirmList(data = {}) {
        return POST({
            url: '/product/cart/confirm',
            params: data
        })
    }
}
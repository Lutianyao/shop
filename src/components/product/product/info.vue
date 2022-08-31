<template>
    <van-nav-bar :title="info.name" left-arrow @click-left="onClickLeft" />

    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in info.thumbs_cdn" :key="index">
            <img :src="item">
        </van-swipe-item>
    </van-swipe>

    <div class="detailbox">
        <h4>{{ info.name }}</h4>
        <div class="price" v-if="info.vip_price">
            <em>￥</em>{{ info.vip_price }}<span>￥{{ info.price }}</span>
            <font>库存：{{ info.stock }}件</font>
        </div>
        <div class="price" v-else>
            <em>￥</em>{{ info.price }}<font>库存：{{ info.stock }}件</font>
        </div>
    </div>
    <div class="detailbox_2" v-html="info.content"></div>

    <van-action-bar style="max-width:512px">
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon icon="cart-o" :to="{path:'/product/cart/index',query:{action:'cart'}}" text="购物车" />
        <van-action-bar-button type="warning" text="加入购物车" @click="onCart" />
        <van-action-bar-button type="danger" text="立即购买" @click="onBuy"/>
    </van-action-bar>


</template>
<script>
export default {
    created() {
        // 获取商品id
        let proid = this.$route.query.proid
        // 赋值商品id
        this.proid = proid
        // 调用异步请求方法
        this.ProInfo()
    },
    data() {
        return {
            proid: 0,
            info: {},
            LoginUser: this.$cookies.get('LoginUser')
        }
    },
    methods: {
        // 点击返回
        onClickLeft() {
            this.$router.go(-1)
        },
        // 商品详情
        async ProInfo() {
            // 发起请求
            let result = await this.$api.ProductInfo({ proid: this.proid, userid: this.LoginUser ? this.LoginUser.id : 0 })
            // 判断结果
            if (result.code === 0) {
                this.$notify({
                    type: 'warning',
                    message: result.msg,
                })
                this.$router.go(-1)
                return false
            }
            // 将返回的结果赋值给info
            this.info = result.data
        },
        // 加入购物车
        async onCart() {
            // 判断是否登录状态
            if (!this.LoginUser || JSON.stringify(this.LoginUser) == '{}') {
                this.$toast.loading({
                    type: 'fail',
                    message: '请先登录',
                    onClose: () => {
                        this.$dialog.confirm({
                            message:
                                '是否需要登录？',
                        })
                            .then(() => {
                                this.$router.push('/user/base/login')
                            })
                            .catch(() => {

                            });
                    }
                })
                return false
            }
            // 封装数据
            let data = {
                proid: this.proid,
                userid: this.LoginUser.id
            }
            // 异步发起请求
            let result = await this.$api.CartAdd(data)
            if (result.code === 1) {
                this.$toast.loading({
                    type: 'success',
                    message: result.msg,
                    onClose: () => {
                        this.$dialog.confirm({
                            message: '是否跳转购物车？',
                        })
                            .then(() => {
                                this.$router.push({path:'/product/cart/index',query:{action:'cart'}})
                            })
                            .catch(() => {

                            });
                    }
                })
                return false
            } else {
                this.$notify({
                    type: 'warning',
                    message: result.msg,
                })
            }
        },
        async onBuy(){
            // 判断是否登录状态
            if (!this.LoginUser || JSON.stringify(this.LoginUser) == '{}') {
                this.$toast.loading({
                    type: 'fail',
                    message: '请先登录',
                    onClose: () => {
                        this.$dialog.confirm({
                            message:
                                '是否需要登录？',
                        })
                            .then(() => {
                                this.$router.push('/user/base/login')
                            })
                            .catch(() => {

                            });
                    }
                })
                return false
            }
            
            this.$router.push({ path: '/product/cart/confirm', query: { proid: this.proid } })
        }
    },
}
</script>
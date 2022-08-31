<template>
    <van-nav-bar title="订单详情" left-arrow @click-left="onClickLeft" />

    <div class="near-box">

        <div class="jd-qrdd-bigbox">
            <!--商品地址管理部分-->
            <div class="indent-details-box">
                <span class="indent-details-img1"></span>
                <span class="indent-details-text1">已发货</span>
                <span class="indent-details-text2">物流信息：客户签收人：邮件收发 已签收 感谢使用圆通快递，期待再次为您服务！</span>
                <span class="indent-details-text3">2017-10-23 12:25:12</span>
            </div>

            <!--地址部分-->
            <div class="jd-qrdd-a1">
                <span class="qrdd-a1-t1">{{  Order.address.consignee  }}</span>
                <span class="qrdd-a1-t1">{{  Order.address.mobile  }}</span>
                <!-- <span class="qrdd-a1-t2">默认</span> -->
                <div class="qrdd-a1-b1">
                    <span class="qrdd-a1-img1"></span>
                    <span class="qrdd-a1-t3">{{  Order.address.region_text  }} {{  Order.address.address  }}</span>
                </div>
                <span class="qrdd-a1-img2"></span>
            </div>
            <!--商品部分-->
            <div class="zjzz-buylist-goods1" v-for="item in OrderProduct" :key="item.id">
                <!-- <div class="zjzz-buylist-gtime">
                    <span class="zjzz-buylist-gtime1"><i class="indent-details-img2"></i>保洁官方旗舰店</span>
                    <span class="zjzz-buylist-gtime2">联系客服</span>
                </div> -->
                <div class="zjzz-buylist-det">
                    <img :src="item.products.cover_cdn" />
                    <div class="zjzz-buylist-gdetail">
                        <span class="zjzz-buylist-gtit1">{{  item.products.name  }}</span>
                        <span class="zjzz-buylist-gmoney">
                            <i class="zjzz-buylist-gm1">￥{{  item.total  }}</i>
                            <i class="zjzz-buylist-gm2">x{{  item.nums  }}</i>
                        </span>
                    </div>
                </div>
                <div class="zjzz-buylist-btn">
                    <a class="zjzz-buylist-btn3">申请售后</a>
                </div>
            </div>
            <!--商品金额部分-->
            <div class="indent-details-box2">
                <span class="indent-details-text4">应付总额</span>
                <span class="indent-details-text5">￥{{  Order.total  }}</span>
            </div>
            <div class="indent-details-box2">
                <span class="indent-details-text4 tcolor-grey">商品总价</span>
                <span class="indent-details-text5 tcolor-black">￥{{  Order.total  }}</span>
            </div>
            <!--订单编号部分-->
            <div class="indent-details-box3">
                <p>订单编号:{{  Order.code  }}</p>
                <p>下单时间:{{  Order.createtime  }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        let orderid = this.$route.query.orderid
        this.orderid = orderid
        this.Info()
    },
    data() {
        return {
            orderid: 0,
            Order: {
                address:{}
            },
            OrderProduct: {}
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/order/order/index')
        },
        async Info() {
            let data = {
                orderid: this.orderid
            }
            let result = await this.$api.OrderInfo(data)
            if (result.code === 0) {
                this.$notify({
                    type: 'warning',
                    message: result.msg,
                })
                this.$router.go(-1)
                return false
            }
            // 订单数据
            this.Order = result.data.Order
            // 订单商品数据
            this.OrderProduct = result.data.OrderProduct
        }
    },
}
</script>
<style>
@import url('/assets/css/indent-details.css');
</style>
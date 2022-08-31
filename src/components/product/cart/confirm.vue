<template>

    <van-nav-bar title="订单结算" left-arrow @click-left="onClickLeft" />
    <van-contact-card type="edit" :name="address.consignee" :tel="address.mobile" @click="onOrder"
        v-if="JSON.stringify(address) != '{}'" />

    <van-contact-card type="add" @click="onOrder" v-else />
    <!-- from购物车 -->
    <van-card v-if="this.ids.length > 0" v-for="item in list" :key="item.id" :num="item.nums" :price="item.total"
        desc="描述信息" :title="item.product.name" :thumb="item.product.cover_cdn">
        <template #desc>
            <span>商品单价：￥{{  item.price  }}</span>
        </template>
    </van-card>
    <!-- from立即购买 -->
    <van-card v-else :price="product.price" :num="1" desc="描述信息" :title="product.name" :thumb="product.cover_cdn">
        <template #desc>
            <span>商品单价：￥{{  product.price  }}</span>
        </template>
    </van-card>
    <van-field v-model="content" rows="2" autosize label="订单备注" type="textarea" maxlength="50" label-width="60"
        placeholder="请输入订单备注" show-word-limit colon />

    <van-submit-bar :price="total" button-text="结算" @submit="onSubmit" />

</template>
<script>
export default {
    created() {
        // 接收cookie的默认收货地址
        let address = this.$cookies.get('address') ? this.$cookies.get('address') : {}
        // 接收从购物车带来的购物车id
        let ids = this.$route.query.ids ? this.$route.query.ids : ''
        // 接收从商品详情页带来的商品id
        let proid = this.$route.query.proid ? this.$route.query.proid : 0
        this.ids = ids
        this.proid = proid
        // 加载完成时调用请求
        this.Confirm()
        if (JSON.stringify(address) != '{}') {
            this.address = address
        } else {
            this.Address()
        }
    },
    data() {
        return {
            address: {},
            LoginUser: this.$cookies.get('LoginUser'),
            content: '',
            list: [],
            ids: '',
            proid: 0,
            product: {}
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        // 点击去切换收货地址
        onOrder() {
            this.$router.push({ path: '/user/address/index', query: { action: 'order' } })
        },
        // 异步请求查询默认收货地址
        async Address() {
            let result = await this.$api.AddressOrder({ userid: this.LoginUser.id })

            if (result.code === 1) {
                this.address = result.data
            }
        },
        // 异步请求查询订单商品数据
        async Confirm() {
            if (this.ids.length > 0) {
                let result = await this.$api.ConfirmList({ ids: this.ids })

                if (result.code === 0) {
                    this.$notify({
                        type: 'warning',
                        message: result.msg,
                    })
                    return false
                }
                this.list = result.data
            } else {
                let data = {
                    action: 'info',
                    proid: this.proid
                }
                let result = await this.$api.ConfirmList(data)
                if (result.code === 0) {
                    this.$notify({
                        type: 'warning',
                        message: result.msg,
                    })
                    return false
                }
                this.product = result.data
            }

        },
        // 处理订单数据
        async onSubmit() {
            if (this.ids.length > 0) {
                // 订单数据
                let data = {
                    userid: this.LoginUser.id, // 下单用户
                    cartid: this.ids,
                    addrid: this.address.id,
                    content: this.content
                }

                let result = await this.$api.OrderAdd(data)

                if (result.code === 1) {
                    this.$notify({
                        type: 'success',
                        message: result.msg,
                        onClose: () => {
                            this.$router.push({ path: '/order/order/info', query: { orderid: result.data.orderid } })
                        }
                    })
                } else {
                    this.$notify({
                        type: 'warning',
                        message: result.msg,
                    })
                }
            } else {
                let data = {
                    userid: this.LoginUser.id, // 下单用户
                    proid: this.proid,
                    addrid: this.address.id,
                    content: this.content
                }
                let result = await this.$api.OrderGain(data)
                if (result.code === 1) {
                    this.$notify({
                        type: 'success',
                        message: result.msg,
                        onClose: () => {
                            this.$router.push({ path: '/order/order/info', query: { orderid: result.data.orderid } })
                        }
                    })
                } else {
                    this.$notify({
                        type: 'warning',
                        message: result.msg,
                    })
                }
            }


        }
    },
    // 计算属性
    computed: {
        total() {
            let total = 0
            if (this.list.length > 0) {
                for (let item of this.list) {
                    total += parseFloat(item.total)
                }
            }else{
                total = this.product.price
            }
            return total * 100
        }
    }
}
</script>
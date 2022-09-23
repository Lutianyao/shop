<template>
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />

    <van-tabs v-model:active="active" @change="onTab">
        <van-tab v-for="item in tarList" :title="item.title" :name="item.name">
        </van-tab>
    </van-tabs>
    <div class="list-box">
        <div class="list" v-if="OrderList.length > 0">
            <div class="item" v-for="item in OrderList" :key="item.id">
                <div class="header">
                    <div class="left">订单号：<span>{{ item.code }}</span></div>
                    <div class="right">{{ item.status_text }}</div>
                </div>
                <div class="content">
                    <van-card v-for="son in item.OrderProduct" :key="son.id" :num="son.nums" :price="son.total"
                        desc="描述信息" :title="son.products.name" :thumb="son.products.cover_cdn">
                        <template #desc>
                            <span>商品单价：￥{{ son.price }}</span>
                        </template>
                    </van-card>
                </div>
                <div class="footer">
                    <div class="date">{{ item.createtime }}</div>
                    <div class="btn">
                        <van-button type="primary" size="mini" color="#7232dd"
                            :to="{ path: '/order/order/info', query: { orderid: item.id } }">订单详情</van-button>
                        <van-button type="primary" size="mini" @click="onAfter({ orderid: item.id })" v-if="item.status >= 1 && item.status <= 4">申请退货
                        </van-button>
                        <van-button type="primary" size="mini"
                            v-if="(item.status >= 2 && item.status <= 4) || item.status < 0">查看物流</van-button>
                        <van-button type="primary" size="mini" v-if="item.status == 2">确认收货</van-button>
                        <van-button type="primary" size="mini" v-if="item.status == 3">立即评价</van-button>
                        <van-button type="danger" size="mini" v-if="item.status >= 3">删除订单</van-button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    created() {
        this.OrderData()
    },
    data() {
        return {
            active: 0,
            tarList: [
                {
                    title: '全部',
                    name: 0
                },
                {
                    title: '已支付',
                    name: 1
                },
                {
                    title: '已发货',
                    name: 2
                },
                {
                    title: '已收货',
                    name: 3
                },
                {
                    title: '已评价',
                    name: 4
                },
                {
                    title: '申请退货',
                    name: -2
                },
                {
                    title: '已退货',
                    name: -1
                },
                {
                    title: '退货被拒',
                    name: -3
                },
            ],
            OrderList: [],
            LoginUser: this.$cookies.get('LoginUser'),
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/user/base/index')
        },
        async OrderData() {
            let result = await this.$api.OrderIndex({ userid: this.LoginUser.id, status: this.active })

            if (result.code === 1) {
                this.OrderList = result.data
            }
        },
        onTab() {
            this.OrderData()
        },
        onAfter(value){
            this.$dialog.confirm({
                message:
                    '确定申请退货？',
            })
                .then(async () => {
                    let result = await this.$api.ProAfter(value)
                    this.$toast(result.msg);
                    setTimeout(() => {
                        location.reload();
                    }, 1500);
                })
                .catch(() => {
                    // on cancel
                });
        }
    },
}
</script>
<style>
.list-box {
    background: #ccc;
}

.list-box .header {
    display: flex;
    justify-content: space-between;

}

.list .item .left span {
    font-size: 14px;
    font-weight: bold;
}

.item {
    padding: 5px 10px 3px;
    background: #fff;
    margin-bottom: 5px;
}

.item .header .left {
    font-size: 13px;
}

.item .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.item .footer .date {
    font-weight: bold;
}
.item .footer .btn {
    display: flex;
}
.item .footer .btn button{
    padding: 0px 3px;
}
</style>
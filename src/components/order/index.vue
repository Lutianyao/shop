<template>
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />

    <van-tabs v-model:active="active">
        <van-tab v-for="item in tarList" :title="item.title" :key="item.name">
        </van-tab>
    </van-tabs>


</template>
<script>
export default {
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
            ]
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push('/user/base/index')
        }
    },
}
</script>
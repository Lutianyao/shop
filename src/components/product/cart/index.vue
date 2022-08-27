<template>
    <van-nav-bar title="购物车" left-arrow v-if="action == 'cart'" @click-left="onClickLeft" />

    <van-nav-bar title="购物车" v-else />

    <van-checkbox-group v-model="checked">
        <div v-if="CartList.length > 0">
            <van-swipe-cell v-for="item in CartList" :key="item.id">
                <van-card :price="item.total" :title="item.product.name" class="goods-card">
                    <template #thumb>
                        <van-checkbox :name="item.id" class="checkbox"></van-checkbox>
                        <img :src="item.product.cover_cdn">
                    </template>

                    <template #num>
                        <van-stepper v-model="item.nums" @change="onStepper({ cartid: item.id, nums: item.nums })" />
                    </template>

                    <template #desc>
                        <span>商品单价：￥{{ item.price }}</span>
                    </template>
                </van-card>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" />
                </template>
            </van-swipe-cell>
        </div>

        <van-empty description="购物车空空如也" v-else />

    </van-checkbox-group>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" :class="action ? '' : 'bar'">
        <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>

    <Tab v-if="!action" />
</template>

<script>
import Tab from 'components/common/Tab.vue'
export default {
    components: {
        Tab
    },
    created() {
        let action = this.$route.query.action

        this.action = action

        this.CartData()
    },
    data() {
        return {
            action: '',
            checked: [],
            CartList: [],
            LoginUser: this.$cookies.get('LoginUser')
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        async CartData() {
            let result = await this.$api.CartIndex({ userid: this.LoginUser.id })

            if (result.code === 1) {
                this.CartList = result.data
            }
        },
        async onStepper(value) {
            let result = await this.$api.CartStepper(value)

            if (result.code === 1) {
                this.CartData()
            }
        },
        onSubmit() {

        }
    },
}
</script>

<style>
.goods-card {
    margin: 0;
    background-color: white;
}

.delete-button {
    height: 100%;
}

.van-card__thumb {
    display: flex;
    width: auto;
}

.van-card__thumb img {
    width: 88px;
    margin-left: 10px;
}

.bar {
    bottom: 50px;
}
</style>
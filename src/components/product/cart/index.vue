<template>
    <van-nav-bar title="购物车" left-arrow v-if="action == 'cart'" @click-left="onClickLeft" />

    <van-nav-bar title="购物车" v-else />

    <van-checkbox-group v-model="checked" ref="group">
        <div v-if="CartList.length > 0">
            <van-swipe-cell v-for="item in CartList" :key="item.id">
                <van-card :price="item.total" :title="item.product.name" class="goods-card">
                    <template #thumb>
                        <van-checkbox :name="item.id" class="checkbox" @click="onCheck"></van-checkbox>
                        <img :src="item.product.cover_cdn">
                    </template>

                    <template #num>
                        <van-stepper v-model="item.nums" @change="onStepper({ cartid: item.id, nums: item.nums })" />
                    </template>

                    <template #desc>
                        <span>商品单价：￥{{  item.price  }}</span>
                    </template>
                </van-card>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button"
                        @click="onDel({ cartid: item.id })" />
                </template>
            </van-swipe-cell>
        </div>

        <van-empty description="购物车空空如也" v-else />

    </van-checkbox-group>

    <van-submit-bar v-if="CartList.length > 0" :price="total" button-text="提交订单" @submit="onSubmit"
        :class="action ? '' : 'bar'">
        <van-checkbox v-model="checkbox" @click="onChecked">{{  checkbox ? '取消全选' : '全选'  }}</van-checkbox>
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
            LoginUser: this.$cookies.get('LoginUser'),
            checkbox: false
        }
    },
    // 计算属性
    computed: {
        total() {
            if (this.checked.length <= 0) {
                return 0
            }

            let total = 0

            for (let item of this.CartList) {
                // php in_array
                if (this.checked.includes(item.id)) {
                    total += parseFloat(item.total)
                }
            }

            return total * 100
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        // 查询购物车数据
        async CartData() {
            let result = await this.$api.CartIndex({ userid: this.LoginUser.id })

            if (result.code === 1) {
                this.CartList = result.data
            }
        },
        // 增减商品数量
        async onStepper(value) {
            let result = await this.$api.CartStepper(value)

            if (result.code === 1) {
                this.CartData()
            }
        },
        // 单选
        onCheck(){
            if (this.checked.length ==this.CartList.length) {
                this.checkbox=true
            }else{
                this.checkbox=false
            }
        },
        // 结算按钮
        onSubmit() {
            if (this.checked.length <= 0) {
                this.$notify({
                    type: 'warning',
                    message: '请选择商品结算',
                })
                return false
            }
            // 将多选的购物车id数组转为字符串
            let ids = this.checked.join(',')
            this.$router.push({ path: '/product/cart/confirm', query: { ids: ids } })
        },
        // 全选
        onChecked() {
            if (this.checkbox) {
                this.$refs.group.toggleAll(true)
            } else {
                this.$refs.group.toggleAll(false)
            }
        },
        // 删除
        onDel(value) {
            this.$dialog.confirm({
                message:
                    '确定将商品移出购物车？',
            })
                .then(async () => {
                    let result = await this.$api.CartDel(value)
                    this.$toast(result.msg);
                    location.reload();
                })
                .catch(() => {
                    // on cancel
                });
                
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
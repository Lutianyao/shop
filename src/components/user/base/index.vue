<template>
    <div class="myBox" :style="{ background: 'url(' + LoginUser.cover + ')' }">
        <div class="L"><img :src="LoginUser.avatar" /></div>
        <div class="C">
            <div class="tit">{{ LoginUser.nickname }}</div>
            <div class="sub">{{ LoginUser.email }}</div>
        </div>
        <div class="R"><img src="/assets/images/go.png" /></div>
    </div>
    <div class="allkbox"></div>
    <div class="myboxcon" @click="onProfile">
        <p>基本资料</p>
        <img src="/assets/images/go.png">
    </div>
    <div class="myboxcon" @click="onemailauth">
        <p>邮箱认证</p>
        <img src="/assets/images/go.png">
    </div>
    <div class="myboxcon" @click="Address">
        <p>我的收货地址</p>
        <img src="/assets/images/go.png">
    </div>
    <div class="myboxcon" @click="Order">
        <p>我的订单</p>
        <img src="/assets/images/go.png">
    </div>
    <div class="myboxcon" @click="onRecord">
        <p>消费记录</p>
        <img src="/assets/images/go.png">
    </div>
    <div class="myboxcon" @click="onPay">
        <p>充值中心</p>
        <img src="/assets/images/go.png">
    </div>
    <div class="myboxcon" @click="onPayRecord">
        <p>充值记录</p>
        <img src="/assets/images/go.png">
    </div>
    <div class="myboxcon" @click="onLogout">
        <p>注销登录</p>
        <img src="/assets/images/go.png">
    </div>
    <Tab />
</template>
<script>
import Tab from 'components/common/Tab.vue'
export default {
    components: {
        Tab
    },
    data() {
        return {
            LoginUser: this.$cookies.get('LoginUser') ? this.$cookies.get('LoginUser') : {}
        }
    },
    methods: {
        onLogout() {
            this.$dialog.confirm({
                message: '确认退出账号'
            }).then(() => {

                this.$notify({
                    type: 'success',
                    message: '退出成功',
                    onClose: () => {

                        this.$cookies.remove('LoginUser')

                        this.$router.push('/')
                    }
                })
            }).catch(() => {
                
            })
        },
        onProfile() {
            // 设置跳转路由
            this.$router.push('/user/base/profile')
        },
        onemailauth() {
            this.$router.push('/user/base/emailauth')
        },
        Address() {
            this.$router.push('/user/address/index')
        },
        Order() {
            this.$router.push('/order/order/index')
        },
        onRecord() {
            this.$router.push('/user/base/record')
        },
        onPay() {
            this.$router.push('/user/base/pay')
        },
        onPayRecord() {
            this.$router.push('/user/base/payrecord')
        }
    },
}
</script>
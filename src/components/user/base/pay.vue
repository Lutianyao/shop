<template>
    <!-- 导航栏 -->
    <van-nav-bar title="充值中心" left-arrow @click-left="back" />

    <div role="alert" class="van-notice-bar">
        <i class="van-badge__wrapper van-icon van-icon-warning van-notice-bar__left-icon">
        </i>
        <div role="marquee" class="van-notice-bar__wrap">
            <div class="van-notice-bar__content" style="transition-duration: 0s;">公告：未满18岁的未成年人请勿消费</div>
        </div>
    </div>
    <div class="van-cell van-cell--large">
        <i class="van-badge__wrapper van-icon van-icon-gold-coin van-cell__left-icon"></i>
        <div class="van-cell__title"><span>账户余额：{{ LoginUser.point }}￥</span></div>
    </div>
    <div class="van-cell van-cell--large">
        <i class="van-badge__wrapper van-icon van-icon-manager van-cell__left-icon"></i>
        <div class="van-cell__title"><span>用户：{{ LoginUser.nickname }}</span></div>
    </div>

    <van-field label="自定义金额" v-model="nums" readonly clickable @touchstart.stop="isShow = true" />
    <van-number-keyboard v-model="nums" theme="custom" close-button-text="完成" :show="isShow" :maxlength="6"
        @blur="isShow = false" @close="recharge()" />

    <div role="separator" class="van-divider van-divider--hairline van-divider--content-center"
        style="color: rgb(25, 137, 250); border-color: rgb(25, 137, 250); padding: 0px 16px;">固定金额</div>

    <van-row justify="space-around" style="font-size:18px;color:#1989fa;text-align: center;margin-bottom:15px;">
        <van-col span="6" v-for="item in amount" :key="item.id" @click="confirm(item.num)">
            <div style="border:1px solid #1989fa;padding:5px 0;display: flex;justify-content: center;">
                <i class="van-badge__wrapper van-icon van-icon-gold-coin-o van-button__icon"></i>
                <span>{{ item.num }}元</span>
            </div>
        </van-col>
    </van-row>
    <van-row justify="space-around" style="font-size:18px;color:#1989fa;text-align: center;margin-bottom:25px;">
        <van-col span="6" v-for="item in amount1" :key="item.id" @click="confirm(item.num)">
            <div style="border:1px solid #1989fa;padding:5px 0;display: flex;justify-content: center;">
                <i class="van-badge__wrapper van-icon van-icon-gold-coin-o van-button__icon"></i>
                <span>{{ item.num }}元</span>
            </div>
        </van-col>
    </van-row>
    <van-field v-model="content" rows="2" autosize label="充值备注" type="textarea" maxlength="100" show-word-limit />

</template>
<script>
export default {
    data() {
        return {
            LoginUser: this.$cookies.get('LoginUser'),
            list: [],
            isShow: false,
            nums: null,
            value: '',
            showKeyboard: false,
            amount: [
                {
                    id: 1,
                    num: 6
                },
                {
                    id: 2,
                    num: 30
                },
                {
                    id: 3,
                    num: 68
                }
            ],
            amount1: [
                {
                    id: 4,
                    num: 128
                },
                {
                    id: 5,
                    num: 328
                },
                {
                    id: 6,
                    num: 648
                }
            ],
            point: null,
            content: null
        }
    },
    methods: {
        // 返回上一级
        back() {
            this.$router.push('/user/base/index')
        },
        confirm(value) {
            this.$dialog.confirm({
                message: '确认充值？'
            }).then(async() => {
                let data = {
                    userid: this.LoginUser.id, 
                    point:value,
                    content: this.content
                }
                // console.log(data);
                let result = await this.$api.pay(data)
                this.$toast(result.msg);
            }).catch(() => {

            })
        }
    }
}
</script>
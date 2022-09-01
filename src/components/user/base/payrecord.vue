<template>
    <!-- 导航栏 -->
    <van-nav-bar title="充值记录" left-arrow @click-left="back" />

    <van-cell-group v-for="item in paylist" :key="item.id" center>
        <div class="van-cell van-cell--large">
            <div class="van-cell__title">
                <span>充值金额:￥{{ item.point }}</span>
                <span class="van-tag van-tag--danger" style="background: blue;margin-left: 5px;">{{
                    item.status_text
                }}</span>
                <div class="van-cell__label">备注信息:{{ item.content }}</div>
            </div>
            <div class="van-cell__value"><span>{{ item.createtime }}</span></div>

        </div>
    </van-cell-group>

</template>
<script>
export default{
    created(){
        this.PayList()
    },
    data(){
        return {
            LoginUser: this.$cookies.get('LoginUser'),
            paylist:[],
        }
    },
    methods:{
        back(){
            this.$router.push('/user/base/index')
        },
        async PayList(){
            let result =await this.$api.PayRecord({userid:this.LoginUser.id});
            // console.log(result);
            if (result.code == 1) {
                this.paylist=result.data
            }
        }
    }
}

</script>
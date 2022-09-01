<template>
    <!-- 导航栏 -->
    <van-nav-bar title="消费记录" left-arrow @click-left="back" />

    <van-cell-group v-for="item in record" :key="item.id">
        <van-cell center :title="item.content" :value="item.createtime" />
    </van-cell-group>

</template>
<script>
    export default{
        created(){
        this.RecordData()
    },
    data(){
        return {
            LoginUser: this.$cookies.get('LoginUser'),
            record:[],
        }
    },
    methods:{
        back(){
            this.$router.push('/user/base/index')
        },
        async RecordData(){
            let result =await this.$api.Record({userid:this.LoginUser.id});
            if (result.code == 1) {
                this.record=result.data
            }
        }
    }
    }
</script>
<template>
    <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft" />

    <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />


</template>
<script>
export default {
    data() {
        return {
            chosenAddressId:'1',
            list:[],
            LoginUser:this.$cookies.get('LoginUser')
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        onAdd()
        {
            this.$router.push('/user/address/add')
        },
        onEdit()
        {

        },
        async AddressList()
        {
            let result = await this.$api.AddressIndex({userid:this.LoginUser.id})

            if(result.code === 0)
            {
                this.$notify({
                    type:'warning',
                    message:result.msg,
                })
                return false
            }

            // let AddressData = []

            // for(let item of result.data)
            // {
                
            // }
        }
    },
    created() {
        this.AddressList()
    },
}
</script>
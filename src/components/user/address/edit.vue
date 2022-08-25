<template>
    <van-nav-bar title="新增收货地址"
        left-arrow
        @click-left="onClickLeft" 
    />

    <van-address-edit
        :area-list="areaList"
        show-delete
        show-set-default
        :address-info="Address"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
    />

</template>

<script>
import { areaList } from '@vant/area-data';
export default {
    created() {
        let addressid = this.$route.query.addressid

        this.addressid = addressid

        this.AddressInfo()
    },
    data() {
        return {
            areaList:areaList,
            addressid:null,
            Address:{},
            LoginUser:this.$cookies.get('LoginUser')
        }
    },
    methods: {
        onClickLeft()
        {
            this.$router.push('/user/address/index')
        },

        async AddressInfo()
        {
            let result = await this.$api.addressInfo({addressid:this.addressid})

            if(result.code === 0)
            {
                this.$notify({
                    type:'warning',
                    message:result.msg,
                })

                this.$router.go(-1)

                return false
            }

            let data = result.data

            let address = {
                name:data.consignee,
                tel:data.mobile,
                addressDetail:data.address,
                isDefault:data.status == 1 ? true : false,
                areaCode:data.district
            }
            this.Address = address
        },
        // 保存
        async onSave(value){
            let data = {
                consignee:value.name,
                mobile:value.tel,
                code:value.areaCode,
                status:value.isDefault ? 1 : 0,
                address:value.addressDetail,
                addressid:this.addressid,
                userid:this.LoginUser.id
            }
            let result = await this.$api.AddressEdit(data)

            if(result.code === 1)
            {
                this.$notify({
                    type:'success',
                    message:result.msg,
                    onClose:() => {
                        this.$router.push('/user/address/index')
                    }
                })
            }else{
                this.$notify({
                    type:'warning',
                    message:result.msg,
                })
            }
            
        },
        // 删除
        onDelete(){
            
        }
    },
}
</script>
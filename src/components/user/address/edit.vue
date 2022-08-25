<template>
    <van-nav-bar title="新增收货地址"
        left-text="返回"
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
            Address:{}
        }
    },
    methods: {
        onClickLeft()
        {
            this.$router.push('/user/address/index')
        },
        async AddressInfo()
        {
            let result = await this.$api.AddressEdit({addressid:this.addressid})

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
        onSave(){

        },
        onDelete(){
            
        }
    },
}
</script>
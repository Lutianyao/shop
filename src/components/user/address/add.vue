<template>
    <van-nav-bar title="新增收货地址" left-arrow @click-left="onClickLeft" />

    <van-address-edit :area-list="areaList" show-set-default :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave" />

</template>

<script>
import { areaList } from '@vant/area-data';
export default {
    // 生命周期
    created() {
        let action = this.$route.query.action ? this.$route.query.action : ''
        this.action = action
    },
    data() {
        return {
            areaList: areaList,
            LoginUser: this.$cookies.get('LoginUser')
        }
    },
    methods: {
        onClickLeft() {
            if (this.action == 'order') {
                this.$router.go(-1)
            } else {
                this.$router.push('/user/address/index')
            }
        },
        async onSave(value) {
            let data = {
                consignee: value.name,
                mobile: value.tel,
                code: value.areaCode,
                status: value.isDefault ? 1 : 0,
                address: value.addressDetail,
                userid: this.LoginUser.id,
                action: ''
            }

            let result = await this.$api.AddressAdd(data)

            if (result.code === 1) {
                this.$notify({
                    type: 'success',
                    message: result.msg,
                    onClose: () => {
                        if (this.action == 'order') {
                            this.$router.go(-1)
                        } else {
                            this.$router.push('/user/address/index')
                        }
                    }
                })
            } else {
                this.$notify({
                    type: 'warning',
                    message: result.msg,
                })
            }
        }
    },
}
</script>
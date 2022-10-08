<template>
    <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft" />

    <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit"
        @select="onSelect" v-if="action != 'order'" />
    <!-- 从订单结算过来 -->
    <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit"
        @select="onOrderSelect" v-else />


</template>
<script>
export default {
    // 生命周期
    created() {
        let action = this.$route.query.action ? this.$route.query.action : ''
        this.action = action
        this.AddressList()
    },
    data() {
        return {
            chosenAddressId: '1',
            list: [],
            LoginUser: this.$cookies.get('LoginUser'),
            action: ''
        }
    },
    methods: {
        // 返回上一页
        onClickLeft() {
            if (this.action == 'order') {
                this.$router.go(-1)
            } else {
                this.$router.push('/user/base/index')
            }
        },
        // 新增
        onAdd() {
            if (this.action == 'order') {
                this.$router.push({ path: '/user/address/add', query: { action: 'order' } })
            } else {
                this.$router.push('/user/address/add')
            }
        },
        // 编辑
        onEdit(value) {
            if (this.action == 'order') {
                this.$router.push({ path: '/user/address/edit', query: { action: 'order',addressid: value.id } })
            } else {
                this.$router.push({ path: '/user/address/edit', query: { addressid: value.id } })
            }
        },
        // 设置默认地址
        async onSelect(value) {
            let data = {
                id: value.id,
                userid: this.LoginUser.id
            }

            let result = await this.$api.AddressSelect(data)

            if (result.code === 0) {
                this.$notify({
                    type: 'warning',
                    message: result.msg,
                })
                return false
            }

            this.AddressList()
        },
        // 收货地址列表
        async AddressList() {
            let result = await this.$api.AddressIndex({ userid: this.LoginUser.id })

            if (result.code === 0) {
                this.$notify({
                    type: 'warning',
                    message: result.msg,
                })
                return false
            }

            let AddressData = []

            for (let item of result.data) {
                if (item.status == 1) {
                    this.chosenAddressId = item.id
                }
                AddressData.push({
                    id: item.id,
                    name: item.consignee,
                    tel: item.mobile,
                    address: item.region_text + ' ' + item.address,
                    isDefault: item.status == 1 ? true : false
                })
            }
            this.list = AddressData
        },
        onOrderSelect(value) {
            let data = {
                id: value.id,
                consignee: value.name,
                mobile: value.tel
            }

            this.$cookies.set('address', data)

            this.$router.go(-1)
        }
    }
}
</script>
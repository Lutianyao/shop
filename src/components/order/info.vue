<template>
    <van-nav-bar
        title="订单详情"
        left-arrow
        @click-left="onClickLeft"
    />
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            onClickLeft()
            {
                this.$router.push('/user/base/index')
            }
        },
    }
    </script>
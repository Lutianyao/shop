<template>
    <van-nav-bar
        :title="info.name"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />

    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in info.thumbs_cdn" :key="index">
            <img :src="item">
        </van-swipe-item>
    </van-swipe>

    <div class="detailbox">
        <h4>{{info.name}}</h4>
        <div class="price" v-if="info.vip_price">
            <em>￥</em>{{info.vip_price}}<span>￥{{info.price}}</span><font>库存：{{info.stock}}件</font>
        </div>

        <div class="price" v-else>
            <em>￥</em>{{info.price}}<font>库存：{{info.stock}}件</font>
        </div>
    </div>

    <div class="clear"></div>
    <div class="allkbox"></div>
    <div class="clear"></div>
    <div class="detailbox_2" v-html="info.content">
        
    </div>

    <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon icon="cart-o" text="购物车" />
        <van-action-bar-button type="warning" text="加入购物车" />
        <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>


</template>
<script>
export default {
    created() {
        let proid = this.$route.query.proid

        this.proid = proid

        this.ProInfo()
    },
    data() {
        return {
            proid:0,
            info:{},
            LoginUser:this.$cookies.get('LoginUser')
        }
    },
    methods: {
        onClickLeft()
        {
            this.$router.go(-1)
        },
        async ProInfo()
        {
            let result =  await this.$api.ProductInfo({proid:this.proid,userid:this.LoginUser ? this.LoginUser.id : 0})

            if(result.code === 0)
            {
                this.$notify({
                    type:'warning',
                    message:result.msg,
                })

                this.$router.go(-1)

                return false
            }
            
            this.info = result.data
        }
    },
}
</script>
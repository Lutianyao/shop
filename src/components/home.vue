<template>
    <div class="topBox">
        <van-nav-bar v-if="SearchList.length > 0" left-arrow @click-left="onClickLeft" />
        <div v-else class="L"><a href="index.html">LOGO</a></div>
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
            <template #action>
                <div @click="onClickButton">搜索</div>
            </template>
        </van-search>
    </div>
    <div class="clear"></div>
    <div v-if="SearchList.length > 0">
        <ul class="proul">
            <li v-for="item in SearchList" :key="item.id">
                <div class="con">
                    <router-link :to="{ path: '/product/product/info', query: { proid: item.id } }">
                        <img :src="item.cover_cdn">
                        <p v-if="item.vip_price">￥{{ item.vip_price }}<span class="span">￥{{ item.price }}</span></p>
                        <p v-else>￥{{ item.price }}</p>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
    <div v-else>
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in RecomList" :key="item.id">
                <img :src="item.cover_cdn">
            </van-swipe-item>
        </van-swipe>
        <div class="clear"></div>
        <!-- 菜单分类 -->
        <div class="lqgwBox">
            <ul>
                <li v-for="item in TypeList" :key="item.id">
                    <router-link :to="{ path: '/product/product/index', query: { typeid: item.id } }"><img
                            :src="item.cover_cdn">
                        <p>{{ item.name }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 推荐 -->
        <div class="contitbox">
            <p>推荐</p>
        </div>
        <ul class="proul">
            <li v-for="item in RecomList" :key="item.id">
                <div class="con">
                    <router-link :to="{ path: '/product/product/info', query: { proid: item.id } }">
                        <img :src="item.cover_cdn">
                        <p v-if="item.vip_price">￥{{ item.vip_price }}<span class="span">￥{{ item.price }}</span></p>
                        <p v-else>￥{{ item.price }}</p>
                    </router-link>
                </div>
            </li>
        </ul>
        <!-- 热销 -->
        <div class="contitbox">
            <p>热销</p>
        </div>
        <ul class="proul">
            <li v-for="item in HotList" :key="item.id">
                <div class="con">
                    <router-link :to="{ path: '/product/product/info', query: { proid: item.id } }">
                        <img :src="item.cover_cdn">
                        <p v-if="item.vip_price">￥{{ item.vip_price }}<span class="span">￥{{ item.price }}</span></p>
                        <p v-else>￥{{ item.price }}</p>
                    </router-link>
                </div>
            </li>
        </ul>
        <!-- 新品 -->
        <div class="contitbox">
            <p>新品</p>
        </div>
        <ul class="proul">
            <li v-for="item in NewList" :key="item.id">
                <div class="con">
                    <router-link :to="{ path: '/product/product/info', query: { proid: item.id } }">
                        <img :src="item.cover_cdn">
                        <p v-if="item.vip_price">￥{{ item.vip_price }}<span class="span">￥{{ item.price }}</span></p>
                        <p v-else>￥{{ item.price }}</p>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
    <div class="h54"></div>
    <Tab />
</template>
<script>
import Tab from 'components/common/Tab.vue'
export default {
    components: {
        Tab
    },
    // 生命周期
    created() {
        this.GetData()
    },
    data() {
        return {
            TypeList: [],
            RecomList: [],
            HotList: [],
            NewList: [],
            value: '',
            SearchList: [],
            LoginUser: this.$cookies.get('LoginUser')?this.$cookies.get('LoginUser'):0
        }
    },
    methods: {
        onClickLeft() {
            location.reload();
        },
        async GetData() {
            let result = await this.$api.HomeList({userid:this.LoginUser.id})
            if (result.code === 1) {
                this.TypeList = result.data.TypeList
                this.RecomList = result.data.RecomList
                this.HotList = result.data.HotList
                this.NewList = result.data.NewList
            }
        },
        async onSearch() {
            if (this.value == '') {
                this.$notify({
                    type: 'warning',
                    message: '请先输入搜索关键词',
                })
                return false
            }
            let result = await this.$api.Search({ proname: this.value, userid: this.LoginUser.id })
            if (result.code == 1) {
                if (result.data.length == 0) {
                    this.$toast.loading({
                        type: 'fail',
                        message: '暂无相关商品',
                    })
                    return false
                }
                this.SearchList = result.data
            }
        },
        onClickButton() {
            this.onSearch()
        }
    }
}
</script>
<style>
.span {
    font-size: 12px;
    color: #bbb;
    padding-left: 10px;
    text-decoration: line-through
}
</style>
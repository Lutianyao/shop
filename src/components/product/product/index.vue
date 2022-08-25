<template>
    <div class="headerbox">
        <div class="header">
            <div class="headerL">
                <a @click="GoBack" class="goback"><img src="/assets/images/goback.png" /></a>
            </div>
            <div class="headerC0">
                <div class="ssdiv">
                    <img src="/assets/images/ss.png" /><input name="" type="text" placeholder="输入关键字..." />
                </div>
            </div>
            <div class="headerR">
                <a @click="showPicker = true"><img src="/assets/images/tr.png" /></a>
            </div>
        </div>
    </div>
    <div class="clear"></div>
    <div class="shopType">
        <van-dropdown-menu>
            <van-dropdown-item v-model="flag" :options="option1" @change="onFlag" />
            <van-dropdown-item v-model="OrderBy" :options="option2" @change="onOrderBy" />
        </van-dropdown-menu>
    </div>
    <div class="clear"></div>
    <div class="hbox"></div>
    <div class="mainWarp" style="background:#f3f3f3">
        <ul class="proul" v-if="ProList.length > 0">
            <li v-for="item in ProList" :key="item.id">
                <router-link :to="{path:'/product/product/info',query:{proid:item.id}}"><img :src="item.cover_cdn" /></router-link>
                <router-link :to="{path:'/product/product/info',query:{proid:item.id}}">
                    <p class="tit">{{ item.name }}</p>
                </router-link>
                <div class="price">
                    <p v-if="item.vip_price">￥{{ item.vip_price }}<span>￥{{ item.price }}</span></p>
                    <p v-else>￥{{ item.price }}</p>
                </div>
            </li>
        </ul>

        <van-empty description="此分类暂无商品" v-else />

    </div>
    <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
    />
    </van-popup>
</template>

<script>
export default {
    created() {
        // 加载完成时获取分类id
        let typeid = this.$route.query.typeid
        // 赋值分类id this.typeid=>return的typeid
        this.typeid = typeid
        // 调用ProductList()方法
        this.ProductList(),
        this.TypeData()
    },
    data() {
        return {
            // 定义分类id 床/橱柜/电视柜...
            typeid: 0,
            // 定义商品数据列表
            ProList: [],
            // 获取用户数据
            LoginUser: this.$cookies.get('LoginUser'),
            // 新品热销推荐
            flag: 0,
            // 排序
            OrderBy: 'id',
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新品商品', value: 1 },
                { text: '热销商品', value: 2 },
                { text: '推荐商品', value: 3 },
            ],
            option2: [
                { text: '默认排序', value: 'id' },
                { text: '价格排序', value: 'price' },
                { text: '库存排序', value: 'stock' },
            ],
            showPicker:false,
            columns:[
            ]
        }
    },
    methods: {
        // 返回上一级
        GoBack() {
            this.$router.push('/')
        },
        // 发起请求获取商品数据
        async ProductList() {
            // 封装数据
            let data = {
                typeid: this.typeid,
                userid: this.LoginUser ? this.LoginUser.id : 0,
                flag: this.flag,
                OrderBy: this.OrderBy
            }
            // 调用接口
            let result = await this.$api.ProductIndex(data)
            // 判断是否成功
            if (result.code === 1) {
                this.ProList = result.data
            }
        },
        // 点击左侧下拉菜单
        onFlag() {
            this.ProductList()
        },
        // 点击右侧下拉菜单
        onOrderBy() {
            this.ProductList()
        },
        async TypeData()
        {
            let result = await this.$api.TypeIndex()

            if(result.code === 1)
            {
                let data = []

                for(let item of result.data)
                {
                    data.push({
                        text:item.name,
                        value:item.id
                    })
                }

                this.columns = data
            }
        },
        onConfirm(value)
        {
            this.typeid = value.value

            this.ProductList()

            this.showPicker = false
        }
    },
}
</script>
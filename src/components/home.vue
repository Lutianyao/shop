<template>
    <div class="topBox">
        <div class="L"><a href="index.html">LOGO</a></div>
        <div class="C">
            <div class="saerchbox">
                <input name="" type="text" placeholder="请输入您要搜索的内容"><img src="/assets/images/ss.png">
            </div>
        </div>
        <div class="R"><img src="/assets/images/tr.png"></div>
    </div>
    <div class="clear"></div>
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
            <router-link :to="{path:'/product/product/index',query:{typeid:item.id}}"><img :src="item.cover_cdn">
                <p>{{item.name}}</p>
            </router-link>
            </li>
        </ul>
    </div>
    <div class="clear"></div>
    <div class="ljgqBox">
        <div class="L"><img src="/assets/images/2.jpg"></div>
        <div class="R">
            <ul>
                <li>
                    <div class="bg1"></div>
                    <div class="pri_1">￥1899</div>
                </li>
                <li>
                    <div class="bg2"></div>
                    <div class="pri_2">￥2899</div>
                </li>
            </ul>
        </div>
    </div>
    <div class="clear"></div>
    <div class="contitbox">
        <p>新品<span>•</span>推荐</p>
    </div>
    <div class="clear"></div>
    <ul class="proul">
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/4.jpg">
                    <p><span>￥</span>288</p>
                </a>
            </div>
        </li>
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/5.jpg">
                    <p><span>￥</span>198</p>
                </a>
            </div>
        </li>
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/6.jpg">
                    <p><span>￥</span>2368</p>
                </a>
            </div>
        </li>
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/7.jpg">
                    <p><span>￥</span>688</p>
                </a>
            </div>
        </li>
    </ul>
    <div class="clear"></div>
    <div class="adBox">
        <img src="/assets/images/banner.jpg">
    </div>
    <div class="clear"></div>
    <div class="liBox">
        <div class="liBox_1">
            <div class="L">
                <a href="detail.html">
                    <div class="bg"></div>
                    <div class="tip">礼1</div>
                </a>
            </div>
            <div class="R">
                <a href="detail.html"><img src="/assets/images/9.jpg"></a>
            </div>
        </div>
        <div class="liBox_2">
            <div class="L">
                <a href="detail.html">
                    <div class="bg"></div>
                    <div class="tip">礼2</div>
                </a>
            </div>
            <div class="R">
                <a href="detail.html">
                    <div class="bg"></div>
                    <div class="tip">礼3</div>
                </a>
            </div>
        </div>
    </div>
    <div class="clear"></div>
    <div class="contitbox">
        <p>热销<span>•</span>单品</p>
    </div>
    <div class="clear"></div>
    <ul class="proul_2">
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/12.jpg">
                    <p><span>￥</span>288</p>
                </a>
            </div>
        </li>
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/13.jpg">
                    <p><span>￥</span>198</p>
                </a>
            </div>
        </li>
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/14.jpg">
                    <p><span>￥</span>2368</p>
                </a>
            </div>
        </li>
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/14.jpg">
                    <p><span>￥</span>688</p>
                </a>
            </div>
        </li>
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/12.jpg">
                    <p><span>￥</span>688</p>
                </a>
            </div>
        </li>
        <li>
            <div class="con">
                <a href="detail.html">
                    <img src="/assets/images/13.jpg">
                    <p><span>￥</span>688</p>
                </a>
            </div>
        </li>
    </ul>
    <div class="clear"></div>
    <div class="h54"></div>
    <div class="clear"></div>
    <Tab />
</template>
<script>
import Tab from 'components/common/Tab.vue'
export default {
    components:{
        Tab
    },
    data(){
        return{
            TypeList:[],
            RecomList:[]
        }
    },
    methods:{
        async GetData(){
            let result = await this.$api.HomeList()
            if(result.code === 1)
            {
                this.TypeList = result.data.TypeList
                this.RecomList = result.data.RecomList
            }
        }
    },
    // 生命周期
    created() {
        this.GetData()
    },
}
</script>
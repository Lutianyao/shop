<template>
    <van-nav-bar title="商品分类" />
    <div class="m-scrolltab" data-ydui-scrolltab>
        <!-- 侧边导航 -->
        <div class="scrolltab-nav">
            <van-sidebar v-model="active" @change="onChange">
                <van-sidebar-item v-for="item in typeList" :title="item.name" />
            </van-sidebar>
        </div>
        <!-- 容器 -->
        <div class="scrolltab-content">
            <div class="scrolltab-content-item">
                <div class="aui-flex-links" v-if="ProductList.length > 0">
                    <a href="list.html" class="aui-flex-links-item" v-for="item in ProductList">
                        <div class="aui-flex-links-img"> <img :src="item.cover_cdn" alt=""> </div>
                        <div class="aui-flex-links-text">{{ item.name }}</div>
                    </a>
                </div>
                <van-empty description="暂无商品~~" v-else />
            </div>
        </div>
    </div>
    <Tab />
</template>

<script>
import Tab from 'components/common/Tab.vue'
export default {
    components: {
        Tab
    },
    created() {
        this.TypeList()
    },
    data() {
        return {
            active: 0,
            Typeid: 0,
            typeList: [],
            ProductList: []
        }
    },
    methods: {
        async onChange(value) {
            let Typeid = this.typeList[value].id
            let result = await this.$api.TypeProduct({ typeid: Typeid });
            this.ProductList = result.data

        },
        async TypeList() {
            let result = await this.$api.TypeIndex();
            if (result.code == 1) {
                this.typeList = result.data
            }
        }
    }
}
</script>
<style>
@import url('/assets/css/typelist.css');
</style>
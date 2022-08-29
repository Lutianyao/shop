<template>
    <van-nav-bar title="商品分类" />

    <van-tree-select v-model:main-active-index="activeIndex" height="90vh" :items="TypeList" @click-nav="onType">
        <template #content>
            <div class="mainWarp" style="background:#f3f3f3;">
                <ul class="proul" v-if="ProList.length > 0">
                    <li v-for="item in ProList" :key="item.id">
                        <router-link :to="{ path: '/product/product/info', query: { proid: item.id } }"><img
                                :src="item.cover_cdn" /></router-link>
                        <router-link :to="{ path: '/product/product/info', query: { proid: item.id } }">
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
        </template>
    </van-tree-select>


    <Tab />
</template>
<script>
import Tab from 'components/common/Tab.vue'
export default {
    components: {
        Tab
    },
    data() {
        return {
            activeIndex: 0,
            items: [{ text: '分组 1' }, { text: '分组 2' }],
            TypeList: [],
            ProList: [],
            typeid: 0,
        }
    },
    methods: {
        async TypeData() {
            let result = await this.$api.TypeIndex()

            if (result.code === 1) {
                let data = []

                for (let item of result.data) {
                    data.push({ text: item.name, id: item.id })
                }

                this.TypeList = data

                this.ProductList()
            }
        },
        async ProductList() {
            let data = {
                typeid: this.typeid ? this.typeid : this.TypeList[this.activeIndex].id
            }

            let result = await this.$api.ProductIndex(data)

            if (result.code === 1) {
                this.ProList = result.data
            }

        },
        onType(value) {

            this.typeid = this.TypeList[value].id

            this.ProductList()
        }
    },
    created() {
        this.TypeData()


    },
}
</script>
<template>
    <!-- 导航条 -->
    <van-nav-bar
        title="基本资料"
        left-arrow 
        @click-left="onClickLeft"
    />

    <!-- 头像 -->
    <div class="user">
        <div class="user-image">
            <img :src="LoginUser.avatar" alt="">
        </div>
    </div>

    <!-- 表单 -->
    <div class="form">
        <van-form @submit="Profile">
            <!-- 昵称 -->
            <van-field
                v-model="LoginUser.nickname"
                name="nickname"
                label="昵称"
                placeholder="请输入昵称"
                :rules="[{ required: true, message: '请填写昵称' }]"
            />

            <!-- 密码 -->
            <van-field
                v-model="LoginUser.password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
            />

            <van-field name="sex" label="性别">
                <template #input>
                    <van-radio-group v-model="LoginUser.sex" direction="horizontal">
                        <van-radio name="0">保密</van-radio>
                        <van-radio name="1">男</van-radio>
                        <van-radio name="2">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field>

            <van-field
                v-model="LoginUser.region_text"
                is-link
                readonly
                name="code"
                label="地区选择"
                placeholder="点击选择省市区"
                @click="showArea = true"
            />

            <van-field
                v-model="LoginUser.content"
                rows="2"
                autosize
                label="个人简介"
                type="textarea"
                name="content"
                maxlength="50"
                placeholder="请输入留言"
                show-word-limit
            />

            <van-field name="avatar" label="修改头像">
                <template #input>
                    <van-uploader v-model="avatar" max-count="1" />
                </template>
            </van-field>

            <van-field name="cover" label="修改封面">
                <template #input>
                    <van-uploader v-model="cover" max-count="1" />
                </template>
            </van-field>



            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>

        <van-popup v-model:show="showArea" position="bottom">
            <van-area
                :area-list="areaList"
                @confirm="onConfirm"
                @cancel="showArea = false"
            />
        </van-popup>
    </div>

</template>

<script>
import { areaList } from '@vant/area-data';
export default {
    created() {
        this.avatar = [
            {
                url:this.LoginUser.avatar
            }
        ]
        this.cover = [
            {
                url:this.LoginUser.cover
            }
        ]
    },
    data() {
        return {
            showArea:false,
            areaList:areaList,
            LoginUser:this.$cookies.get('LoginUser'),
            RegionCode:null,
            avatar:[],
            cover:[]
        }
    },
    methods: {
        // 返回按钮
        onClickLeft()
        {
            this.$router.go(-1)
        },
        // 提交修改资料 async =>异步处理
        async Profile(value)
        {
            let data = {
                userid:this.LoginUser.id ? this.LoginUser.id : 0,
                nickname:value.nickname,
                sex:value.sex,
                content:value.content
            }
            // 是否修改地区
            if(this.RegionCode){
                data.code = this.RegionCode
            }
            // 是否修改密码
            if(value.password){
                data.password = value.password
            }
            // 是否修改头像
            let avatar = value.avatar[0] ? value.avatar[0].file : {}
            if(avatar){
                data.avatar = avatar
            }
            // 是否修改封面
            let cover = value.cover[0] ? value.cover[0].file : {}
            if(cover){
                data.cover = cover
            }
            // 提交到后端 await=>同步
            let result = await this.$api.profile(data)
            if(result.code === 1)
            {
                this.$notify({
                    type:'success',
                    message:result.msg,
                    onClose:() => {

                        this.$cookies.set('LoginUser',result.data)

                        this.$router.push('/user/base/index')
                    }
                })
            }else{
                this.$notify({
                    type:'warning',
                    message:result.msg,
                })
            }
        },
        // 地区选择
        onConfirm(value)
        {
            let [province,city,district] = value

            let region_text = ''
            let code = null

            if(province)
            {
                region_text += province.name + '-'
                code = province.code
            }

            if(city)
            {
                region_text += city.name + '-'
                code = city.code
            }

            if(district)
            {
                code = district.code
                region_text += district.name
            }

            this.LoginUser.region_text = region_text

            this.RegionCode = code
            
            this.showArea = false
        }
    },
}
</script>
<style>
@import url('/assets/css/profile.css');
</style>
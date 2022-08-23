<template>
    <div class="limiter">
        <div class="container-login100" style="background-image: url('/assets/images/img-01.jpg');">
            <div class="wrap-login100 p-t-190 p-b-30">
                <van-form class="login100-form validate-form" @submit="onRegister">
                    <div class="login100-form-avatar">
                        <img src="/assets/images/avatar-01.jpg" alt="AVATAR">
                    </div>

                    <span class="login100-form-title p-t-20 p-b-45">Hello</span>

                    <div class="wrap-input100 validate-input m-b-10" data-validate="请输入邮箱">
                        <input class="input100" type="text" v-model="email" placeholder="邮箱" autocomplete="off">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-user"></i>
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input m-b-10" data-validate="请输入密码">
                        <input class="input100" type="password" v-model="password" placeholder="密码">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-lock"></i>
                        </span>
                    </div>

                    <div class="container-login100-form-btn p-t-10">
                        <button class="login100-form-btn">注 册</button>
                    </div>

                    <div class="text-center w-full login">
                        <router-link class="txt1" to="/user/base/login">
                            立即登录
                            <i class="fa fa-long-arrow-right"></i>
                        </router-link>
                    </div>
                </van-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email:'',
            password:''
        }
    },
    methods: {
        onRegister()
        {
            if(!this.email)
            {
                this.$notify({
                    type: 'warning',
                    message: '邮箱不能为空'
                })

                return false
            }

            if(!this.password)
            {
                this.$notify({
                    type: 'warning',
                    message: '密码不能为空'
                })

                return false
            }

            // 正则
            let EmailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

            // 验证邮箱格式
            if (!EmailReg.test(this.email)) {
                this.$notify({
                    type: "warning",
                    message: "邮箱格式不正确，请重新输入",
                    duration:1500
                });
                return false
            }

            this.$toast.loading({
                message:'注册中',
                onClose: async () => {
                    /* 
                        let
                         不能重复定义
                         没有变量提升

                        var 变量提升
                    */
                    let data = {
                        email:this.email,
                        password:this.password
                    }

                    let result = await this.$api.register(data)

                    if(result.code === 1)
                    {
                        this.$notify({
                            type:'success',
                            message:result.msg,
                            onClose:() => {
                                this.$router.push('/user/base/login')
                            }
                        })
                    }else{
                        this.$notify({
                            type:'warning',
                            message:result.msg,
                        })
                    }
                }
            })
        }
    },
}
</script>
<style>
@import url('/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css');
@import url('/assets/css/util.css');
@import url('/assets/css/main.css');

.login{
    margin-top: 35px;
}
</style>
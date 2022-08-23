<template>
    <div class="limiter">
        <div class="container-login100" style="background-image: url('/assets/images/img-01.jpg');">
            <div class="wrap-login100 p-t-190 p-b-30">
                <van-form @submit="onLogin" class="login100-form validate-form">
                    <div class="login100-form-avatar">
                        <img src="/assets/images/avatar-01.jpg" alt="AVATAR">
                    </div>

                    <span class="login100-form-title p-t-20 p-b-45">Hello</span>

                    <div class="wrap-input100 validate-input m-b-10" data-validate="请输入用户名">
                        <input class="input100" type="text" v-model="email" placeholder="用户名" autocomplete="off">
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
                        <button class="login100-form-btn">登 录</button>
                    </div>

                    <div class="text-center w-full login">
                        <router-link class="txt1" to="/user/base/register">
                            立即注册
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
        onLogin()
        {
            if(!this.email)
            {
                this.$notify({
                    type: 'warning',
                    message: '请输入邮箱'
                })

                return false
            }

            if(!this.password)
            {
                this.$notify({
                    type: 'warning',
                    message: '请输入密码'
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
                message:'登录中',
                onClose: async () => {
                    let data = {
                        email:this.email,
                        password:this.password
                    }

                    let result = await this.$api.login(data)

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
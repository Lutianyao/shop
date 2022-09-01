<template>
    <!-- 导航栏 -->
    <van-nav-bar title="帐号认证" left-arrow @click-left="back" />

    <div role="alert" class="van-notice-bar" style="padding:10px;">
        <i class=" van-badge__wrapper  van-icon van-icon-warning  van-notice-bar__left-icon"></i>
        <div role="marquee" class="van-notice-bar__wrap">
            <div class="van-notice-bar__content" style="transition-duration: 0s;white-space:pre-wrap;padding:3px 0px;">
                公告：验证码区别大小，请去注册邮箱查看邮件，获取验证码，！！！
            </div>
        </div>
    </div>

    <van-field v-model="code" clearable maxlength="4" label="验证码" placeholder="请输入验证码">
        <template #button>
            <van-button v-if="showCountdown" ref="smsCode" size="mini">
                <van-count-down :time="time" style="color: #777" @finish="countDownFinish" format="ss 秒后重试" />
            </van-button>
            <van-button v-else @click="getSmsCode" type="primary" size="mini">重新获取验证码</van-button>
        </template>
    </van-field>
    <div style="padding: 10px 15px">
        <van-button type="primary" block @click="ChangeCode">确定</van-button>
    </div>
</template>
  <script>
  export default {
      data() {
          return {
              LoginUser: this.$cookies.get('LoginUser'),
              code: null,
              time: 60*1000, //倒计时的时间  毫秒级 60秒要*10000
              showCountdown: false,
          }
      },
      methods: {
          back() {
              this.$router.push('/user/base/index')
          },
          countDownFinish() {
              this.showCountdown = false;
          },
          async getSmsCode() {
              this.showCountdown = true;
              let result = await this.$api.email({ userid: this.LoginUser.id });
              if (result.code == "1") {
                  //提醒信息
                  this.$notify({
                      type: "success",
                      message: result.msg,
                      duration: 1000,
                  });
              } else {
                  //提醒信息
                  this.$notify({
                      message: result.msg,
                      duration: 1000,
                  });
              }
          },
          async ChangeCode(){
            if (this.code == "") {
                this.$toast('验证码不能为空');
            }else{
                let data ={
                    userid: this.LoginUser.id,
                    code:this.code
                }
                let result = await this.$api.emailcode(data);
                if (result.code === 1) {
                    this.$toast(result.msg);
                    this.$router.push('/user/base/index')
                }
                
            }
          }
      }
  }
  </script>
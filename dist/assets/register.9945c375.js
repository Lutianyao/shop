import{_ as u,c as f,b as s,a as i,w as n,e as l,o as g,j as r,v as c,g as h}from"./index.29ac6457.js";import{_ as v}from"./avatar-01.b15bc080.js";const w={data(){return{email:"",password:""}},methods:{onRegister(){if(!this.email)return this.$notify({type:"warning",message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A"}),!1;if(!this.password)return this.$notify({type:"warning",message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}),!1;if(!/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.email))return this.$notify({type:"warning",message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165",duration:1500}),!1;this.$toast.loading({message:"\u6CE8\u518C\u4E2D",onClose:async()=>{let t={email:this.email,password:this.password},e=await this.$api.register(t);e.code===1?this.$notify({type:"success",message:e.msg,onClose:()=>{this.$router.push("/user/base/login")}}):this.$notify({type:"warning",message:e.msg})}})}}},y={class:"limiter"},b={class:"container-login100",style:{"background-image":"url('/assets/images/img-01.jpg')"}},x={class:"wrap-login100 p-t-190 p-b-30"},$=s("div",{class:"login100-form-avatar"},[s("img",{src:v,alt:"AVATAR"})],-1),k=s("span",{class:"login100-form-title p-t-20 p-b-45"},"Hello",-1),z={class:"wrap-input100 validate-input m-b-10","data-validate":"\u8BF7\u8F93\u5165\u90AE\u7BB1"},V=s("span",{class:"focus-input100"},null,-1),R=s("span",{class:"symbol-input100"},[s("i",{class:"fa fa-user"})],-1),C={class:"wrap-input100 validate-input m-b-10","data-validate":"\u8BF7\u8F93\u5165\u5BC6\u7801"},A=s("span",{class:"focus-input100"},null,-1),B=s("span",{class:"symbol-input100"},[s("i",{class:"fa fa-lock"})],-1),E=s("div",{class:"container-login100-form-btn p-t-10"},[s("button",{class:"login100-form-btn"},"\u6CE8 \u518C")],-1),N={class:"text-center w-full login"},T=h(" \u7ACB\u5373\u767B\u5F55 "),j=s("i",{class:"fa fa-long-arrow-right"},null,-1);function S(p,t,e,U,a,d){const _=l("router-link"),m=l("van-form");return g(),f("div",y,[s("div",b,[s("div",x,[i(m,{class:"login100-form validate-form",onSubmit:d.onRegister},{default:n(()=>[$,k,s("div",z,[r(s("input",{class:"input100",type:"text","onUpdate:modelValue":t[0]||(t[0]=o=>a.email=o),placeholder:"\u90AE\u7BB1",autocomplete:"off"},null,512),[[c,a.email]]),V,R]),s("div",C,[r(s("input",{class:"input100",type:"password","onUpdate:modelValue":t[1]||(t[1]=o=>a.password=o),placeholder:"\u5BC6\u7801"},null,512),[[c,a.password]]),A,B]),E,s("div",N,[i(_,{class:"txt1",to:"/user/base/login"},{default:n(()=>[T,j]),_:1})])]),_:1},8,["onSubmit"])])])])}const M=u(w,[["render",S]]);export{M as default};
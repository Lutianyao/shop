import{a as d}from"./index.esm.a71c9237.js";import{_ as l,c as u,a as o,F as h,e as r,o as f}from"./index.29ac6457.js";const m={created(){let e=this.$route.query.action?this.$route.query.action:"";this.action=e},data(){return{areaList:d,LoginUser:this.$cookies.get("LoginUser")}},methods:{onClickLeft(){this.action=="order"?this.$router.go(-1):this.$router.push("/user/address/index")},async onSave(e){let t={consignee:e.name,mobile:e.tel,code:e.areaCode,status:e.isDefault?1:0,address:e.addressDetail,userid:this.LoginUser.id,action:""},s=await this.$api.AddressAdd(t);s.code===1?this.$notify({type:"success",message:s.msg,onClose:()=>{this.action=="order"?this.$router.go(-1):this.$router.push("/user/address/index")}}):this.$notify({type:"warning",message:s.msg})}}};function _(e,t,s,p,n,a){const i=r("van-nav-bar"),c=r("van-address-edit");return f(),u(h,null,[o(i,{title:"\u65B0\u589E\u6536\u8D27\u5730\u5740","left-arrow":"",onClickLeft:a.onClickLeft},null,8,["onClickLeft"]),o(c,{"area-list":n.areaList,"show-set-default":"","area-columns-placeholder":["\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9"],onSave:a.onSave},null,8,["area-list","onSave"])],64)}const L=l(m,[["render",_]]);export{L as default};
import{_ as u,c as h,a as f,f as a,F as m,e as l,o}from"./index.29ac6457.js";const g={created(){let e=this.$route.query.action?this.$route.query.action:"";this.action=e,this.AddressList()},data(){return{chosenAddressId:"1",list:[],LoginUser:this.$cookies.get("LoginUser"),action:""}},methods:{onClickLeft(){this.action=="order"?this.$router.go(-1):this.$router.push("/user/base/index")},onAdd(){this.action=="order"?this.$router.push({path:"/user/address/add",query:{action:"order"}}):this.$router.push("/user/address/add")},onEdit(e){this.action=="order"?this.$router.push({path:"/user/address/edit",query:{action:"order",addressid:e.id}}):this.$router.push({path:"/user/address/edit",query:{addressid:e.id}})},async onSelect(e){let t={id:e.id,userid:this.LoginUser.id},s=await this.$api.AddressSelect(t);if(s.code===0)return this.$notify({type:"warning",message:s.msg}),!1;this.AddressList()},async AddressList(){let e=await this.$api.AddressIndex({userid:this.LoginUser.id});if(e.code===0)return this.$notify({type:"warning",message:e.msg}),!1;let t=[];for(let s of e.data)s.status==1&&(this.chosenAddressId=s.id),t.push({id:s.id,name:s.consignee,tel:s.mobile,address:s.region_text+" "+s.address,isDefault:s.status==1});this.list=t},onOrderSelect(e){let t={id:e.id,consignee:e.name,mobile:e.tel};this.$cookies.set("address",t),this.$router.go(-1)}}};function p(e,t,s,A,d,r){const c=l("van-nav-bar"),n=l("van-address-list");return o(),h(m,null,[f(c,{title:"\u6536\u8D27\u5730\u5740","left-arrow":"",onClickLeft:r.onClickLeft},null,8,["onClickLeft"]),d.action!="order"?(o(),a(n,{key:0,modelValue:d.chosenAddressId,"onUpdate:modelValue":t[0]||(t[0]=i=>d.chosenAddressId=i),list:d.list,"default-tag-text":"\u9ED8\u8BA4",onAdd:r.onAdd,onEdit:r.onEdit,onSelect:r.onSelect},null,8,["modelValue","list","onAdd","onEdit","onSelect"])):(o(),a(n,{key:1,modelValue:d.chosenAddressId,"onUpdate:modelValue":t[1]||(t[1]=i=>d.chosenAddressId=i),list:d.list,"default-tag-text":"\u9ED8\u8BA4",onAdd:r.onAdd,onEdit:r.onEdit,onSelect:r.onOrderSelect},null,8,["modelValue","list","onAdd","onEdit","onSelect"]))],64)}const y=u(g,[["render",p]]);export{y as default};

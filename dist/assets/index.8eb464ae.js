import{_ as u,c as h,a as f,f as l,F as m,e as a,o as i}from"./index.65a362ed.js";const g={data(){return{chosenAddressId:"1",list:[],LoginUser:this.$cookies.get("LoginUser"),action:""}},methods:{onClickLeft(){this.$router.go(-1)},onAdd(){this.$router.push("/user/address/add")},onEdit(e){this.$router.push({path:"/user/address/edit",query:{addressid:e.id}})},async onSelect(e){let t={id:e.id,userid:this.LoginUser.id},s=await this.$api.AddressSelect(t);if(s.code===0)return this.$notify({type:"warning",message:s.msg}),!1;this.AddressList()},async AddressList(){let e=await this.$api.AddressIndex({userid:this.LoginUser.id});if(e.code===0)return this.$notify({type:"warning",message:e.msg}),!1;let t=[];for(let s of e.data)s.status==1&&(this.chosenAddressId=s.id),t.push({id:s.id,name:s.consignee,tel:s.mobile,address:s.region_text+" "+s.address,isDefault:s.status==1});this.list=t},onOrderSelect(e){let t={id:e.id,consignee:e.name,mobile:e.tel};this.$cookies.set("address",t),this.$router.go(-1)}},created(){let e=this.$route.query.action?this.$route.query.action:"";this.action=e,this.AddressList()}};function A(e,t,s,p,d,n){const c=a("van-nav-bar"),r=a("van-address-list");return i(),h(m,null,[f(c,{title:"\u6536\u8D27\u5730\u5740","left-arrow":"",onClickLeft:n.onClickLeft},null,8,["onClickLeft"]),d.action!="order"?(i(),l(r,{key:0,modelValue:d.chosenAddressId,"onUpdate:modelValue":t[0]||(t[0]=o=>d.chosenAddressId=o),list:d.list,"default-tag-text":"\u9ED8\u8BA4",onAdd:n.onAdd,onEdit:n.onEdit,onSelect:n.onSelect},null,8,["modelValue","list","onAdd","onEdit","onSelect"])):(i(),l(r,{key:1,modelValue:d.chosenAddressId,"onUpdate:modelValue":t[1]||(t[1]=o=>d.chosenAddressId=o),list:d.list,"default-tag-text":"\u9ED8\u8BA4",onAdd:n.onAdd,onEdit:n.onEdit,onSelect:n.onOrderSelect},null,8,["modelValue","list","onAdd","onEdit","onSelect"]))],64)}const k=u(g,[["render",A]]);export{k as default};

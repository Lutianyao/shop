import{_ as k,c as h,a,f as d,F as p,r as w,w as m,e as n,o as r,b as f,t as g}from"./index.b66bf6c1.js";const C={created(){let e=this.$cookies.get("address")?this.$cookies.get("address"):{},t=this.$route.query.ids?this.$route.query.ids:"",l=this.$route.query.proid?this.$route.query.proid:0;this.ids=t,this.proid=l,this.Confirm(),JSON.stringify(e)!="{}"?this.address=e:this.Address()},data(){return{address:{},LoginUser:this.$cookies.get("LoginUser"),content:"",list:[],ids:"",proid:0,product:{}}},methods:{onClickLeft(){this.$router.go(-1)},onOrder(){this.$router.push({path:"/user/address/index",query:{action:"order"}})},async Address(){let e=await this.$api.AddressOrder({userid:this.LoginUser.id});e.code===1&&(this.address=e.data)},async Confirm(){if(this.ids.length>0){let e=await this.$api.ConfirmList({ids:this.ids});if(e.code===0)return this.$notify({type:"warning",message:e.msg}),!1;this.list=e.data}else{let e={action:"info",proid:this.proid,userid:this.LoginUser.id},t=await this.$api.ConfirmList(e);if(t.code===0)return this.$notify({type:"warning",message:t.msg}),!1;this.product=t.data}},async onSubmit(){if(this.ids.length>0){let e={userid:this.LoginUser.id,cartid:this.ids,addrid:this.address.id,content:this.content},t=await this.$api.OrderAdd(e);t.code===1?this.$notify({type:"success",message:t.msg,onClose:()=>{this.$router.push({path:"/order/order/info",query:{orderid:t.data.orderid}})}}):this.$notify({type:"warning",message:t.msg})}else{let e={userid:this.LoginUser.id,proid:this.proid,addrid:this.address.id,content:this.content},t=await this.$api.OrderGain(e);t.code===1?this.$notify({type:"success",message:t.msg,onClose:()=>{this.$router.push({path:"/order/order/info",query:{orderid:t.data.orderid}})}}):this.$notify({type:"warning",message:t.msg})}}},computed:{total(){let e=0;if(this.list.length>0)for(let t of this.list)e+=parseFloat(t.total);else e=this.product.price;return e*100}}};function v(e,t,l,L,s,o){const y=n("van-nav-bar"),c=n("van-contact-card"),u=n("van-card"),_=n("van-field"),b=n("van-submit-bar");return r(),h(p,null,[a(y,{title:"\u8BA2\u5355\u7ED3\u7B97","left-arrow":"",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),JSON.stringify(s.address)!="{}"?(r(),d(c,{key:0,type:"edit",name:s.address.consignee,tel:s.address.mobile,onClick:o.onOrder},null,8,["name","tel","onClick"])):(r(),d(c,{key:1,type:"add",onClick:o.onOrder},null,8,["onClick"])),this.ids.length>0?(r(!0),h(p,{key:2},w(s.list,i=>(r(),d(u,{key:i.id,num:i.nums,price:i.total,desc:"\u63CF\u8FF0\u4FE1\u606F",title:i.product.name,thumb:i.product.cover_cdn},{desc:m(()=>[f("span",null,"\u5546\u54C1\u5355\u4EF7\uFF1A\uFFE5"+g(i.price),1)]),_:2},1032,["num","price","title","thumb"]))),128)):(r(),d(u,{key:3,price:s.product.price,num:1,desc:"\u63CF\u8FF0\u4FE1\u606F",title:s.product.name,thumb:s.product.cover_cdn},{desc:m(()=>[f("span",null,"\u5546\u54C1\u5355\u4EF7\uFF1A\uFFE5"+g(s.product.price),1)]),_:1},8,["price","title","thumb"])),a(_,{modelValue:s.content,"onUpdate:modelValue":t[0]||(t[0]=i=>s.content=i),rows:"2",autosize:"",label:"\u8BA2\u5355\u5907\u6CE8",type:"textarea",maxlength:"50","label-width":"60",placeholder:"\u8BF7\u8F93\u5165\u8BA2\u5355\u5907\u6CE8","show-word-limit":"",colon:""},null,8,["modelValue"]),a(b,{price:o.total,"button-text":"\u7ED3\u7B97",onSubmit:o.onSubmit},null,8,["price","onSubmit"])],64)}const x=k(C,[["render",v]]);export{x as default};

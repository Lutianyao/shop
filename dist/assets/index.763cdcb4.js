import{_ as k,c as l,b as o,a as i,w as c,F as m,r as x,f as w,e as d,o as r,t as p,g as P}from"./index.3b68d354.js";const L="/assets/images/goback.png",B="/assets/images/ss.png",C="/assets/images/tr.png",V={created(){let n=this.$route.query.typeid;this.typeid=n,this.ProductList(),this.TypeData()},data(){return{typeid:0,ProList:[],LoginUser:this.$cookies.get("LoginUser"),flag:0,OrderBy:"id",option1:[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u54C1\u5546\u54C1",value:1},{text:"\u70ED\u9500\u5546\u54C1",value:2},{text:"\u63A8\u8350\u5546\u54C1",value:3}],option2:[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"id"},{text:"\u4EF7\u683C\u6392\u5E8F",value:"price"},{text:"\u5E93\u5B58\u6392\u5E8F",value:"stock"}],showPicker:!1,columns:[]}},methods:{GoBack(){this.$router.push("/")},async ProductList(){let n={typeid:this.typeid,userid:this.LoginUser?this.LoginUser.id:0,flag:this.flag,OrderBy:this.OrderBy},t=await this.$api.ProductIndex(n);t.code===1&&(this.ProList=t.data)},onFlag(){this.ProductList()},onOrderBy(){this.ProductList()},async TypeData(){let n=await this.$api.TypeIndex();if(n.code===1){let t=[];for(let u of n.data)t.push({text:u.name,value:u.id});this.columns=t}},onConfirm(n){this.typeid=n.value,this.ProductList(),this.showPicker=!1}}},b={class:"headerbox"},O={class:"header"},U={class:"headerL"},T=o("img",{src:L},null,-1),F=[T],q=o("div",{class:"headerC0"},[o("div",{class:"ssdiv"},[o("img",{src:B}),o("input",{name:"",type:"text",placeholder:"\u8F93\u5165\u5173\u952E\u5B57..."})])],-1),D={class:"headerR"},G=o("img",{src:C},null,-1),N=[G],I=o("div",{class:"clear"},null,-1),E={class:"shopType"},R=o("div",{class:"clear"},null,-1),S=o("div",{class:"hbox"},null,-1),W={class:"mainWarp",style:{background:"#f3f3f3"}},j={key:0,class:"proul"},z=["src"],A={class:"tit"},H={class:"price"},J={key:0},K={key:1};function M(n,t,u,Q,s,a){const _=d("van-dropdown-item"),v=d("van-dropdown-menu"),h=d("router-link"),g=d("van-empty"),y=d("van-picker"),f=d("van-popup");return r(),l(m,null,[o("div",b,[o("div",O,[o("div",U,[o("a",{onClick:t[0]||(t[0]=(...e)=>a.GoBack&&a.GoBack(...e)),class:"goback"},F)]),q,o("div",D,[o("a",{onClick:t[1]||(t[1]=e=>s.showPicker=!0)},N)])])]),I,o("div",E,[i(v,null,{default:c(()=>[i(_,{modelValue:s.flag,"onUpdate:modelValue":t[2]||(t[2]=e=>s.flag=e),options:s.option1,onChange:a.onFlag},null,8,["modelValue","options","onChange"]),i(_,{modelValue:s.OrderBy,"onUpdate:modelValue":t[3]||(t[3]=e=>s.OrderBy=e),options:s.option2,onChange:a.onOrderBy},null,8,["modelValue","options","onChange"])]),_:1})]),R,S,o("div",W,[s.ProList.length>0?(r(),l("ul",j,[(r(!0),l(m,null,x(s.ProList,e=>(r(),l("li",{key:e.id},[i(h,{to:{path:"/product/product/info",query:{proid:e.id}}},{default:c(()=>[o("img",{src:e.cover_cdn},null,8,z)]),_:2},1032,["to"]),i(h,{to:{path:"/product/product/info",query:{proid:e.id}}},{default:c(()=>[o("p",A,p(e.name),1)]),_:2},1032,["to"]),o("div",H,[e.vip_price?(r(),l("p",J,[P("\uFFE5"+p(e.vip_price),1),o("span",null,"\uFFE5"+p(e.price),1)])):(r(),l("p",K,"\uFFE5"+p(e.price),1))])]))),128))])):(r(),w(g,{key:1,description:"\u6B64\u5206\u7C7B\u6682\u65E0\u5546\u54C1"}))]),i(f,{show:s.showPicker,"onUpdate:show":t[5]||(t[5]=e=>s.showPicker=e),round:"",position:"bottom"},{default:c(()=>[i(y,{columns:s.columns,onCancel:t[4]||(t[4]=e=>s.showPicker=!1),onConfirm:a.onConfirm},null,8,["columns","onConfirm"])]),_:1},8,["show"])],64)}const Y=k(V,[["render",M]]);export{Y as default};

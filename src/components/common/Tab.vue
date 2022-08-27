<template>
        <div class="footer">
           <van-tabbar route active-color="#fe7923" style="max-width:512px">
                <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
                <van-tabbar-item replace to="/product/type/index" icon="apps-o">分类</van-tabbar-item>
                <van-tabbar-item replace to="/product/cart/index" icon="shopping-cart-o">购物车</van-tabbar-item>
                <van-tabbar-item replace to="/user/base/index" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
</template>
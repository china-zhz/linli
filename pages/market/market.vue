<template>
  <view class="page-market">
    <view class="header card">
      <view class="header-row">
        <text class="header-title">闲置交易</text>
        <view class="publish-btn">
          <text class="publish-icon">＋</text>
          <text class="publish-text">发布宝贝</text>
        </view>
      </view>
      <scroll-view scroll-x class="tag-row">
        <view class="tag tag-active">全部</view>
        <view class="tag">家具家电</view>
        <view class="tag">数码电子</view>
        <view class="tag">母婴用品</view>
        <view class="tag">图书玩具</view>
      </scroll-view>
    </view>
    <scroll-view scroll-y class="scroll">
      <view class="grid">
        <view v-for="(item, i) in products" :key="i" class="product card">
          <view class="product-image"></view>
          <view class="product-body">
            <text class="product-title">{{ item.title }}</text>
            <view class="product-price-row">
              <text class="price-symbol">¥</text>
              <text class="price-main">{{ item.price }}</text>
              <text v-if="item.origin" class="price-origin">{{ item.origin }}</text>
            </view>
            <view class="product-footer">
              <view class="owner">
                <view class="owner-avatar"></view>
                <text class="owner-name">{{ item.owner }}</text>
              </view>
              <text class="owner-building">{{ item.building }}</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { title: '九成新办公人体工学椅', price: '150', origin: '¥499', owner: '王大勇', building: '2栋' },
        { title: '乐高樱花盆栽已拼好', price: '88', origin: '', owner: '小林', building: '15栋' },
        { title: '大容量空气炸锅 5L', price: '120', origin: '', owner: '李阿姨', building: '5栋' },
        { title: '闲置吉他 入门级', price: '200', origin: '', owner: '阿强', building: '18栋' },
        { title: '宝宝扭扭车 三合一', price: '60', origin: '', owner: '苏苏', building: '7栋' },
        { title: '多肉植物带盆', price: '15', origin: '', owner: '晴天', building: '3栋' }
      ]
    }
  }
}
</script>

<style scoped>
.page-market {
  min-height: 100vh;
  padding: 24rpx 24rpx 40rpx;
  box-sizing: border-box;
}
.scroll {
  height: 100vh;
}
.header {
  margin-bottom: 24rpx;
}
.header-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #333333;
}
.publish-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10rpx 24rpx;
  border-radius: 999rpx;
  background-color: #07c160;
}
.publish-icon {
  font-size: 26rpx;
  color: #ffffff;
  margin-right: 8rpx;
}
.publish-text {
  font-size: 22rpx;
  font-weight: 600;
  color: #ffffff;
}
.tag-row {
  margin-top: 24rpx;
  white-space: nowrap;
}
.tag {
  display: inline-block;
  padding: 10rpx 28rpx;
  border-radius: 999rpx;
  font-size: 22rpx;
  color: #666666;
  background-color: #f5f5f5;
  margin-right: 16rpx;
}
.tag-active {
  background-color: #07c160;
  color: #ffffff;
}
.grid {
  margin-top: 8rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product {
  width: 48%;
  padding: 0;
  margin-top: 16rpx;
  overflow: hidden;
}
.product-image {
  width: 100%;
  height: 220rpx;
  background-color: #d9f7be;
}
.product-body {
  padding: 16rpx;
}
.product-title {
  font-size: 24rpx;
  font-weight: 600;
  color: #333333;
}
.product-price-row {
  margin-top: 8rpx;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.price-symbol {
  font-size: 22rpx;
  color: #f5222d;
}
.price-main {
  font-size: 30rpx;
  font-weight: 700;
  color: #f5222d;
  margin-left: 2rpx;
}
.price-origin {
  font-size: 20rpx;
  color: #b7b7b7;
  text-decoration: line-through;
  margin-left: 8rpx;
}
.product-footer {
  margin-top: 8rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.owner {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.owner-avatar {
  width: 32rpx;
  height: 32rpx;
  border-radius: 16rpx;
  background-color: #dddddd;
  margin-right: 8rpx;
}
.owner-name {
  font-size: 20rpx;
  color: #999999;
}
.owner-building {
  font-size: 20rpx;
  color: #bbbbbb;
}
.card {
  background-color: #ffffff;
  border-radius: 24rpx;
  padding: 24rpx;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.05);
}
</style>

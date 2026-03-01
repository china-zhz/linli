<template>
  <view class="page-index">
    <view class="header card">
      <view class="community-row" @tap="goSelectCommunity">
        <text class="community-name">{{ communityName }}</text>
        <text class="community-arrow">▾</text>
      </view>
      <view class="tab-row">
        <text class="tab-item tab-item-active">推荐动态</text>
        <text class="tab-item">社区公告</text>
        <text class="tab-item">物业服务</text>
        <text class="tab-item">投票公示</text>
      </view>
    </view>

    <scroll-view scroll-y class="scroll">
      <view class="banner card">
        <view class="banner-text">
          <text class="banner-title">2026年邻里春季运动会</text>
          <text class="banner-subtitle">报名进行中 · 已有286人参与</text>
          <view class="banner-button">
            <text class="banner-button-text">立即报名</text>
          </view>
        </view>
        <view class="banner-image-placeholder">
          <text class="banner-image-text">活动海报</text>
        </view>
      </view>

      <view class="grid card">
        <view class="grid-item">
          <view class="grid-icon grid-icon-blue">修</view>
          <text class="grid-text">物业报修</text>
        </view>
        <view class="grid-item">
          <view class="grid-icon grid-icon-orange">费</view>
          <text class="grid-text">生活缴费</text>
        </view>
        <view class="grid-item">
          <view class="grid-icon grid-icon-green">访</view>
          <text class="grid-text">访客预约</text>
        </view>
        <view class="grid-item">
          <view class="grid-icon grid-icon-purple">诉</view>
          <text class="grid-text">投诉建议</text>
        </view>
      </view>

      <view class="post card">
        <view class="post-header">
          <view class="post-avatar"></view>
          <view class="post-info">
            <view class="post-name-row">
              <text class="post-name">王大伟</text>
              <text class="post-tag">认证业主</text>
            </view>
            <text class="post-time">10分钟前</text>
          </view>
        </view>
        <text class="post-content">
          今天在北门草坪发现一只走丢的小萨姆耶，好乖呀。有丢狗的邻居吗？我暂时安顿在物业中心。#失物招领
        </text>
        <view class="post-images">
          <view class="post-image"></view>
          <view class="post-image"></view>
        </view>
        <view class="post-actions">
          <view class="post-action">
            <text class="post-action-icon">👍</text>
            <text class="post-action-text">24</text>
          </view>
          <view class="post-action">
            <text class="post-action-icon">💬</text>
            <text class="post-action-text">12</text>
          </view>
          <view class="post-action">
            <text class="post-action-icon">↗</text>
            <text class="post-action-text">分享</text>
          </view>
        </view>
      </view>

      <view class="post card">
        <view class="post-header">
          <view class="post-avatar"></view>
          <view class="post-info">
            <view class="post-name-row">
              <text class="post-name">李阿姨</text>
            </view>
            <text class="post-time">1小时前</text>
          </view>
        </view>
        <text class="post-content post-content-link">
          #邻里问问 请问大家，小区附近哪家推拿馆比较正宗？腰椎间盘突出有点老毛病犯了。
        </text>
        <view class="post-actions">
          <view class="post-action">
            <text class="post-action-icon">👍</text>
            <text class="post-action-text">8</text>
          </view>
          <view class="post-action">
            <text class="post-action-icon">💬</text>
            <text class="post-action-text">3</text>
          </view>
        </view>
      </view>
    </scroll-view>

    <view class="ai-fab">
      <text class="ai-fab-icon">🤖</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      communityName: '碧桂园清华园'
    }
  },
  onLoad() {
    try {
      const app = getApp()
      if (app.globalData && app.globalData.communityName) {
        this.communityName = app.globalData.communityName
      }
    } catch (e) {}
  },
  methods: {
    goSelectCommunity() {
      uni.navigateTo({ url: '/pages/select-community/select-community' })
    }
  }
}
</script>

<style scoped>
.page-index {
  position: relative;
  min-height: 100vh;
  padding: 24rpx 24rpx 120rpx;
  box-sizing: border-box;
}

.scroll {
  height: 100vh;
}

.header {
  margin-bottom: 24rpx;
}

.community-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.community-name {
  font-size: 32rpx;
  font-weight: 700;
  color: #333333;
}

.community-arrow {
  margin-left: 8rpx;
  font-size: 28rpx;
  color: #666666;
}

.tab-row {
  margin-top: 24rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.tab-item {
  font-size: 24rpx;
  color: #888888;
  margin-right: 32rpx;
  padding-bottom: 8rpx;
}

.tab-item-active {
  color: #07c160;
  border-bottom: 4rpx solid #07c160;
  font-weight: 600;
}

.banner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #e6f7ef, #e6f0ff);
}

.banner-text {
  flex: 1;
}

.banner-title {
  font-size: 28rpx;
  font-weight: 700;
  color: #07c160;
}

.banner-subtitle {
  margin-top: 8rpx;
  font-size: 22rpx;
  color: #666666;
}

.banner-button {
  margin-top: 16rpx;
  background-color: #07c160;
  padding: 8rpx 24rpx;
  border-radius: 999rpx;
  display: inline-flex;
}

.banner-button-text {
  font-size: 22rpx;
  color: #ffffff;
}

.banner-image-placeholder {
  width: 140rpx;
  height: 140rpx;
  border-radius: 70rpx;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-image-text {
  font-size: 22rpx;
  color: #666666;
}

.grid {
  margin-top: 24rpx;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24rpx;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 40rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  font-weight: 600;
}

.grid-icon-blue {
  background-color: #e6f0ff;
  color: #2f54eb;
}

.grid-icon-orange {
  background-color: #fff7e6;
  color: #fa8c16;
}

.grid-icon-green {
  background-color: #e6fffb;
  color: #13c2c2;
}

.grid-icon-purple {
  background-color: #f9f0ff;
  color: #722ed1;
}

.grid-text {
  margin-top: 8rpx;
  font-size: 22rpx;
  color: #555555;
}

.post {
  margin-top: 24rpx;
}

.post-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.post-avatar {
  width: 72rpx;
  height: 72rpx;
  border-radius: 36rpx;
  background-color: #dddddd;
  margin-right: 16rpx;
}

.post-info {
  flex: 1;
}

.post-name-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.post-name {
  font-size: 26rpx;
  font-weight: 600;
  color: #333333;
}

.post-tag {
  margin-left: 12rpx;
  font-size: 20rpx;
  padding: 4rpx 12rpx;
  border-radius: 999rpx;
  background-color: #e6fffb;
  color: #07c160;
}

.post-time {
  margin-top: 4rpx;
  font-size: 20rpx;
  color: #aaaaaa;
}

.post-content {
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #555555;
  line-height: 1.6;
}

.post-content-link {
  color: #1677ff;
}

.post-images {
  margin-top: 16rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.post-image {
  width: 48%;
  height: 160rpx;
  border-radius: 16rpx;
  background-color: #e5e5e5;
}

.post-actions {
  margin-top: 20rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.post-action {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 40rpx;
}

.post-action-icon {
  font-size: 28rpx;
}

.post-action-text {
  margin-left: 8rpx;
  font-size: 22rpx;
  color: #888888;
}

.ai-fab {
  position: fixed;
  right: 40rpx;
  bottom: 160rpx;
  width: 112rpx;
  height: 112rpx;
  border-radius: 56rpx;
  background: linear-gradient(135deg, #07c160, #10ad7a);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 16rpx 32rpx rgba(7, 193, 96, 0.3);
}

.ai-fab-icon {
  font-size: 40rpx;
  color: #ffffff;
}

.card {
  background-color: #ffffff;
  border-radius: 24rpx;
  padding: 24rpx;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.05);
}
</style>

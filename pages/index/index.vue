<template>
  <view class="page-index">
    <view class="header card">
      <view class="community-row" @tap="goSelectCommunity">
        <text class="community-name">{{ communityName }}</text>
        <text class="community-arrow">▾</text>
      </view>
      <view class="tab-row">
        <text
          class="tab-item"
          :class="{ 'tab-item-active': currentTab === 'feed' }"
          @tap="currentTab = 'feed'"
        >邻里动态</text>
        <text
          class="tab-item"
          :class="{ 'tab-item-active': currentTab === 'service' }"
          @tap="currentTab = 'service'"
        >物业服务</text>
        <text
          class="tab-item"
          :class="{ 'tab-item-active': currentTab === 'activity' }"
          @tap="currentTab = 'activity'"
        >邻里活动</text>
      </view>
    </view>

    <scroll-view scroll-y class="scroll">
      <!-- 邻里动态：仅邻里发布的动态 -->
      <block v-if="currentTab === 'feed'">
        <view class="section-label">邻里发布的动态</view>
        <view v-for="(item, index) in feedList" :key="item.id" class="post card">
          <view class="post-header">
            <image class="post-avatar" src="/static/images/avatar-user.jpg" mode="aspectFill" />
            <view class="post-info">
              <view class="post-name-row">
                <text class="post-name">{{ item.author }}</text>
                <text v-if="item.tag" class="post-tag">{{ item.tag }}</text>
              </view>
              <text class="post-time">{{ item.time }}</text>
            </view>
          </view>
          <text class="post-content" :class="{ 'post-content-link': item.isAsk }">{{ item.content }}</text>
          <view v-if="item.images && item.images.length" class="post-images">
            <image
              v-for="(img, i) in item.images"
              :key="i"
              class="post-image"
              :src="img"
              mode="aspectFill"
            />
          </view>
          <view class="post-actions">
            <view class="post-action" @tap="onLike(item)">
              <text class="post-action-icon" :class="{ 'post-action-icon-active': item.liked }">👍</text>
              <text class="post-action-text" :class="{ 'post-action-active': item.liked }">{{ item.likeCount }}</text>
            </view>
            <view class="post-action" @tap="onReply(item)">
              <text class="post-action-icon">💬</text>
              <text class="post-action-text">{{ item.replyCount }}</text>
            </view>
          </view>
        </view>
      </block>

      <!-- 物业服务 -->
      <block v-if="currentTab === 'service'">
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
      </block>

      <!-- 邻里活动 -->
      <block v-if="currentTab === 'activity'">
        <view class="banner card">
          <view class="banner-text">
            <text class="banner-title">2026年邻里春季运动会</text>
            <text class="banner-subtitle">报名进行中 · 已有286人参与</text>
            <view class="banner-button">
              <text class="banner-button-text">立即报名</text>
            </view>
          </view>
          <image class="banner-image" src="/static/images/banner-sport.jpg" mode="aspectFill" />
        </view>
      </block>
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
      communityName: '碧桂园清华园',
      currentTab: 'feed',
      feedList: [
        {
          id: 1,
          author: '王大伟',
          tag: '认证业主',
          time: '10分钟前',
          content: '今天在北门草坪发现一只走丢的小萨姆耶，好乖呀。有丢狗的邻居吗？我暂时安顿在物业中心。#失物招领',
          images: ['/static/images/post-dog1.jpg', '/static/images/post-dog2.jpg'],
          likeCount: 24,
          replyCount: 12,
          liked: false,
          isAsk: false
        },
        {
          id: 2,
          author: '李阿姨',
          tag: '',
          time: '1小时前',
          content: '#邻里问问 请问大家，小区附近哪家推拿馆比较正宗？腰椎间盘突出有点老毛病犯了。',
          images: [],
          likeCount: 8,
          replyCount: 3,
          liked: false,
          isAsk: true
        }
      ]
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
    },
    onLike(item) {
      item.liked = !item.liked
      item.likeCount += item.liked ? 1 : -1
    },
    onReply(item) {
      uni.showToast({
        title: '回复功能敬请期待',
        icon: 'none'
      })
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

.banner-image {
  width: 140rpx;
  height: 140rpx;
  border-radius: 70rpx;
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

.section-label {
  margin-top: 32rpx;
  margin-bottom: 12rpx;
  font-size: 24rpx;
  color: #999999;
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
  margin-right: 16rpx;
  flex-shrink: 0;
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

.post-action-active,
.post-action-icon-active {
  color: #07c160;
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

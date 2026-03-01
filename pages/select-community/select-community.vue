<template>
  <view class="page-select">
    <view class="content">
      <view class="welcome">
        <text class="welcome-title">欢迎来到邻里社区</text>
      </view>
      <view class="search-box">
        <input
          v-model="keyword"
          class="search-input"
          placeholder="搜索您所在的小区"
          placeholder-class="search-placeholder"
          type="text"
        />
      </view>
      <view class="map-container">
        <web-view 
          :src="mapUrl" 
          @message="handleMessage"
          class="map-view"
        ></web-view>
      </view>
      <view class="location-card card">
        <view class="location-header">
          <view class="location-left">
            <text class="location-icon">📍</text>
            <text class="location-label">当前定位</text>
          </view>
          <text class="location-retry" @tap="reloadMap">重新定位</text>
        </view>
        <text class="location-text">{{ currentLocation }}</text>
      </view>
      <view class="community-list">
        <text class="community-section-title">附近的社区</text>
        <view
          v-for="item in communities"
          :key="item.name"
          class="community-item card"
          @tap="goIndex(item)"
        >
          <view class="community-main">
            <view>
              <text class="community-name">{{ item.name }}</text>
              <text class="community-desc">{{ item.desc }}</text>
            </view>
            <text class="community-arrow">›</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      mapUrl: '/static/map.html',
      currentLocation: '正在定位...',
      communities: [
        { name: '碧桂园清华园', desc: '距离您 230m | 浦东新区张江街12号' },
        { name: '万科锦绣家园', desc: '距离您 850m | 浦东新区绣川路88号' },
        { name: '融创中心壹号', desc: '距离您 1.2km | 浦东新区张衡路500号' },
        { name: '静安府东区', desc: '距离您 2.5km | 静安区汶水路' }
      ]
    }
  },
  methods: {
    goIndex(item) {
      try {
        const app = getApp()
        if (app.globalData) app.globalData.communityName = item.name
      } catch (e) {}
      uni.switchTab({ url: '/pages/index/index' })
    },
    handleMessage(e) {
      const data = e.detail.data[0]
      if (data.type === 'location') {
        this.currentLocation = data.address
      }
    },
    reloadMap() {
      // 重新加载地图以触发定位
      this.mapUrl = '/static/map.html?timestamp=' + new Date().getTime()
    }
  }
}
</script>

<style scoped>
.page-select {
  background-color: #f8f8f8;
  min-height: 100vh;
}
.content {
  padding: 40rpx 32rpx 32rpx;
}
.welcome-title {
  font-size: 36rpx;
  font-weight: 700;
  color: #333333;
}
.search-box {
  margin-top: 32rpx;
}
.search-input {
  width: 100%;
  padding: 20rpx 24rpx;
  border-radius: 24rpx;
  background-color: #ffffff;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.04);
  font-size: 26rpx;
  box-sizing: border-box;
}
.search-placeholder {
  color: #bbbbbb;
}
.location-card {
  margin-top: 32rpx;
}
.location-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.location-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.location-icon {
  font-size: 28rpx;
  margin-right: 8rpx;
  color: #07c160;
}
.location-label {
  font-size: 24rpx;
  color: #666666;
}
.location-retry {
  font-size: 24rpx;
  color: #07c160;
}
.location-text {
  margin-top: 16rpx;
  font-size: 30rpx;
  font-weight: 600;
  color: #333333;
}
.community-list {
  margin-top: 32rpx;
}
.community-section-title {
  font-size: 24rpx;
  color: #999999;
  margin-left: 8rpx;
  margin-bottom: 16rpx;
}
.community-item {
  margin-top: 16rpx;
}
.community-main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.community-name {
  font-size: 30rpx;
  font-weight: 600;
  color: #333333;
}
.community-desc {
  margin-top: 8rpx;
  font-size: 22rpx;
  color: #999999;
}
.community-arrow {
  font-size: 32rpx;
  color: #cccccc;
}
.card {
  background-color: #ffffff;
  border-radius: 24rpx;
  padding: 24rpx;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.05);
}
.map-container {
  margin-top: 32rpx;
  height: 500rpx;
  border-radius: 24rpx;
  overflow: hidden;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.05);
  position: relative;
}
.map-view {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

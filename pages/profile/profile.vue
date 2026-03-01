<template>
  <view class="page-profile">
    <scroll-view scroll-y class="scroll">
      <view class="user-header">
        <view class="user-row">
          <view class="user-avatar"></view>
          <view class="user-info">
            <view class="user-name-row">
              <text class="user-name">王大卫</text>
              <text class="user-verified">✓</text>
            </view>
            <view class="user-tags-row">
              <text class="user-tag">碧桂园清华园 · 5号楼</text>
              <text class="user-tag-primary">荣誉业主</text>
            </view>
          </view>
        </view>
        <view class="stats-row">
          <view class="stat-item">
            <text class="stat-value">420</text>
            <text class="stat-label">互助积分</text>
          </view>
          <view class="stat-item">
            <text class="stat-value">12</text>
            <text class="stat-label">我的发布</text>
          </view>
          <view class="stat-item">
            <text class="stat-value">5</text>
            <text class="stat-label">邻里勋章</text>
          </view>
        </view>
      </view>
      <view class="section">
        <view class="card">
          <text class="section-title">我的社区</text>
          <view class="shortcut-grid">
            <view class="shortcut-item">
              <view class="shortcut-icon shortcut-icon-orange"></view>
              <text class="shortcut-text">我的账单</text>
            </view>
            <view class="shortcut-item">
              <view class="shortcut-icon shortcut-icon-blue"></view>
              <text class="shortcut-text">物业咨询</text>
            </view>
            <view class="shortcut-item">
              <view class="shortcut-icon shortcut-icon-green"></view>
              <text class="shortcut-text">智能开门</text>
            </view>
            <view class="shortcut-item">
              <view class="shortcut-icon shortcut-icon-purple"></view>
              <text class="shortcut-text">我的车位</text>
            </view>
          </view>
        </view>
        <view class="card list-card">
          <view class="list-item">
            <view class="list-left">
              <view class="list-icon"></view>
              <text class="list-text">消息中心</text>
            </view>
            <view class="list-right">
              <text class="badge">3</text>
            </view>
          </view>
          <view class="list-item">
            <view class="list-left">
              <view class="list-icon"></view>
              <text class="list-text">偏好设置</text>
            </view>
            <text class="list-arrow">›</text>
          </view>
          <view class="list-item">
            <view class="list-left">
              <view class="list-icon"></view>
              <text class="list-text">隐私管理</text>
            </view>
            <text class="list-arrow">›</text>
          </view>
          <view class="list-item">
            <view class="list-left list-left-danger">
              <view class="list-icon list-icon-danger"></view>
              <text class="list-text list-text-danger">切换账号</text>
            </view>
          </view>
        </view>
        <view class="senior card">
          <view class="senior-left">
            <view class="senior-icon"></view>
            <view>
              <text class="senior-title">长辈服务模式</text>
              <text class="senior-subtitle">更大字体，更简单的界面设计</text>
            </view>
          </view>
          <view class="switch">
            <view class="switch-thumb"></view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.page-profile {
  min-height: 100vh;
  background-color: #f8f8f8;
}
.scroll {
  height: 100vh;
}
.user-header {
  padding: 64rpx 24rpx 24rpx;
  background: linear-gradient(180deg, #e8f5e9, #f8f8f8);
}
.user-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 60rpx;
  background-color: #ffffff;
  border: 4rpx solid #ffffff;
  box-shadow: 0 8rpx 16rpx rgba(0, 0, 0, 0.06);
}
.user-info {
  margin-left: 24rpx;
}
.user-name-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-name {
  font-size: 32rpx;
  font-weight: 700;
  color: #333333;
}
.user-verified {
  margin-left: 8rpx;
  font-size: 26rpx;
  color: #07c160;
}
.user-tags-row {
  margin-top: 8rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.user-tag,
.user-tag-primary {
  font-size: 20rpx;
  padding: 6rpx 14rpx;
  border-radius: 999rpx;
  margin-right: 8rpx;
}
.user-tag {
  background-color: #ffffff;
  border: 1rpx solid #dddddd;
  color: #777777;
}
.user-tag-primary {
  background-color: #07c160;
  color: #ffffff;
}
.stats-row {
  margin-top: 32rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-value {
  font-size: 32rpx;
  font-weight: 700;
  color: #333333;
}
.stat-label {
  margin-top: 4rpx;
  font-size: 20rpx;
  color: #999999;
}
.section {
  padding: 0 24rpx 24rpx;
  margin-top: -16rpx;
}
.section-title {
  font-size: 26rpx;
  font-weight: 600;
  margin-bottom: 20rpx;
  color: #333333;
}
.shortcut-grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.shortcut-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.shortcut-icon {
  width: 64rpx;
  height: 64rpx;
  border-radius: 32rpx;
}
.shortcut-icon-orange {
  background-color: #fff7e6;
}
.shortcut-icon-blue {
  background-color: #e6f7ff;
}
.shortcut-icon-green {
  background-color: #e6fffb;
}
.shortcut-icon-purple {
  background-color: #f9f0ff;
}
.shortcut-text {
  margin-top: 10rpx;
  font-size: 22rpx;
  color: #555555;
}
.list-card {
  margin-top: 16rpx;
  padding: 0;
}
.list-item {
  padding: 24rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1rpx solid #f0f0f0;
}
.list-item:last-child {
  border-bottom-width: 0;
}
.list-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.list-left-danger {
  color: #f5222d;
}
.list-icon {
  width: 40rpx;
  height: 40rpx;
  border-radius: 20rpx;
  background-color: #f0f0f0;
  margin-right: 16rpx;
}
.list-icon-danger {
  background-color: #fff1f0;
}
.list-text {
  font-size: 24rpx;
  color: #333333;
}
.list-text-danger {
  color: #f5222d;
}
.list-arrow {
  font-size: 28rpx;
  color: #cccccc;
}
.badge {
  min-width: 32rpx;
  padding: 4rpx 10rpx;
  border-radius: 999rpx;
  font-size: 20rpx;
  text-align: center;
  background-color: #f5222d;
  color: #ffffff;
}
.senior {
  margin-top: 16rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff7e6;
  border: 1rpx solid #ffe7ba;
}
.senior-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.senior-icon {
  width: 64rpx;
  height: 64rpx;
  border-radius: 32rpx;
  background-color: #ffd591;
  margin-right: 16rpx;
}
.senior-title {
  font-size: 26rpx;
  font-weight: 600;
  color: #ad4e00;
}
.senior-subtitle {
  margin-top: 4rpx;
  font-size: 20rpx;
  color: #d46b08;
}
.switch {
  width: 88rpx;
  height: 40rpx;
  border-radius: 20rpx;
  background-color: #d9d9d9;
  position: relative;
}
.switch-thumb {
  width: 32rpx;
  height: 32rpx;
  border-radius: 16rpx;
  background-color: #ffffff;
  position: absolute;
  left: 4rpx;
  top: 4rpx;
}
.card {
  background-color: #ffffff;
  border-radius: 24rpx;
  padding: 24rpx;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.05);
}
</style>

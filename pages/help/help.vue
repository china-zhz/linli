<template>
  <view class="page-help">
    <view class="header card">
      <view class="header-row">
        <text class="header-title">邻里互助</text>
        <view class="points">
          <text class="points-icon">Ⓟ</text>
          <text class="points-text">420 积分</text>
        </view>
      </view>
      <view class="switch-row">
        <view class="switch-btn switch-btn-active">
          <text class="switch-text switch-text-active">我要求助</text>
        </view>
        <view class="switch-btn">
          <text class="switch-text">我的任务</text>
        </view>
      </view>
    </view>
    <scroll-view scroll-y class="scroll">
      <view class="help-card card help-card-orange">
        <view class="help-top">
          <view class="help-left">
            <text class="help-badge help-badge-orange">生活紧急</text>
            <text class="help-title">下雨了，谁能帮 5号楼302室 收个衣服？</text>
          </view>
          <view class="help-right">
            <text class="help-points">+20 积分</text>
            <text class="help-time">刚刚发布</text>
          </view>
        </view>
        <text class="help-desc">人不在家，阳台落地窗没关，衣服眼看就要淋湿了，求好心邻居帮个忙！</text>
        <view class="help-footer">
        <view class="user">
          <image class="user-avatar" src="/static/images/avatar-help.jpg" mode="aspectFill" />
          <text class="user-name">陈女士 · 5号楼</text>
        </view>
          <view class="help-btn">立即接单</view>
        </view>
      </view>
      <view class="help-card card help-card-blue">
        <view class="help-top">
          <view class="help-left">
            <text class="help-badge help-badge-blue">物力协助</text>
            <text class="help-title">家里梯子坏了，谁家能借个梯子用半天？</text>
          </view>
          <view class="help-right">
            <text class="help-points">+10 积分</text>
            <text class="help-time">20分钟前</text>
          </view>
        </view>
        <text class="help-desc">要换客厅灯泡，手能够不着。用完速还，送上一瓶可乐表示感谢！</text>
        <view class="help-footer">
        <view class="user">
          <image class="user-avatar" src="/static/images/avatar-help.jpg" mode="aspectFill" />
          <text class="user-name">赵哥 · 12号楼</text>
        </view>
          <view class="help-btn">联系邻居</view>
        </view>
      </view>
      <view class="help-card card help-card-green">
        <view class="help-top">
          <view class="help-left">
            <text class="help-badge help-badge-green">专业咨询</text>
            <text class="help-title">求懂电脑的邻居帮忙清理下风扇灰尘</text>
          </view>
          <view class="help-right">
            <text class="help-points">+50 积分</text>
            <text class="help-time">1小时前</text>
          </view>
        </view>
        <text class="help-desc">笔记本电脑响声特别大，自己不敢拆。只要清理一下就行，重谢！</text>
        <view class="help-footer">
          <view class="user">
            <view class="user-avatar"></view>
            <text class="user-name">小周 · 8号楼</text>
          </view>
          <view class="help-btn">提供帮助</view>
        </view>
      </view>
      <view class="honor card">
        <view class="honor-title-row">
          <text class="honor-icon">🏅</text>
          <text class="honor-title">本周邻里之星</text>
        </view>
        <view class="honor-row">
        <view class="honor-item">
          <image class="honor-avatar" src="/static/images/avatar-star.jpg" mode="aspectFill" />
          <text class="honor-name">刘大夫</text>
            <text class="honor-meta">接单12次</text>
          </view>
          <view class="honor-item">
            <view class="honor-avatar"></view>
            <text class="honor-name">阿强</text>
            <text class="honor-meta">接单9次</text>
          </view>
        <view class="honor-item">
          <image class="honor-avatar" src="/static/images/avatar-star.jpg" mode="aspectFill" />
          <text class="honor-name">林小姐</text>
            <text class="honor-meta">接单7次</text>
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
.page-help {
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
.points {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #07c160;
}
.points-icon {
  font-size: 26rpx;
  margin-right: 8rpx;
}
.points-text {
  font-size: 26rpx;
  font-weight: 600;
}
.switch-row {
  margin-top: 24rpx;
  background-color: #f2f2f2;
  border-radius: 999rpx;
  padding: 4rpx;
  display: flex;
  flex-direction: row;
}
.switch-btn {
  flex: 1;
  border-radius: 999rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12rpx 0;
}
.switch-btn-active {
  background-color: #ffffff;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.04);
}
.switch-text {
  font-size: 24rpx;
  color: #666666;
}
.switch-text-active {
  color: #07c160;
  font-weight: 600;
}
.help-card {
  margin-top: 24rpx;
  border-left-width: 8rpx;
  border-left-style: solid;
}
.help-card-orange {
  border-left-color: #fa8c16;
}
.help-card-blue {
  border-left-color: #1890ff;
}
.help-card-green {
  border-left-color: #52c41a;
}
.help-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.help-left {
  flex: 1;
}
.help-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.help-badge {
  font-size: 20rpx;
  padding: 4rpx 10rpx;
  border-radius: 8rpx;
}
.help-badge-orange {
  background-color: #fff7e6;
  color: #fa8c16;
}
.help-badge-blue {
  background-color: #e6f7ff;
  color: #1890ff;
}
.help-badge-green {
  background-color: #f6ffed;
  color: #52c41a;
}
.help-title {
  margin-top: 12rpx;
  font-size: 28rpx;
  font-weight: 600;
  color: #333333;
}
.help-points {
  font-size: 26rpx;
  color: #07c160;
  font-weight: 600;
}
.help-time {
  margin-top: 4rpx;
  font-size: 20rpx;
  color: #aaaaaa;
}
.help-desc {
  margin-top: 16rpx;
  font-size: 24rpx;
  color: #666666;
  line-height: 1.6;
}
.help-footer {
  margin-top: 20rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.user {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-avatar {
  width: 48rpx;
  height: 48rpx;
  border-radius: 24rpx;
  margin-right: 12rpx;
  flex-shrink: 0;
}
.user-name {
  font-size: 22rpx;
  color: #888888;
}
.help-btn {
  padding: 10rpx 32rpx;
  border-radius: 999rpx;
  background-color: #07c160;
  color: #ffffff;
  font-size: 22rpx;
  font-weight: 600;
}
.honor {
  margin-top: 24rpx;
  background: linear-gradient(135deg, #f6ffed, #e6fffb);
}
.honor-title-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16rpx;
}
.honor-icon {
  font-size: 32rpx;
  margin-right: 8rpx;
}
.honor-title {
  font-size: 26rpx;
  font-weight: 600;
  color: #237804;
}
.honor-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.honor-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.honor-avatar {
  width: 80rpx;
  height: 80rpx;
  border-radius: 40rpx;
  margin-bottom: 8rpx;
  flex-shrink: 0;
}
.honor-name {
  font-size: 22rpx;
  font-weight: 600;
  color: #555555;
}
.honor-meta {
  margin-top: 4rpx;
  font-size: 20rpx;
  color: #389e0d;
}
.card {
  background-color: #ffffff;
  border-radius: 24rpx;
  padding: 24rpx;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.05);
}
</style>

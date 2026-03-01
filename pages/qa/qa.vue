<template>
  <view class="page-qa">
    <view class="header card">
      <text class="header-title">邻里问问</text>
      <view class="search-row">
        <input
          v-model="keyword"
          class="search-input"
          placeholder="搜搜大家都在问什么"
          placeholder-class="search-placeholder"
        />
      </view>
    </view>
    <scroll-view scroll-y class="scroll">
      <view class="category card">
        <view class="category-item">
          <view class="category-icon category-icon-blue">家</view>
          <text class="category-text">生活常识</text>
        </view>
        <view class="category-item">
          <view class="category-icon category-icon-pink">吃</view>
          <text class="category-text">周边美食</text>
        </view>
        <view class="category-item">
          <view class="category-icon category-icon-yellow">教</view>
          <text class="category-text">教育资讯</text>
        </view>
        <view class="category-item">
          <view class="category-icon category-icon-green">医</view>
          <text class="category-text">医疗健康</text>
        </view>
      </view>
      <view class="section">
        <text class="section-title">热门问答</text>
        <view class="qa-card card">
          <view class="qa-title-row">
            <text class="qa-tag-hot">热</text>
            <text class="qa-title">请问小区附近的“浦东图书馆”周一开馆吗？</text>
          </view>
          <text class="qa-brief">王老师回复：周一通常是闭馆日进行内部整理，建议周二至周日前往...</text>
          <view class="qa-footer">
            <text class="qa-meta">32个回复 · 1.2k 浏览</text>
            <text class="qa-chip">查看详情</text>
          </view>
        </view>
        <view class="qa-card card">
          <view class="qa-title-row">
            <text class="qa-tag-new">新</text>
            <text class="qa-title">大家家里的宽带续费都是多少钱一年？感觉我续贵了。</text>
          </view>
          <text class="qa-brief qa-brief-empty">暂无邻居回复，快来抢沙发吧~</text>
          <view class="qa-footer">
            <text class="qa-meta">0个回复 · 45 浏览</text>
            <text class="qa-chip">我要回答</text>
          </view>
        </view>
        <view class="qa-card card">
          <view class="qa-title-row">
            <text class="qa-title">推荐一个周边好吃的早点摊位，最好是有豆浆油条的那种。</text>
          </view>
          <text class="qa-brief">张大爷：东门出口左转200米有个陈记早点，他们家的咸豆浆是一绝，开了十多年了...</text>
          <view class="qa-footer">
            <text class="qa-meta">54个回复 · 890 浏览</text>
            <text class="qa-chip">查看详情</text>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="ask-fab">
      <text class="ask-fab-icon">＋</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return { keyword: '' }
  }
}
</script>

<style scoped>
.page-qa {
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
.header-title {
  font-size: 32rpx;
  font-weight: 700;
  color: #333333;
}
.search-row {
  margin-top: 24rpx;
}
.search-input {
  width: 100%;
  padding: 20rpx 24rpx;
  border-radius: 999rpx;
  background-color: #f2f2f2;
  font-size: 24rpx;
  box-sizing: border-box;
}
.search-placeholder {
  color: #b3b3b3;
}
.category {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24rpx;
}
.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.category-icon {
  width: 96rpx;
  height: 96rpx;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  font-weight: 600;
}
.category-icon-blue {
  background-color: #e6f0ff;
  color: #2f54eb;
}
.category-icon-pink {
  background-color: #ffe6f1;
  color: #eb2f96;
}
.category-icon-yellow {
  background-color: #fff7e6;
  color: #faad14;
}
.category-icon-green {
  background-color: #e6fffb;
  color: #13c2c2;
}
.category-text {
  margin-top: 8rpx;
  font-size: 22rpx;
  color: #555555;
}
.section {
  margin-top: 8rpx;
}
.section-title {
  font-size: 24rpx;
  color: #999999;
  margin-bottom: 16rpx;
}
.qa-card {
  margin-top: 16rpx;
}
.qa-title-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.qa-tag-hot,
.qa-tag-new {
  font-size: 20rpx;
  padding: 4rpx 10rpx;
  border-radius: 8rpx;
  color: #ffffff;
  margin-right: 12rpx;
}
.qa-tag-hot {
  background-color: #fa8c16;
}
.qa-tag-new {
  background-color: #52c41a;
}
.qa-title {
  flex: 1;
  font-size: 26rpx;
  font-weight: 600;
  color: #333333;
}
.qa-brief {
  margin-top: 12rpx;
  font-size: 24rpx;
  color: #666666;
}
.qa-brief-empty {
  font-style: italic;
}
.qa-footer {
  margin-top: 16rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.qa-meta {
  font-size: 20rpx;
  color: #999999;
}
.qa-chip {
  font-size: 20rpx;
  padding: 6rpx 16rpx;
  border-radius: 999rpx;
  background-color: #f5f5f5;
  color: #666666;
}
.ask-fab {
  position: fixed;
  right: 40rpx;
  bottom: 160rpx;
  width: 112rpx;
  height: 112rpx;
  border-radius: 56rpx;
  background-color: #07c160;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 16rpx 32rpx rgba(7, 193, 96, 0.3);
}
.ask-fab-icon {
  font-size: 44rpx;
  color: #ffffff;
}
.card {
  background-color: #ffffff;
  border-radius: 24rpx;
  padding: 24rpx;
  box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.05);
}
</style>

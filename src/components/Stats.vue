<template>
  <div class="stats-card">
    <h2>欢迎回来！管理员</h2>
    <div class="stats-card-introduction" style="display: flex; align-items: center; justify-content: space-between;">
        <h3 style="margin: 0;">订单数据</h3>
        <a href="#" class="detail-link">查看近日详情</a>
    </div>
  
    <div class="stats-grid">
      <div class="stat-item">
        <div>
          <img src="../images/全部订单.png" alt="图标" class="stat-icon"/>
        </div>
        <div>
          <p class="stat-label">全部订单</p>
          <p class="stat-value">3个</p>
        </div>
      </div>
      
      <div class="stat-item">
        <div>
          <img src="../images/已完成.png" alt="图标" class="stat-icon"/>
        </div>
        <div>
          <p class="stat-label">已完成订单</p>
          <p class="stat-value warning">0个</p>
        </div>
      </div>
      
      <div class="stat-item">
        <div>
          <img src="../images/进行中.png" alt="图标" class="stat-icon"/>
        </div>
        <div>
          <p class="stat-label">进行中订单</p>
          <p class="stat-value highlight">97.3%</p>
        </div>
      </div>
      
      <div class="stat-item">
        <div>
          <img src="../images/新增.png" alt="图标" class="stat-icon"/>
        </div>
        <div>
          <p class="stat-label">新增订单</p>
          <p class="stat-value">0.0%</p>
        </div>
      </div>
      
      <div class="stat-item">
        <div>
          <img src="../images/准点率.png" alt="图标" class="stat-icon"/>
        </div>
        <div>
          <p class="stat-label">订单准点率</p>
          <p class="stat-value">0.0%</p>
        </div>
      </div>
    </div>
    
    <div class="stats-card-introduction" style="display: flex; align-items: center; justify-content: space-between;">
        <h3 style="margin: 0;">用户数据</h3>
        <a href="#" class="detail-link">查看近日详情</a>
    </div>

    <div class="stats-grid">
      <div class="stat-item">
        <div>
          <img src="../images/用户数量.png" alt="图标" class="stat-icon"/>
        </div>
        <div>
          <p class="stat-label">用户数量</p>
          <p class="stat-value">10个</p>
        </div>
      </div>
      
      <div class="stat-item">
        <div>
          <img src="../images/新增用户.png" alt="图标" class="stat-icon"/>
        </div>
        <div>
          <p class="stat-label">新增用户</p>
          <p class="stat-value">0.0%</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Stats'
}
</script>
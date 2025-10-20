<template>
  <div class="navigation-container">
    <h3 style="display: flex; align-items: left;">快捷操作</h3>
    <div class="navigation-grid">
    <div class="nav-card" @click="navigateTo('user')">
      <div class="nav-icon">
        <img src="../images/用户.png" alt="用户图标" />
      </div>
      <div class="nav-label">用户管理</div>
    </div>
    
    <div class="nav-card" @click="navigateTo('order')">
      <div class="nav-icon">
        <img src="../images/购物.png" alt="订单图标" />
      </div>
      <div class="nav-label">订单管理</div>
    </div>
    
    <div class="nav-card" @click="navigateTo('drone')">
      <div class="nav-icon">
        <img src="../images/无人机.png" alt="无人机图标" />
      </div>
      <div class="nav-label">无人机管理</div>
    </div>
    
    <div class="nav-card" @click="navigateTo('delivery')">
      <div class="nav-icon">
        <img src="../images/购物.png" alt="配送图标" />
      </div>
      <div class="nav-label">配送中心管理</div>
    </div>
  </div>
  </div>
</template>


<script>
export default {
  name: 'NavigationGrid',
  methods: {
    navigateTo(module) {
      console.log(`导航到: ${module}管理`)
    }
  }
}
</script>


<style scoped>
.navigation-container {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
}

.navigation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 明确的2列布局 */
  gap: 10px;
  width: 100%;
}

.nav-card {
  width: 120px;        
  height: 150px;
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  overflow: visible;
}

.nav-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  overflow: hidden;
}
.nav-icon:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: #4299e1;
}

.nav-icon img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.nav-label {
  text-align: center;
  font-size: 0.9rem;
  color: #2d3748;
  font-weight: 500;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .navigation-container {
    max-width: 280px;
  }
  
  .nav-card {
    width: 110px;
    height: 130px;
  }
  
  .nav-icon {
    width: 50px;
    height: 50px;
  }
  
  .nav-icon img {
    width: 28px;
    height: 28px;
  }
  
  .nav-label {
    font-size: 0.85rem;
  }
}
</style>
<template>
  <div class="dashboard-header-bar">
    <img src="../images/无人机 1.png" alt="logo" class="header-icon" />
    <h1 class="header-title">超级飞侠——无人机智慧物联管理系统</h1>
    <button class="dashboard-header-settings">
      <img src="../images/Headset-one (耳机).png" alt="语音" class="gear-icon" />
    </button>
    <button class="dashboard-header-settings">
      <img src="../images/Settings.png" alt="设置" class="gear-icon" />
    </button>
    <button class="logout-btn" @click="handleLogout">
      <img src="../images/人.png" alt="player" class="header-icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  data() {
  return {
    username: ''
  }
},
mounted() {
  this.getUserInfo()  // 获取并显示用户名
  // 登录状态检查
},
methods: {
  getUserInfo() {
    const user = localStorage.getItem('user')
    if (user) {
      this.username = user
    }
  },
  handleLogout() {
  if (confirm('确定要退出登录吗？')) {
    this.performLogout()
  }
  },
  performLogout() {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('user')
  
  alert('已安全退出系统')
  
  this.$router.push('/login')
}
}
}
</script>

<style scoped>
.dashboard-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0 32px;
  height: 75px;
  width: 100vw;
  color: #2d3748;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.logout-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.header-icon {
  width: 60px;
  height: auto; 
  border: none;
  margin-right: 30px;
}

.header-title {
  flex: 1;
  font-size: 1.9rem;
  color: #2d3748;
  margin: 0;
  margin-left: 10px;
}

.dashboard-header-settings {
  background: none;
  cursor: pointer;
  padding: 0;
  border: none;
}

.gear-icon {
  height: 40px;
  width: 40px;
  margin-left: 5px;
  margin-right: 20px;
}
</style>
<template>
  <div class="login-container">
    <div class="login-left">
        <div class="logo">
            <img  src="../images/无人机 1.png" alt="标志图" width="90px" height="90px"/>
            <h2>UavFly</h2>
        </div>
        <div class="feature-card">
            <h3 class="feature-title">接入Echarts运营数据分析模块</h3>
            <p class="feature-desc">利用Echarts实现动态的数据可视化，展示不同时间段数据，提高数据分析效率和效果</p>
            <img class="feature-img" src="../images/页面 2 1.png" alt="小程序图">
        </div>
    </div>

    <div class="login-right">
        <div class="login-form-container">
        <div class="login-header">
            <h2>登录 UavFly</h2>
            <p>无人机智慧物联管理系统</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group">
              <img src="../images/用户.png" alt="用户" class="form-input-img"/>
              <input
                  v-model="username"
                  type="text"
                  placeholder="用户名"
                  required
                  class="form-input"
              />
            </div>
            <div class="form-group">
              <img src="../images/icon.png" alt="密码" class="form-input-img"/>
              <input
                  v-model="password"
                  type="text"
                  placeholder="密码"
                  required
                  class="form-input"
              />
            </div>
            <div class="form-options">
            <label class="checkbox-label">
                <input
                    v-model="form.rememberMe"
                    type="checkbox"
                    class="checkbox-input"
                >
                <span class="checkbox-custom"></span>
                <span class="checkbox-text">记住密码</span>
                </label>
                <a href="#" class="forgot-link" @click.prevent="handleForgotPassword">
                忘记密码
                </a>
            </div>
            <button type="submit" class="login-button" :disabled="loading">
                <span v-if="loading">登录中...</span>
                <span v-else>登录</span>
            </button>
        </form>
        </div>
    </div>        
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // 表单数据
      form: {
        username: '',
        password: '',
        rememberMe: false
      },
      // 控制密码显示/隐藏
      showPassword: false,
      // 登录加载状态
      loading: false
    }
  },
  methods: {
    handleLogin() {
      // 模拟登录逻辑
      if (this.username && this.password) {
        // 保存登录状态
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('user', this.username)
        
        // 跳转到主页面
        this.$router.push('/')
      } else {
        alert('请输入用户名和密码')
      }
    }
  },
  mounted() {
    // 如果已经登录，直接跳转到主页面
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e6ea;;
}
/*左侧*/
.login-left {
  flex: 1;
  min-height: 100vh;
  background-image: url('../images/left.png');
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  display: flex;
  width:100%;
  height: 90px;
  min-height: 40px; /* 防止被压缩 */
  gap: 12px;
  align-items: center;
}
.logo h2 {
  font-size: 24px;
  font-weight: 600;
  line-height: 40px; /* 垂直居中 */
}
.feature-card {
  flex:1;
  display: flex;
  text-align: center;
  width:60%;
  align-items: center;    /* 垂直 */
  justify-content: center; /* 水平 */
  flex-wrap: wrap;
}
.feature-title {
  align-self: flex-end; /* 交叉轴起点 */
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.4;
}
.feature-desc {
  align-self: flex-start; /* 交叉轴起点 */
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.9;
  text-align: left;
}
.feature-img {
  width: 50%;
  height: auto;
}

/*右侧*/
.login-right {
  flex: 1;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.login-form-container {
  width: 100%;
  max-width: 320px;
}
.login-header {
  text-align: left;
  margin-bottom: 20px;
}

.login-header h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.login-header p {
  color: #666;
  font-size: 14px;
}


/* 表单样式 */
.login-form {
  width: 100%;
}
.form-group {
  margin-bottom: 20px;
  align-items: center;
}
.form-input {
  width: 100%;
  height: 48px;
  padding: 0 40px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s;
  background: #d5d7d9ef;
}
.form-input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
.form-input-img{
    width:25px;
    height:25px;
    margin-left:10px;
    margin-top: 10px;
    position: absolute;
}
/* 选项区域 */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #666;
}
.checkbox-input {
  margin-right: 8px;
}
.forgot-link {
  color: #667eea;
  text-decoration: none;
  font-size: 14px;
}
.forgot-link:hover {
  text-decoration: underline;
}
/* 登录按钮 */
.login-button {
  width: 100%;
  height: 48px;
  background: #16b2c6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.login-button:hover {
  background: #6bcb90;
}
</style>
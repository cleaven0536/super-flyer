<template>
    <ul>
      <!-- 仪表盘选项 -->
      <li 
        class="side-option" 
        :class="{ active: activeItem === 'dashboard' }"
      >
        <button @click="toggleMenu('dashboard')">
          <div class="option-content">
            <img src="../images/Dashboard-one (仪表盘).png" alt="图 " class="option-content-img"/>
            <span>仪表盘</span>
          </div>
          <span class="dropdown-icon" :class="{ rotated: openStates.dashboard }">V</span>
        </button>
        <ul 
        v-if="openStates.dashboard"
        class="sub-items-container"
        >
        <li class="sub-item-row">
          <div class="option-content-sub">
            <img src="../images/Workbench (工作台).png" alt="图"/>
            <span>工作台</span>
          </div>
        </li>
        </ul>
      </li>
      
      <!-- 订单管理选项 -->
      <li 
        class="side-option" 
        :class="{ active: activeItem === 'order' }"
      >
        <button @click="toggleMenu('order')">
          <div class="option-content">
            <img src="../images/Comments (评论).png" alt="图 " class="option-content-img"/>
            <span>信息管理</span>
          </div>
          <span class="dropdown-icon" :class="{ rotated: openStates.order }">V</span>
        </button>
        <ul 
        v-if="openStates.order"
        class="sub-items-container"
        >
        <li class="sub-item-row">
          <div class="option-content-sub">
            <img src="../images/Chart-line-area (折线面积图).png" alt="图 " />
            <span>后端界面</span>
          </div>
        </li>
        </ul>
      </li>
      
      <!-- 无人机管理选项 -->
      <li 
        class="side-option" 
        :class="{ active: activeItem === 'drone' }"
        @click="setActive('drone')"
      >
        <button>
          <div class="option-content">
            <img src="../images/Bill (法案).png" alt=" " class="option-content-img"/>
            <span>订单</span>
          </div>
          <span class="dropdown-icon">V</span>
        </button>
        <ul 
        v-if="openStates.drone"
        class="sub-items-container"
        >
        <li class="sub-item-row">
          <div class="option-content-sub">
            <img src="" alt=" " />
            <span>订单数据</span>
          </div>
        </li>
        </ul>
      </li>
      
      <!-- 配送中心管理选项 -->
      <li 
        class="side-option" 
        :class="{ active: activeItem === 'delivery' }"
        @click="setActive('delivery')"
      >
        <button>
          <div class="option-content">
            <img src="../images/Transporter (送货车).png" alt="配送" class="option-content-img"/>
            <span>配送物</span>
          </div>
          <span class="dropdown-icon">V</span>
        </button>
        <ul 
        v-if="openStates.delivery"
        class="sub-items-container"
        >
        <li class="sub-item-row">
          <div class="option-content-sub">
            <img src=" " alt=" " />
            <span>货物</span>
          </div>
        </li>
        </ul>
      </li>
    </ul>   
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      activeItem: 'dashboard',
      openStates: {
        dashboard: false,
        order: false,
        drone: false,
        delivery: false
      }
    }
  },
  methods: {
    toggleMenu(menuName) {
      if (this.openStates[menuName]) {
        this.openStates[menuName] = false;
      } else {
        Object.keys(this.openStates).forEach(key => {
          this.openStates[key] = false;
        });
        this.openStates[menuName] = true;
      }
      this.activeItem = menuName;
      this.$emit('menu-change', menuName);
    },
}
}
</script>

<style scoped>
/* 左侧栏样式 */
.side-option {
  list-style: none;
  width: 100%;
}

.side-option button {
  width: 100%;
  background: none;
  border: none;
  padding: 14px 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #333;
  font-size: 14px;
  transition: all 0.3s;
}

.side-option button:hover {
  background-color: #f0f7ff;
  color: #1890ff;
}

.side-option.active button {
  background-color: #e6f7ff;
  color: #1890ff;
  border-right: 3px solid #1890ff;
}

.option-content {
  display: flex;
  align-items: center;
}

.option-content-img{
  width:20px;
  height:20px;
  margin-right:10px;
}

.dropdown-icon {
  font-size: 12px;
  color: #999;
  transition: transform 0.3s;
}

.side-option.active .dropdown-icon {
  transform: rotate(180deg);
  color: #1890ff;
}

.sub-items-container {
  display: flex;
  justify-content: center;
  padding-left: 20px;
  height: 40px;
  align-items: center;
}

.option-content-sub img{
  width:22px;
  height:22px;
  margin-right:10px;

}
</style>
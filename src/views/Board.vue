<template>
  <div class="page-layout">
    <header class="header-bar">
      <DashboardHeader />
    </header>
    
    <div class="main-content">
      <section class="Menu">
        <SideBar @menu-change="handleMenuChange"/>
      </section>

      <section class="stats-section">
        <Stats v-if="currentComponent === 'Stats'"/>
        <Information v-if="currentComponent === 'Information'"/>
      </section>
      
      <section class="trans">
        <NavigationGrid />
      </section>
    </div>
  </div>
</template>

<script>
import DashboardHeader from '../components/DashboardHeader.vue'
import SideBar from '../components/SideBar.vue'
import Information from '../components/Information.vue'
import Stats from '../components/Stats.vue'
import NavigationGrid from '../components/NavigationGrid.vue'

export default {
  name: 'Board',
  components: {
    SideBar,
    DashboardHeader,
    Stats,
    Information,
    NavigationGrid
  },
  data() {
    return {
      currentComponent: 'Stats' 
    }
  },
  methods: {
    /**
     * 处理菜单变化事件
     * @param {string} menuItem - 菜单项标识
     */
    handleMenuChange(menuItem) {
      switch(menuItem) {
        case 'dashboard':
          this.currentComponent = 'Stats'
          break
        case 'order':
          this.currentComponent = 'Information'
          break
        default:
          this.currentComponent = 'Stats'
        }
      }
    }
}
</script>

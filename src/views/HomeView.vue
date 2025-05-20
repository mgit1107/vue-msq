<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    
    <div class="feature-cards">
      <router-link to="/train-ticket" class="feature-card train-ticket">
        <div class="card-content">
          <div class="card-icon">🚄</div>
          <h3>火车票预订</h3>
          <p>便捷的火车票查询和预订服务</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.feature-card {
  text-decoration: none;
  color: inherit;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.train-ticket {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
}

.card-content {
  padding: 24px;
  text-align: center;
}

.card-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.card-content h3 {
  margin: 0 0 12px 0;
  font-size: 24px;
}

.card-content p {
  margin: 0;
  font-size: 16px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .feature-cards {
    grid-template-columns: 1fr;
  }
}
</style>

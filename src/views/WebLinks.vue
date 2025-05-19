<script setup>
import { ref } from 'vue'

const links = ref([
  {
    title: 'Vue.js 官方文档',
    description: 'Vue.js 的官方文档，包含完整的API参考和教程',
    url: 'https://vuejs.org/'
  },
  {
    title: 'Vue Router',
    description: 'Vue.js 的官方路由管理器',
    url: 'https://router.vuejs.org/'
  },
  {
    title: 'Vuex',
    description: 'Vue.js 的状态管理模式',
    url: 'https://vuex.vuejs.org/'
  },
  {
    title: 'Element Plus',
    description: '基于 Vue 3 的组件库',
    url: 'https://element-plus.org/'
  }
])
</script>

<template>
  <div class="links-container">
    <h1>有用的网页链接</h1>
    <div class="links-grid">
      <div v-for="link in links" :key="link.url" class="link-card">
        <h2>{{ link.title }}</h2>
        <p>{{ link.description }}</p>
        <a :href="link.url" target="_blank" class="link-button">访问网站</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.links-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.link-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.link-card:hover {
  transform: translateY(-5px);
}

.link-card h2 {
  color: #42b983;
  margin-bottom: 10px;
  font-size: 1.5em;
}

.link-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.link-button {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.link-button:hover {
  background-color: #3aa876;
}
</style>
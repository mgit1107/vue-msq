<script setup>
  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/links">Links</router-link> |
    <router-link to="/table">表格</router-link> |
    <router-link to="/huangyuqiang">致敬黄育强</router-link> |
    <router-link to="/java-resume">Java简历</router-link>
  </nav>
  <router-view/>
  <button @click="count++">第一个简单的修改:Count is: {{ count }}</button>
  <button @click="count++">第二个简单的修改:Count is: {{ count }}</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="common-header">Header</el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>

  
</template>

<style scoped>
.common-header{
  height: 80px;
  background: #414141;
}
</style>

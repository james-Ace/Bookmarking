<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponet from './components/HeaderComponet.vue'
</script>

<template>
  <div class="layout-demo">
    <a-layout>
      <a-layout-header>
        <HeaderComponet></HeaderComponet>
      </a-layout-header>
      <a-layout>
        <a-layout-content>
          <RouterView></RouterView>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>  
</template>

<style scoped>
.layout-demo{
  padding: 1rem;
}
</style>

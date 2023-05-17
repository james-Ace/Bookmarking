<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header/HeaderComponent.vue'

export default {
  components: {
    Header
  }
};
</script>

<template>
  <a-layout class="main">
    <a-layout-header class="header">
      <div>
        <Header></Header>
      </div>
    </a-layout-header>

    <a-layout class="body">
      <a-layout-sider class="asider">
        
      </a-layout-sider>

      <a-layout-content class="content">
        <RouterView />
      </a-layout-content>
    </a-layout>

    <a-layout-footer class="footer">Footer</a-layout-footer>
  </a-layout>
</template>

<style scoped>
.body{
  
}

.header{
  height: 180px;
  background: #31bafa;
  text-align: center;
}
.header div{
  display: flex;
  width: 80%;
  margin: 0 auto;
}


.body{
  width: 70%;
  margin: 0 auto;
}

.body .asider,
.body .content{
  height: calc((100vh - 200px) - 60px);
  margin-top: 40px;
  box-sizing: border-box;
  padding: 20px;
}

.body .asider{
  
}

.body .content{
  width: calc((100% - 200px));
}

.footer{}


</style>

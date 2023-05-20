<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header/HeaderComponent.vue'
import Menu from './components/home/MenuComponent.vue'
import Login from "./components/login/LoginComponent.vue";
export default {
  components: {
    Header,
    Menu,
    Login
  },
  methods:{
    
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
      <a-affix :offsetTop="80">
        <a-layout-sider class="asider">
          <Menu></Menu>
        </a-layout-sider>
      </a-affix>

      <a-layout-content class="content" id="content">
        <RouterView />
      </a-layout-content>
    </a-layout>


    <a-layout-footer class="footer">个人网络收藏夹  <Login></Login></a-layout-footer>



  </a-layout>
</template>

<style scoped>
.body {}

.header {
  height: 180px;
  background: #31bafa;
  text-align: center;
}

.header div {
  display: flex;
  width: 80%;
  margin: 0 auto;
}


.body {
  width: 70%;
  margin: 0 auto;
}

.body .asider,
.body .content {
  height: calc((100vh - 200px) - 60px);
  margin-top: 40px;
  box-sizing: border-box;
  padding: 0 20px;
}

.body .asider {
  padding: 0;
}

.body .content {
  width: calc((100% - 200px));
}

.footer {
  padding: 40px 0;
  text-align: center;
  margin-top: 40px;
  color: #d3d3d3;
}

.footer :deep(.arco-btn-text){
  color: #d3d3d3
}
.footer :deep(.arco-btn-text):hover{
  background: transparent;
  color: #000
}
</style>

<script>
import indexCard from '../components/home/IndexComponent.vue'
import { getDate, _dispose_json } from "../assets/core"

export default{
  components:{
    indexCard
  },
  data(){
    return {
      data:[
        {
          name: '前端开发',
          items: [
            {
              name: '百度',
              url: 'https://www.baidu.com',
              description: '搜索引擎',
              head_img: 'https://www.baidu.com/favicon.ico'
            },
            {
              name: '百度',
              url: 'https://www.baidu.com',
              description: '搜索引擎',
              head_img: 'https://www.baidu.com/favicon.ico'
            },
            {
              name: '百度',
              url: 'https://www.baidu.com',
              description: '搜索引擎',
              head_img: 'https://www.baidu.com/favicon.ico'
            },
            {
              name: '百度',
              url: 'https://www.baidu.com',
              description: '搜索引擎',
              head_img: 'https://www.baidu.com/favicon.ico'
            },
          ]
        },
        {
          name: '搜索引擎',
          items: [
            {
              name: '百度',
              url: 'https://www.baidu.com',
              description: '搜索引擎',
              head_img: 'https://www.baidu.com/favicon.ico'
            },
            {
              name: '百度',
              url: 'https://www.baidu.com',
              description: '搜索引擎',
              head_img: 'https://www.baidu.com/favicon.ico'
            },
            {
              name: '百度',
              url: 'https://www.baidu.com',
              description: '搜索引擎',
              head_img: 'https://www.baidu.com/favicon.ico'
            },
            {
              name: '百度',
              url: 'https://www.baidu.com',
              description: '搜索引擎',
              head_img: 'https://www.baidu.com/favicon.ico'
            },
          ]
        }
      ]
    }
  },
  mounted(){
    getDate('links/all')
    .then(
      res => {
        // _dispose_json(res.data.data);
      }
    )
  }
}
</script>

<template>
  <main>
    <indexCard :title="item.name" :dataItems="item.items" v-for="(item) in data" class="card"></indexCard>
  </main>
</template>

<style scoped>
.card{
  margin-bottom: 30px;
}
</style>

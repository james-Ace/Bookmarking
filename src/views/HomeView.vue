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
        let data = _dispose_json(res.data.data)
        
        for (let index = 0; index < data.length; index++) {
          getDate(`links-sort/one?id=${data[index].id}`).then(
            res => {
              this.data[index].name = res.data.name
              this.data[index].items = data[index].data
            }
          )
          
        }
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

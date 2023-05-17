<script>
export default {
  data(){
    return {
      searchEngine:[
        {
          name: '百度',
          url: 'https://www.baidu.com/s?wd=',
          key: 0
        },
        {
          name: '必应',
          url: 'https://www.bing.com/search?q=',
          key: 1
        },
        {
          name: '谷歌',
          url: 'https://www.google.com/search?q=',
          key: 2
        }
      ],
      defultSearch: {
          name: '必应',
          url: 'https://www.bing.com/search?q=',
          key: 1
      },
      defaultSearchUrl: '',
      keyWord: ''
    }
  },
  methods:{
    engineSelect(value){
      this.defultSearch = value
      this.defaultSearchUrl = value.url
    },
    enter(ev){
      window.open(this.defaultSearchUrl+this.keyWord)
    }
  },
  mounted(){
    this.defaultSearchUrl = this.defultSearch.url;
  }
}
</script>

<template>
  <div class="box">
    <h1>Book marking</h1>

    <div class="search">
      <a-input-group>
        <a-select @change="engineSelect" :style="{width:'80px'}" :placeholder="defultSearch.name" value-key="key">
          <a-option v-for="item of searchEngine" :value="item" :label="item.name" />
        </a-select>
        <a-input :style="{ width: '460px' }" v-model="keyWord" placeholder="输入内容..." @press-enter="enter" />
      </a-input-group>
    </div>
  </div>
</template>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
}

h1 {
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  margin-top: 50px;
  color: #ffffff;
}

.search{
  margin-top: 30px;
}
</style>

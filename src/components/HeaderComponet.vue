<script>
export default {
  data() {
    return {
      engine:['百度', 'Google', 'bing']
    }
  },
  methods: {

  }  
}
</script>

<template>
  <div class="header">
    <h1>Book marking</h1>

    <div>
      <a-input-group>
        <a-select :options="engine" :style="{ width: '98px' }"  :placeholder="engine[2]"/>
        <a-input :style="{ width: '660px' }" placeholder="要搜什么?"  />
      </a-input-group>
    </div>
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  color: #666;
}
.header h1{
  text-transform: uppercase;
}
</style>

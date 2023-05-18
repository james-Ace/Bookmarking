<script>
import { _copy } from "../../assets/core";
export default {
  props: ['title', 'dataItems'],
  data() {
    return {
      login: false,
      visible: false,
      form:{
        name: '',
        post: ''
      }
    }
  },
  methods: {
    copy(item) {
      if (_copy(item)) {
        this.$notification.success('复制成功')
      } else {
        this.$notification.error('复制失败')
      }
    },
    
    add(){
      this.visible = true
    },

    handleCancel(){
      console.log('cancel');
    },

    handleBeforeOk(){
      console.log('ok');
    }

  },
  mounted() {
    // console.log(this.dataItems);

  }
}
</script>

<template>
  <main>
    <a-card :id="title" :title="title" :bordered="true">
      <template #extra>
        <a-tooltip content="添加新网址" @click="add" position="right" mini>
          <a-button size="mini">
            <template #icon>
              <icon-plus />
            </template>
          </a-button>
        </a-tooltip>
      </template>

      <div class="cardItems">
        <div class="groupItems" v-for="(item, index) in dataItems" key="index">
          <a :href="item.url" class="items" target="_blank">
            <img :src="item.head_img" alt="">
            <span>
              <strong>{{ item.name }}</strong>
              <p>{{ item.description }}</p>
            </span>
          </a>
          <a-button-group class="icon" size="small" v-if="login">
            <a-tooltip content="编辑链接" position="top" mini>
              <a-button> <template #icon><icon-edit /></template> </a-button>
            </a-tooltip>

            <a-tooltip content="复制链接" position="top" mini>
              <a-button> <template #icon><icon-copy /></template> </a-button>
            </a-tooltip>

            <a-tooltip content="删除链接" position="top" mini>
              <a-button> <template #icon><icon-delete /></template> </a-button>
            </a-tooltip>
          </a-button-group>

          <a-button-group class="icon" size="small" v-if="!login">
            <a-tooltip content="复制链接" @click="copy(item)" position="top" mini>
              <a-button> <template #icon><icon-copy /></template> </a-button>
            </a-tooltip>
          </a-button-group>
        </div>
      </div>
    </a-card>

    <a-modal v-model:visible="visible" title=" " @cancel="handleCancel" @before-ok="handleBeforeOk">
      <a-form :model="form">
        <a-form-item field="name" label="Name">
          <a-input v-model="form.name" />
        </a-form-item>
        <a-form-item field="post" label="Post">
          <a-select v-model="form.post">
            <a-option value="post1">Post1</a-option>
            <a-option value="post2">Post2</a-option>
            <a-option value="post3">Post3</a-option>
            <a-option value="post4">Post4</a-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </main>
</template>

<style scoped>
.cardItems {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.groupItems {
  width: calc(100%/4.1);
  transition: .3s ease-in-out;
  position: relative;
}

.groupItems:hover {
  box-shadow: 0 0 8px rgba(17, 17, 17, 0.13);
}

.groupItems:hover .icon {
  font-size: 18px;
}

.items {
  display: flex;
  width: 100%;
  padding: 15px 20px;
  text-decoration: none;

}

.items img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
}

.items strong,
.items p {
  font-weight: normal;
  margin: 6px 0 0 0;
  font-size: 12px;
}

.items strong {
  color: #747474;
}

.items p {
  color: #b9b9b9
}

.icon {
  position: absolute;
  right: 5px;
  top: 5px;
  color: #c9c9c9
}
</style>
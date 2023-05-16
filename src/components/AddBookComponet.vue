<script>
import { IconPlus } from '@arco-design/web-vue/es/icon';
import { ajax } from '../assets/_bm'
export default {
    components: { IconPlus },
    data() {
        return {
            visible: false,
            sites: {
                name: '',
                category: {},
                alias: '',
                description: '',
                website: '',
                icon: '',
                user_id: '',
            },
            category: {
                parent: '',
                name: '',
                description: '',
                user_id: ''
            },
            categoryItem: []

        }
    },
    methods: {
        add(ev) {
            this.visible = true
        },
        handleCancel() {
            this.visible = false
        },
        handleBeforeOk() {
            return true
        }
    },
    mounted() {

        let res = ajax('https://api.bromel.cn/api/links-sort/all')
        let that = this
        res.then(res=>{
            that.categoryItem = res.data.data
            console.log(res.data.data);
        })
        .catch(err=>{
            console.log(err);
        })

    }
};
</script>

<template>
    <div class="add">
        <a-button id="addBtn" @click="add" type="primary" shape="circle">
            <icon-plus />
        </a-button>



        <a-modal v-model:visible="visible" title=" " @cancel="handleCancel" @before-ok="handleBeforeOk">
            <a-tabs type="capsule" id="tabBar" size="mini">
                <a-tab-pane key="1" title="网站">
                    <a-form :model="category">
                        <a-form-item field="name" label="名称">
                            <a-input v-model="category.name" />
                        </a-form-item>

                        <a-form-item field="post" label="分类">
                            <a-select v-model="category.parent">
                                <a-option :value="item.id" v-for="(item, index) in categoryItem">{{ item.name }}</a-option>
                            </a-select>
                        </a-form-item>

                        <a-form-item field="name" label="网址">
                            <a-input v-model="category.name" />
                        </a-form-item>

                        <a-form-item field="post" label="图标">
                            <a-select v-model="category.parent">
                                <a-option :value="item.id" v-for="(item, index) in categoryItem">{{ item.name }}</a-option>
                            </a-select>
                        </a-form-item>

                        <a-form-item field="name" label="描述">
                            <a-textarea v-model="category.name" placeholder="简要描述, 非必填项" allow-clear />
                        </a-form-item>
                    </a-form>
                </a-tab-pane>
                <a-tab-pane key="2" title="分类">
                    <a-form :model="category">
                        <a-form-item field="name" label="分类名">
                            <a-input v-model="category.name" />
                        </a-form-item>
                        <a-form-item field="post" label="父级分类">
                            <a-select v-model="category.parent">
                                <a-option :value="item.id" v-for="(item, index) in categoryItem">{{ item.name }}</a-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item field="name" label="分类描述">
                            <a-textarea v-model="category.name" placeholder="简要描述, 非必填项" allow-clear />
                        </a-form-item>
                    </a-form>
                </a-tab-pane>
            </a-tabs>
        </a-modal>
    </div>
</template>

<style scoped>
.add {
    position: fixed;
    bottom: 50vh;
    right: 20px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
}

#addBtn {
    width: 45px;
    height: 45px;
    font-size: 20px;
}

#tabBar .arco-tabs-nav-tab {
    justify-content: center;
}
</style>

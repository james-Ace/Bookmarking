<script>
import { getDate } from "../../assets/core";
export default {
    data() {
        return {
            menu: [],
            count: 0,
            visible: false,
            form:{
                name: '',
                description: ''
            },
            login: true
        }
    },
    methods: {
        add() {
            this.visible = true
        },
        
        handleBeforeOk(){

            getDate('links-sort/save',{
                method: 'POST',
                Body:{
                    name: this.form.name,
                    description: this.form.description
                },
                Headers:{
                    'Authorization': ''
                }
            }).then(res=>{
                console.log(res);
            })
        }
    },
    mounted() {

        getDate('links-sort/all').then(
            res => {
                let menu = res.data.data
                for (let index = 0; index < menu.length; index++) {
                    getDate(`links-sort/links?id=${menu[index].id}`).then(
                        res => {
                            if(res.data.expand.count != 0){
                                this.menu.push(menu[index])
                                this.count = this.menu.length
                            }
                        }
                    )
                }
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }
}
</script>

<template>
    <a-anchor class="innerNav" boundary="start" :change-hash="false" :smooth="true">
        <a-anchor-link :href="'#'+item.name" v-for="item in menu">{{ item.name }}</a-anchor-link>

        <a-anchor-link v-if="login"><a-button @click="add" type="text" calss="add">添加分类</a-button></a-anchor-link>
    </a-anchor>
    <p class="text"> 一共有{{ count }}个分类 </p>

    <a-modal v-model:visible="visible" title="添加分类" @before-ok="handleBeforeOk">
        <a-form :model="form">
            <a-form-item field="name" label="名称">
                <a-input v-model="form.name" placeholder="填写分类名" />
            </a-form-item>
            <a-form-item field="description" label="描述">
                <a-textarea v-model="form.description" placeholder="分类描述" allow-clear/>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<style scoped>
.innerNav {
    margin-top: 0.75rem;
    margin-left: 0.95rem;
}

.text {
    position: absolute;
    bottom: -38px;
    text-align: center;
    width: 100%;
    color: #9c9c9c;
    font-size: 0.7rem;
    letter-spacing: 2px;
}

.innerNav :deep(.arco-btn-size-medium) {
    padding: 0 !important
}
</style>
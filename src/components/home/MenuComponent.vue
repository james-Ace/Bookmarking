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
            console.log(this.form);
            getDate('links-sort/save',{
                method: 'POST',
                Body:{
                    name: this.name,
                    description: this.description
                }
            })
        }
    },
    mounted() {
        getDate('links-sort/all').then(
            res => {
                this.menu = res.data.data
                this.count = res.data.count
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
    <a-anchor class="innerNav" boundary="start" :smooth="true">
        <a-anchor-link :href="'#'+item.name" v-for="item in menu">{{ item.name }}</a-anchor-link>

        <a-anchor-link v-if="login"><a-button @click="add" type="text" calss="add">添加分类</a-button></a-anchor-link>
    </a-anchor>
    <p class="text"> 一共有{{ count }}个分类 </p>

    <a-modal v-model:visible="visible" title="添加分类" @cancel="handleCancel" @before-ok="handleBeforeOk">
        <a-form :model="form">
            <a-form-item field="name" label="Name">
                <a-input v-model="form.name" />
            </a-form-item>
            <a-form-item field="name" label="Name">
                <a-textarea v-model="form.description" placeholder="Please enter something" allow-clear/>
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
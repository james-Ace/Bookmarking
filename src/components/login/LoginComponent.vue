<template>
    <a-button type="text" @click="login">登录</a-button>

    <a-modal v-model:visible="visible" title="用户登录" @before-ok="handleBeforeOk">
        <a-form :model="form">
            <a-form-item field="name" label="用户名">
                <a-input v-model="form.name" />
            </a-form-item>
            <a-form-item field="password" label="密码">
                <a-input v-model="form.password" />
            </a-form-item>
        </a-form>
    </a-modal>
</template>


<script>
import { store } from '../../store/store'
import { getDate } from "../../assets/core";
import { POST } from '@/utils/http/request'
export default {
    data() {
        return {
            form: {
                name: '',
                password: ''
            },
            visible: false
        }
    },

    methods: {
        login() {
            this.visible = true
        },
        handleBeforeOk() {
            getDate('users/login',{
                method: 'post',
                // body: {
                //     account: this.form.name,
                //     password: this.form.password
                // },
                // headers:{
                //     'Content-Type': 'application/x-www-form-urlencoded'
                // }
            }).then(
                res => {
                    console.log(res);
                }
            ).catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style scoped></style>
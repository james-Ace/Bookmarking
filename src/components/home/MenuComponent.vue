<script>
import { getDate } from "../../assets/core";
export default{
    data(){
        return {
            menu:[]
        }
    },
    methods:{

    },
    mounted(){
        getDate('links-sort/all')
    }
}
</script>

<template>
    <a-menu :style="{height: '100%' }" :default-selected-keys="['1']">
        <a-menu-item key="1"><icon-bulb></icon-bulb> Menu 1</a-menu-item>
        <a-menu-item key="2"><icon-bulb></icon-bulb> Menu 2</a-menu-item>
        <a-menu-item key="3"><icon-bulb></icon-bulb> Menu 3</a-menu-item>
    </a-menu>
</template>

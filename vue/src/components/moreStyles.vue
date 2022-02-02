<template>
    <!-- :class="{fw : active}"相当于v-bind:class="{fw : active}" -->
    <!-- 动态添加一个类 -->
    <div class="hdms" :class="{fw : active}">多种css样式1</div>

    <!-- 动态添加多个类 -->
    <div class="hdms" :class="[{fw : active},{mt20 : active}]">多种css样式2</div>
    <div class="hdms" :class="classList">多种css样式3</div>

    <div class="hdms" :class="[classList,'ml20']">多种css样式4</div>
</template>

<script>
    export default {
        data(){
            return{
                active:true,
                classList:{
                    fw : true,
                    mt20 : true,
                    border : true,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hdms{
        color: green;
    }

    .fw{
        font-weight: bold;
    }

    .mt20{
        margin-top: 20px;
    }

    .border{
        border: 10px solid gray;
    }

    .ml20{
        margin-left: 20px;
    }
</style>
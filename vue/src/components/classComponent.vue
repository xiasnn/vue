<template>
    <div class="classComponent">
        <div class="hd">houdunren</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

// 隔离组件样式：①在style上加scoped ②在组件的模板上套一层标签，然后写样式时加上这一层标签的标识
<style lang="scss" scoped>
    .classComponent{
        .hd{
            margin-top:30px;
        }
    }
    
</style>
<template>
    <!-- 组件父级只有一个标签时，默认将根组件上的类添加给它 -->
    <!-- 组件父级有多个标签时，加上:class="$attrs.class"，将根组件上的类添加给它，否则不添加 -->
    <article :class="$attrs.class">hdms</article>
    <section style="background-color:green;" v-bind:style="{color:'red'}">houdunren</section>
    <div :style="styles">后盾人</div>
    <p :style="[styles,fb]">xiasnn</p>
</template>

<script>
    export default {
        data() {
            return{
                fb:{fontWeight:'bold'}
            }
        },
        computed : {
            styles(){
                return {
                    color:'blue',
                    marginTop:'20px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .xiasnn{
        color: red;
    }
</style>
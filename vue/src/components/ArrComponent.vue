<template>
    <div v-for="(a,index) in arr" :key="index">{{a}}</div>
</template>

<script>
    const arr = ['后盾人','hdms'];
    // push shift pop unshift splice sort reverse
    export default {
        data() {
            return {
                arr
            }
        },
        mounted(){
            setTimeout(() => {
                this.arr.splice(0,1);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
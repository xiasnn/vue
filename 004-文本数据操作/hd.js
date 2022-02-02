const app = Vue.createApp({
    data() {
        return {
            name:"后盾人",
            html: "<p style='color:green;'>hdms</p>"
        }
    },
});
const vm = app.mount('#app');

console.log(vm.$data.name);     //相当于console.log(vm.name);

setTimeout(() => {
    // 绑定的数据可以改变
    vm.$data.name = "houdunren"
},3000);
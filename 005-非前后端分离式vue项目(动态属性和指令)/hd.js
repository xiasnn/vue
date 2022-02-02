const app = Vue.createApp({
    data() {
        return {
            name:"后盾人",
            id:1,
            arg:"id",
            param:"5"
        }
    },
});
const vm = app.mount('#app');


setTimeout(() => {
    // 绑定的数据可以改变
    vm.$data.name = "houdunren";
    vm.id = '2';
    vm.arg = 'href';
    vm.param = 'https://www.baidu.com'
},3000);
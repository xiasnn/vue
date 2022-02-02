const app = Vue.createApp({
    data() {
        return {
            num:1,
            error:''
        }
    },
    watch:{
        // 监听数据，对它进行一系列操作
        num(newVal,oldVal){
            console.log(newVal,oldVal);
            this.error = newVal == 10 ? '数值不能大于10' : newVal == 0 ? '数值不能小于0' : '';
        }
    },
    methods:{
        add(event){
            if(this.num < 10) this.num++;
        },
        reduce(event){
            if(this.num > 0) this.num--;           
        }
    }
});
const vm = app.mount('#app');
const app = Vue.createApp({
    data() {
        return {
            num:1,
            tip:''
        }
    },
    computed:{
        // computed中具有缓存的功能
        error(){
            const msg = this.num == 0 ? '数字不能小于0' : (this.num == 10 ? '数字不能大于10' : '');
            return msg;
        },
        error1:{
            get(){
                const msg = this.num == 0 ? '数字不能小于0' : (this.num == 10 ? '数字不能大于10' : '');
                if(msg) return this.tip + msg;
            },
            set(tip){
                this.tip = tip;
            }
        },
    },
    methods:{
        add(event){
            this.error1 = "提示：";
            if(this.num < 10) this.num++;
        },
        reduce(event){
            this.error1 = "警告：";
            if(this.num > 0) this.num--;           
        }
    }
});
const vm = app.mount('#app');
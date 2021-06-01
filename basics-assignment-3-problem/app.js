const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            output: '',
        }
    },
    watch: {
        counter(value) {
            if (value === 37) {
                this.output = value
            }
            if (value < 37) {
                this.output = 'Not there yet'
            }
            if (value > 37) {
                this.output = 'Too much!'
            }
        },
        output(value) {
            if (value !== '') {
                setTimeout(() => {
                    this.output = '';
                }, 5000, this);
            }  
        }
    },
    computed: {

    },
    methods: {
        addFive() {
            this.counter = this.counter + 5;
        },
        addOne() {
            this.counter = this.counter + 1;
        }
    }
});

app.mount('#assignment');
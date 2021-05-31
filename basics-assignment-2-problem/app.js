const app = Vue.createApp({
    data() {
        return {
            output: 'Change me!'
        }
    },
    methods: {
        showAlert() {
            alert('alert!')
        },
        printNewOutput(event) {
            this.output = event.target.value
        },
    }
})

app.mount('#assignment');
const app = Vue.createApp({
    data() {
        return {
            task: '',
            tasks: [],
            isListVisible: true,
            buttonText: 'Hide',
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task);
            this.task = ''
        },
        toggleVisibility() {
            this.isListVisible = !this.isListVisible;

            this.isListVisible ? this.buttonText = 'Hide': this.buttonText = 'Show';
        }
    }
});

app.mount('#assignment');
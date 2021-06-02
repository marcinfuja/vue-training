const app = Vue.createApp({
    data() {
        return {
            entry: '',
            isVisible: 'true',
            inlineEntry: '',
        }
    },
    computed: {
        entryClass() {
            if (this.entry === 'user1' || this.entry === 'user2') {
                return this.entry;
            }
            return '';
        }
    },
    methods: {
        toggle() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount('#assignment');
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    submitForm(event) {
      console.log('submitted')
    },
    add(num) {
      this.counter = this.counter + num
    },
    remove() {
      this.counter = this.counter - 1
    }
  }
});

app.mount('#events');

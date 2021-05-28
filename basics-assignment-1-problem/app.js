const app = Vue.createApp({
    data() {
        return {
            name: 'Marcin',
            age: 30,
            doggieImg: 'https://www.animalhospitalofhoward.com/uploads/SiteAssets/0/images/services/doggie-day-care-720.jpg',
        }
    },
    methods: {
        ageAddFive() {
            return this.age + 5;
        },
        favNum() {
            const random = Math.random();
            if (random > 0.5) {
                return '7';
            } else {
                return '6';
            }
        }
    }
})

app.mount('#assignment');
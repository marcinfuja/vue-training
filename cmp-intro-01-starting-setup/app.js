const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@lorenz.com' },
                { id: 'julie', name: 'Manuel Lorenz', phone: '09876 5432 991', email: 'manjujulielieuel@lorenz.com' },
            ],
        }
    },
});

app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            friend: { id: 'manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@lorenz.com' },
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');
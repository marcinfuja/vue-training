<template>
    <section class="form">
        <form @submit.prevent="submit">
            <div>
                <label for="id">Id</label>
                <input type="text" name="id" v-model="friend.id" />
            </div>
            <div>
                <label for="id">Name</label>
                <input type="text" name="name" v-model="friend.name" />
            </div>
            <div>
                <label for="id">Phone</label>
                <input type="tel" name="phone" v-model="friend.phone" />
            </div>
            <div>
                <label for="id">Email</label>
                <input type="email" name="email" v-model="friend.email" />
            </div>
            <div>
                <label for="id">Favorite</label>
                <input type="checkbox" name="favorite" v-model="friend.isFavorite" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    emits: ['submit-friend'],
    data() {
        return {
            friend: {
                id: '',
                name: '',
                phone: '',
                email: '',
                isFavorite: false,
            },
        }
    },
    methods: {
        submit() {
            const friend = {...this.friend};
            this.$emit('submit-friend', friend);
        }
    },
}
</script>

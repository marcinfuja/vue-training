<template>
    <section>
        <form @submit.prevent="submit">
            <input type="text" v-model="user.name" />
            <input type="text" v-model="user.age" />
            <button type="submit">Submit</button>
        </form>
    </section>
</template>

<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            user: {
                name: '',
                age: '',
            }
        }
    },
    methods: {
        submit() {
            this.$emit('add-user', this.user)
        }
    }
}
</script>
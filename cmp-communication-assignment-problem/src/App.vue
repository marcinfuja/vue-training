<template>
    <section>
        <active-user :username="user.name" :userage="user.age"></active-user>
        <user-data @add-user="addUser"></user-data>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'Marcin',
                age: '31',   
            }
        }
    },
    methods: {
        addUser(changedUser) {
            const newUser = changedUser;
            this.user = newUser;
        } 
    }
}
</script>
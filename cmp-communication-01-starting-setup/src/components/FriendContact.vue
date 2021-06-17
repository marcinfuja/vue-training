<template>
  <li>
    <h2>{{ name }} {{ isFavorite === '1' ? '(Favorite)' : '' }} </h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phone',
  //   'email',
  //   'isFavorite',
  // ],
  props: {
    name: String,
    phone: String,
    email: String,
    isFavorite: String,
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // toggleFavorite() {
    //   if(this.isFavorite = '1') {
    //     this.isFavorite = 0;
    //   } else {
    //     this.isFavorite = 1;
    //   }
    // }
  }
};
</script>
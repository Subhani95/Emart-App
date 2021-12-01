<!--
Men category Component 
Data is fetch thorugh a fake api through axios method
v-card template is used which includes the title,image and descrption 
it only includes the men category from the api
Navbar component is import here
-->
<template>
    <div class="d-flex flex-row flex-wrap ml-11" width="95%">
      <Navbar/>
      <v-card
        id="my-card"
        class="mx-auto mt-4"
        max-width="270"
        v-for="menclothing in menclothings"
        :key="menclothing.id"
      >
        <v-img :src="menclothing.image" height="300px" contain></v-img>

        <v-card-title>
          {{ menclothing.title }}
        </v-card-title>

        <v-card-subtitle>
          <div class="my-4 text-subtitle-1">{{ menclothing.price }}</div>
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text>
            Add to cart
          </v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </div>
</template>
<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Navbar from './Navbar.vue'
Vue.use(VueAxios, axios)

export default {
  components: { Navbar },
  name: 'menclothing',
  data: () => {
    return {
      loading: false,
      selection: 1,
      menclothings: [],
    }
  },

  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        ;(this.menclothings = response.data), console.log(response.data)
      })
  },
  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped></style>

<!--
Women category Component 
Data is fetch thorugh a fake api through axios method
v-card template is used which includes the title,image and descrption 
it only includes the Women category from the api
Navbar component is import here
-->
<template>
  <div class="d-flex flex-row flex-wrap ml-11" width="95%">
    <Navbar/>
    <v-card
      id="my-card"
      class="mx-auto mt-4"
      max-width="220"
      v-for="womenclothing in womenclothings"
      :key="womenclothing.id"
    >
      <v-img :src="womenclothing.image" height="300px" contain></v-img>

      <v-card-title>
        {{ womenclothing.title }}
      </v-card-title>

      <v-card-subtitle>
        <div class="my-4 text-subtitle-1">{{ womenclothing.price }}</div>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text @click="productCart()">
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
import Navbar from '../components/Navbar.vue'
Vue.use(VueAxios, axios)

export default {
  name: 'womenclothing',
  components: {
    Navbar,
  },
  data: () => {
    return {
      loading: false,
      selection: 1,
      womenclothings: [],
    }
  },

  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        ;(this.womenclothings = response.data), console.log(response.data)
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


<!--
Jewelery category Component 
Data is fetch thorugh a fake api through axios method
v-card template is used which includes the title,image and descrption 
it only includes the jewelery category from the api

-->
<template>
  <div class="d-flex flex-row flex-wrap ml-11" width="95%">
      <Navbar/>
      <v-card
        id="my-card"
        class="mx-auto mt-4"
        max-width="270"

        v-for="jewelery in jewelerys"
        :key="jewelery.id"
      >
        <v-img :src="jewelery.image" height="300px" contain></v-img>

        <v-card-title>
          {{ jewelery.title }}
        </v-card-title>

        <v-card-subtitle>
          <div class="my-4 text-subtitle-1">{{ jewelery.price }}</div>
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
import Navbar from '../components/Navbar.vue'
Vue.use(VueAxios, axios)

export default {
  name: 'jewelery',
  components: {
    Navbar,
  },
  data: () => {
    return {
      loading: false,
      selection: 1,
      jewelerys: [],
      show:false
    }
  },

  mounted() {
    Vue.axios
      .get('https://fakestoreapi.com/products/category/jewelery')
      .then((response) => {
        ;(this.jewelerys = response.data), console.log(response.data)
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

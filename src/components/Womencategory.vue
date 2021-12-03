<!--
Women category Component 
Data is fetch thorugh a fake api through axios method
v-card template is used which includes the title,image and descrption 
it only includes the Women category from the api
Navbar component is import here
-->
<template>
  <div class="d-flex flex-row flex-wrap ml-11" width="95%">
    <Navbar />
    <v-container>
      <v-row class="mr-15 mt-16">
        <v-col
          lg="12"
          offset-lg="0"
          sm="12"
          offset-sm="1"
          md="12"
          offset-md="0"
        >
          <v-row>
            <v-col
              sm="5"
              md="3"
              v-for="womenclothing in womenclothings"
              :key="womenclothing.id"
            >
              <v-card height="auto" elevation="0" class="py-5 ml-6">
                <div class="img-size">
                  <v-img
                    :src="womenclothing.image"
                    height="350"
                    contain
                  ></v-img>
                </div>
                <v-card-title>
                  {{ womenclothing.category }}
                </v-card-title>

                <v-row class="ml-4 mb-3">
                  <span>Rating: </span>
                  <v-rating
                    :value="5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                </v-row>
                <v-card-subtitle class="text-center">
                  {{ womenclothing.title }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
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

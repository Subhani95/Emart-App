<template>
<div class="d-flex flex-row flex-wrap ml-11" width="95%">
  <Navbar/>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" contain :src="product.image"></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4 mb-5">4.5 (413)</div>
      </v-row>

      <div>
        {{ product.description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card>
        <v-btn color="deep-purple lighten-2" text>Add to Cart</v-btn>
    </v-card>
  </v-card>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
   name: "product",
  props: ["id"],
  components: {
Navbar,
  },
computed: {

product() {

return this.$store.state.product;

},

},
  mounted() {
    this.$store.dispatch("singleProduct", this.id);
  },
};
</script>

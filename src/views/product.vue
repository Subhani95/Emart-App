<template>
  <div class="d-flex flex-row flex-wrap ml-11" width="95%">
    <Navbar />
    <v-card min-width="800" class="mt-15" elevation="0">
      <v-row class="arrange">
        <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="4" class="ml-15">
          <v-img contain height="450" width="550" :src="product.image"></v-img>
        </v-col>
        <v-col cols="6" xs="6" sm="6" md="4" lg="4" xl="4" class="ml-15">
          <v-card-text>
            <v-row align="center" class="mx-0">
              <h1 class="mt-15">Title</h1>
              <br />
              <v-card-title class="text black--text text-center">
                {{ product.title }}</v-card-title
              ><br />
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">5 (500)</div> </v-row
            ><br />
            <h2>Category: {{ product.category }}</h2>
            <br />
            <h3>Price: ${{ product.price }}</h3>
            <br />
            <p><strong>Description:</strong> {{ product.description }}.</p>
            <v-btn class="ma-2" outlined color="grey"> + Add to Cart </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'product',
  props: ['id'],
  components: {
    Navbar,
  },
  computed: {
    product() {
      return this.$store.state.product
    },
  },
  mounted() {
    this.$store.dispatch('singleProduct', this.id)
  },
}
</script>
<style scoped>
.text {
  text-decoration: none;
}
img {
  width: 350px;
}
.description {
  padding: 25px;
  font-size: 12px;
}
</style>

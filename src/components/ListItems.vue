<!--
this component is used to show each and every product present
in api  using v-for loop
footer is import here at the end or card when all data from api is fetch
-->
<template>
  <section>
    <v-card class="d-flex flex-row flex-wrap">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </v-card>
    <Footer />
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue' //imported the component
import Footer from '../views/Footer.vue'
export default {
  components: {
    ProductCard, //registered the component
    Footer,
  },
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  mounted() {
    this.$store.dispatch('productData')
  },
}
</script>

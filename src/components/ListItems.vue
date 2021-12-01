<!--
this component is used to show each and every product present
in api 
-->
<template>
  <v-card class="d-flex flex-row flex-wrap">
    <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product" 
        />
   
    </v-card>  
</template>

<script>
import ProductCard from "./ProductCard.vue"; //imported the component
export default {
  components: {
    ProductCard, //registered the component
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("productData");
  },
};
</script>
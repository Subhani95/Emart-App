<!--
ProductCard Component 
Template Here
v-card template is used which includes the title,image and descrption 
it will allow the to show each item in this template
-->
<template>
<div class="d-flex flex-row flex-wrap ml-11" width="95%">
  <v-card
    class="mx-auto  mt-4"
    max-width="344"
  >
  <v-card :elevation="n - 1">
    <v-img
      :src="product.image"
      height="300"
      contain
     
    ></v-img>
  </v-card>
  <v-card>
    <v-card-title>
      <router-link
        class="text fontSize text-subtitle-1"
        :to="{ name: 'product', params: { id: product.id } }"
        >{{ product.title }}</router-link
      >
    </v-card-title>
  </v-card>
    <v-card-subtitle>
     <div class="text fontSize my-4 black--text ">${{ product.price }}</div>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Add to cart
      </v-btn>
    </v-card-actions>
    <v-card-actions>
<v-card-subtitle>
    <v-btn> <div class="my-4 text-subtitle-1">{{ product.category }}</div></v-btn>
    </v-card-subtitle>
    <v-spacer></v-spacer>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{product.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
    <v-divider></v-divider>
  </v-card>
  </div>
</template>


<script>
export default {
  name: "productcard",
  props: ["product"],
  data: () => {
    return {
      loading: false,
      selection: 1,
      show: false,
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

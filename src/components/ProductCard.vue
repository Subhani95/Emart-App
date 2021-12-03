<!--
ProductCard Component 
Template Here
v-card template is used which includes the title,image and descrption 
it will allow the to show each item in this template
-->
<template>
  <section>
    <div class="d-flex flex-row flex-wrap ml-11" width="95%">
      <v-card min-width="800" class="mt-15 ml-15" elevation="0">
        <v-row class="arrange">
          <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="4" class="ml-15">
            <v-img contain height="300" :src="product.image"></v-img>
          </v-col>
          <v-col cols="12" xs="6" sm="6" md="4" lg="4" xl="4" class="ml-15">
            <v-card-text>
              <v-row align="center">
                <v-card-title>
                  {{ product.title }}
                </v-card-title>
              </v-row>
              <!-- <br /> -->
              <v-row align="center" class="mx-0 mr-6">
                <v-rating
                  :value="product.rating.rate"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="grey--text ms-4">
                  {{ product.rating.rate }}
                </div> </v-row
              ><br />
              <v-chip>Price: ${{ product.price }}</v-chip>
              <div>
                <router-link
                  class="text fontSize text-subtitle-1 routerlink"
                  :to="{ name: 'product', params: { id: product.id } }"
                  ><v-btn class="mr-6 mt-3 btn" outlined color="grey">
                    Description
                  </v-btn></router-link
                >
              </div>
              <v-btn class="mr-6 mt-3" outlined color="grey">
                + Add to Cart
              </v-btn>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'productcard',
  props: ['product'],

  data: () => {
    return {
      loading: false,
      show: false,
    }
  },
  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
<style scoped>
.routerlink {
  text-decoration: none;
}
</style>

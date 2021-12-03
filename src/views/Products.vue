<template>
  <div>
    <v-app-bar app color="dark lighten-5">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 350px"> Emart </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="dark" class="mr-2 black--text" @click="home">
        <v-icon> mdi-home-variant</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="mr-1 transparent"
            @click="userProfile"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
      </v-menu>

      <v-btn color="dark" class="mr-2 black--text" @click="updateProfile">
        <v-icon> mdi-update</v-icon>
      </v-btn>

      <v-btn color="dark" class="black--text" @click="logout"> Logout </v-btn>
    </v-app-bar>

    <v-navigation-drawer temporary app v-model="drawer">
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              <h3>CATEGORIES</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list-item two-line link>
        <v-list-item-content @click="jeweleryItems">
          <v-list-item-title>Jewelery Item</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-content @click="menCategory">
          <v-list-item-title>Men Category</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line link>
        <v-list-item-content @click="womenCategory">
          <v-list-item-title>Women Catergory</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line link>
        <v-list-item-content @click="electronicItems">
          <v-list-item-title>Electonic Items</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-card min-height="100vh">
      <ListItems />
    </v-card>
  </div>
</template>
<script>
import ListItems from '../components/ListItems.vue'
export default {
  name: 'products',
  components: {
    ListItems,
  },
  data: () => ({
    drawer: false,
    group: null,
    user: '',
  }),
  methods: {
    //methods are created here
    logout() {
      localStorage.removeItem('registerUser')
      //removing the register user who entered during the login page
      this.$router.push({ name: 'Login' }) //router links
    },
    updateProfile() {
      this.$router.push({ name: 'UpdateProfile' })
    },
    userProfile() {
      this.$router.push({ name: 'Profile' })
    },
    womenCategory() {
      this.$router.push({ name: 'womenclothing' })
    },
    menCategory() {
      this.$router.push({ name: 'menclothing' })
    },
    electronicItems() {
      this.$router.push({ name: 'electronic' })
    },
    jeweleryItems() {
      this.$router.push({ name: 'jewelery' })
    },
    home() {
      this.$router.push({ name: 'products' })
    },
  },

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

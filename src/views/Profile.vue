<!--Profile of User 
this will show user register credentials which he entered during the Login in a seperate Array of objects
-->
<template>
  <v-app id="app">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="4" sm="8" md="8">
            <v-card class="elevation-15">
              <v-row>
                <v-col cols="12" md="12">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-1 Dark--text text--depressed-3 mb-4">
                      User Entered Credentials Here
                    </h1>
                    <v-form class="text-center">
                      <div>
                        <v-text class="text-center mt-4"
                          >User Fullname : {{ fullName }}</v-text
                        >
                      </div>
                      <div>
                        <v-text class="text-center mt-4"
                          >UserName : {{ userName }}</v-text
                        >
                      </div>
                      <div>
                        <v-text class="text-center mt-4"
                          >User Email : {{ email }}</v-text
                        >
                      </div>
                      <div>
                        <v-text class="text-center mt-4"
                          >User Password : {{ password }}</v-text
                        >
                      </div>
                      <div>
                        <v-text class="text-center mt-4"
                          >User PhoneNumber : {{ phoneNumber }}</v-text
                        >
                      </div>
                      <div class="text-center mt-3">
                        <v-btn color="dark" class="mr-4" @click="homePage"
                          ><v-icon dark left block>
                            mdi-checkbox-marked-circle
                          </v-icon>
                          Shop More
                        </v-btn>
                      </div>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {
      valid: true,
      fullName: '',
      userName: '',
      email: '',
      phoneNumber: '',
      password: '',
      registerUser: [],
    }
  },
  created() {
    this.registerUser = JSON.parse(localStorage.getItem('registerUser'))
    this.fullName = this.registerUser.fullName
    this.userName = this.registerUser.userName
    this.email = this.registerUser.email
    this.phoneNumber = this.registerUser.phoneNumber
    this.password = this.registerUser.password
  },
  methods: {
    homePage() {
      this.$router.push({ name: 'products' })
    },
  },
}
</script>

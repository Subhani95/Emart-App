<!--Update Profile Template 
Login User can update its profile and it will also update the data inside registerUser in Local storage
-->
<template>
  <v-container>
    <v-app-bar app height="50">
      <v-toolbar-title style="width: 350px"> Emart </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-4" @click="homePage">Shop More</v-btn>
      <v-btn @click="logout"> Logout </v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="12">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 Dark--text text--accent-3">
                      Update Your Profile Here
                    </h1>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        :rules="fnameRules"
                        label="Full Name"
                        v-model="fullName"
                        type="text"
                        required
                      ></v-text-field>
                      <v-text-field
                        :rules="emailRules"
                        label="Email"
                        v-model="email"
                        mdi-icon="email"
                        type="email"
                        required
                      ></v-text-field>
                      <v-text-field
                        :rules="userNameRules"
                        label="Username"
                        v-model="userName"
                        type="text"
                      ></v-text-field>
                      <v-text-field
                        :rules="phoneNumber1"
                        label="PhoneNumber"
                        v-model="phoneNumber"
                        type="number"
                        required
                      ></v-text-field>
                      <v-text-field
                        :rules="passwordRules"
                        label="Password"
                        v-model="password"
                        type="password"
                        required
                      ></v-text-field>
                      <v-btn @click="updateProfile()"> Update</v-btn>
                    </v-form>
                  </v-card-text></v-col
                ></v-row
              ></v-card
            ></v-col
          ></v-row
        >
      </v-container></v-content
    >
  </v-container>
</template>
<script>
export default {
  name: 'UpdateProfile',
  data() {
    return {
      valid: true,
      fullName: '',
      email: '',
      password: '',
      userName: '',
      phoneNumber: '',
      registerUser: [],
    }
  },
  created() {
    this.registerUser = JSON.parse(localStorage.getItem('registerUser'))
    this.fullName = this.registerUser.fullName
    this.userName = this.registerUser.userName
    this.email = this.registerUser.email
    this.password = this.registerUser.password
    this.phoneNumber = this.registerUser.phoneNumber
  },
  methods: {
    updateProfile() {
      this.newUser = JSON.parse(localStorage.getItem('newUser'))
      this.index = this.newUser.findIndex((x) => x.email == this.e)
      this.newUser[this.index] = {
        email: this.email,
        fullName: this.fullName,
        lastName: this.lastName,
        password: this.password,
        userName: this.userName,
        phoneNumber: this.phoneNumber,
      }
      // localStorage.setItem('newUser', JSON.stringify(this.newUser))
      localStorage.setItem(
        'registerUser',
        JSON.stringify(this.newUser[this.index])
      )
      this.$alert('Updated')
    },
    homePage() {
      this.$router.push({ name: 'products' })
    },
    logout() {
      localStorage.removeItem('registerUser')
      this.$router.push({ name: 'Login' })
    },
  },
}
</script>

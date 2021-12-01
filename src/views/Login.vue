<!--Login Page 
User will enter the registered data of username and password he entered during the Sign uP PAGE
-->
<template>
    <v-app id="app">
    <v-app-bar app height="50">
      <v-toolbar-title style="width: 350px"> Emart </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="SignUp">Signup</v-btn>
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
                      Login Here
                    </h1>
                    <h4 class="text-center mt-4">
                      Kindly Enter your Register Details
                    </h4>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        :rules="userNameRules"
                        label="Username"
                        v-model="userName"
                        type="text"
                      ></v-text-field>
                      <v-text-field
                        :rules="passwordRules"
                        label="Password"
                        v-model="password"
                        type="password"
                        required
                      ></v-text-field>
                      <div class="text-center mt-3">
                        <v-btn
                          color="dark"
                          class="mr-4"
                          @click="registerUser"
                          ><v-icon dark left block>
                            mdi-checkbox-marked-circle
                          </v-icon>
                          Login
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
import {
  userNameRules,
  passwordRules,
} from '../constant/const.js'
export default {
  data: () => ({
    valid: true,
    userNameRules: userNameRules,
    passwordRules: passwordRules,
    userName: '',
    password: '',
    newUser: [],
  }),
  methods: {
    registerUser() {
      this.newUser = JSON.parse(localStorage.getItem('newUser'))
      console.log(this.newUser)
      this.registerUser = this.newUser.find((a) => {
        return a.userName == this.userName && a.password == this.password
      })
      if (this.registerUser) {
        (this.$store.state.authenticated=true)
          this.$router.push({ name: 'products' })
        localStorage.setItem('registerUser', JSON.stringify(this.registerUser))
      } else {
        this.$alert('Please Enter Correct Details')
      }
    },
    SignUp(){
      this.$router.push({name:"Signup"})
    }
  },
}
</script>

<!--sIGN UP page , 5 text-field all are required and 
validation are done through regex and rules import from the 
file name const.js inside constant folder
Sign up user data will be stored inside a local storage 
although its not a good way but for this project use local storage
-->
<template>
  <v-app id="app">
    <v-app-bar app height="50">
      <v-toolbar-title style="width: 350px"> Emart </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logIn"> Login </v-btn>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row>
                <v-col cols="12" md="12">
                  <v-card-text class="mt-2">
                    <h1 class="text-center display-2 Dark--text text--accent-3">
                      Sign Up Here
                    </h1>
                    <h4 class="text-center mt-3">
                      Kindly Enter your Correct Details
                    </h4>
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
                        type="tel"
                        required
                      ></v-text-field>
                      <v-text-field
                        :rules="passwordRules"
                        label="Password"
                        v-model="password"
                        type="password"
                        required
                      ></v-text-field>
                      <v-checkbox
                        :rules="checkboxRules"
                        label="Do you agree?"
                        required
                      ></v-checkbox>
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-4 mb-4">
                    <v-btn color="secondary" class="mr-4" @click="storeData">
                      <v-icon dark left block>
                        mdi-checkbox-marked-circle
                      </v-icon>
                      <span>Sign Up</span>
                    </v-btn>
                  </div>
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
  fnameRules,
  emailRules,
  userNameRules,
  passwordRules,
  phoneNumber1,
  checkboxRules,
} from '../constant/const.js'

export default {
  name: 'Signup',

  data() {
    return {
      valid: true,
      fnameRules: fnameRules,
      emailRules: emailRules,
      userNameRules: userNameRules,
      phoneNumber1: phoneNumber1,
      passwordRules: passwordRules,
      checkboxRules: checkboxRules,

      fullName: '',
      email: '',
      userName: '',
      phoneNumber: '',
      password: '',
      newUser: [],
    }
  },
  created() {
    this.newUser = JSON.parse(localStorage.getItem('newUser') || '[]')
  },

  methods: {
    storeData() {
      if (this.$refs.form.validate()) {
        let user = {
          fullName: this.fullName,
          userName: this.userName,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
        }
        if (
          this.newUser.some((a) => {
            return a.email == this.email
          })
        ) {
          this.$alert('Already Register Email')
        } else {
          this.newUser.push(user)
          localStorage.setItem('newUser', JSON.stringify(this.newUser))
          this.$alert('Account Created Please Login!')
          this.$router.push({ name: 'Login' })
        }
      } else {
        this.$alert('Check All fields fill or correct')
      }
    },
    logIn() {
      this.$router.push({ name: 'Login' })
    },
  },
}
</script>

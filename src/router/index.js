/*
Name:Hassan Subhani
Trainee: Front End Developer
Organization:Programmers Force
Project Name: Emart

*/
/*
Routers
File index.js 
Each and every component was routed through a specific path
compnents are imported first globally
Router guards are used
*/


import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import electricalcategory from '../components/electricalcategory'
import product from '../views/product.vue'
import Login from '../views/Login.vue'
import jewelery from '../components/jewelery.vue'
import mencategory from '../components/mencategory'
import womencategory from '../components/womencategory.vue'
import Profile from'../views/Profile.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
import store from'../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/', //default path everytime user login to the project this page will be show
    name: 'Signup',
    component: () =>
      import( '../views/Signup.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/updateprofile',
    name: 'UpdateProfile',
    component: UpdateProfile,
    
  },
  {
    path: '/products', //my main page
    name: 'products',
    component: Products,
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },

  {
    path: '/product/:id',
    component: product,
    name: 'product',
    props: true,
  },
  {
    path: '/jewelery',
    component: jewelery,
    name: 'jewelery',
    props: true,
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },
  {
    path: '/electronics',
    component: electricalcategory,
    name: 'electronic',
    props: true,
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },
  {
    path: '/menclothing',
    component: mencategory,
    name: 'menclothing',
    props: true,
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },
  {
    path: '/womenclothing',
    component: womencategory,
    name: 'womenclothing',
    props: true,
    beforeEnter: (to, from, next) => {

      if (store.state.authenticated == false) {

        next(false)

      } else {

        next()

      }

    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

//router Guards
//no one can access to anyother page through URl and Also he cannot enter to the main product page if he is not registered
// router.beforeEach((to, from, next) => {  

//   var isAuthenticated = false;
//   if (localStorage.getItem('registerUser'))
//     isAuthenticated = true;
//   else
//     isAuthenticated = false;
//   if (['/Login', '/Signup', ].includes(to.path) || isAuthenticated) {
//     next();
//   } else {
//     next('/Login'); 
//   }
// })

export default router

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
import Electricalcategory from '../components/Electricalcategory'
import product from '../views/product.vue'
import Login from '../views/Login.vue'
import Jewelery from '../components/Jewelery.vue'
import Mencategory from '../components/Mencategory'
import Womencategory from '../components/Womencategory.vue'
import Profile from '../views/Profile.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
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
    component: () => import('../views/Signup.vue'),
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
  },

  {
    path: '/product/:id',
    component: product,
    name: 'product',
    props: true,
  },
  {
    path: '/jewelery',
    component: Jewelery,
    name: 'jewelery',
    props: true,
  },
  {
    path: '/electronics',
    component: Electricalcategory,
    name: 'electronic',
    props: true,
  },
  {
    path: '/menclothing',
    component: Mencategory,
    name: 'menclothing',
    props: true,
  },
  {
    path: '/womenclothing',
    component: Womencategory,
    name: 'womenclothing',
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
//router guards only valid user have access to the other pages after the login page which includes, main product page , categories, profile and logout
//if user is not registered then first he have to create an account
router.beforeEach((to, from, next) => {
  var validUser = false
  if (localStorage.getItem('registerUser')) validUser = true
  else validUser = false
  if (['/login', '/'].includes(to.path) || validUser) {
    next()
  } else {
    next('/login')
  }
})
export default router

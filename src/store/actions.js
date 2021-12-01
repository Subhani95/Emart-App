/*
vuex store action
Api are fetched here of single product and all the products
method used is axios
*/

import axios from 'axios'

export const productData = ({ commit }) => {
  axios.get('https://fakestoreapi.com/products').then((response) => {
    commit('SET_PRODUCTS', response.data)
  })
}

export const singleProduct = ({ commit }, productid) => {
  axios
    .get(`https://fakestoreapi.com/products/${productid}`)
    .then((response) => {
      commit('SET_PRODUCT', response.data)
    })
}

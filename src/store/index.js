import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        item: {},
        isAdd: false,
        isEdit: false
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload
        },
        SET_ISADD(state, payload) {
            state.isAdd = payload
        },
        SET_ISEDIT(state, payload) {
            state.isEdit = payload
        },
        SET_ITEM(state, payload) {
            state.item = payload
        }
    },
    actions: {
        adding(context) {
            context.commit('SET_ISADD', true)
        },
        editing(context, payload) {
            context.commit('SET_ISEDIT', true)
            context.commit('SET_ITEM', payload)
            console.log(payload);
        },
        cancel(context) {
            context.commit('SET_ISADD', false)
            context.commit('SET_ISEDIT', false)
        },
        login(context, payload) {
            return new Promise((resolve, reject) => {
                const email = payload.email
                const password = payload.password
                return axios({
                        method: 'POST',
                        url: 'https://thawing-ocean-38020.herokuapp.com/admin/login',
                        data: {
                            email,
                            password
                        }
                    })
                    .then((data) => {
                        resolve(data.data)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })

        },
        logout() {
            localStorage.clear()
        },
        fetchProducts(context, payload) {
            axios({
                    method: 'GET',
                    url: 'https://thawing-ocean-38020.herokuapp.com/products',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(({ data }) => {
                    context.commit('SET_PRODUCTS', data.data)
                })
                .catch((err) => {
                    console.log(error)
                })
        },
        addProduct(context, payload) {
            return new Promise((resolve, reject) => {
                axios({
                        method: 'POST',
                        url: 'https://thawing-ocean-38020.herokuapp.com/products',
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        },
                        data: {
                            name: payload.name,
                            description: payload.description,
                            stock: payload.stock,
                            price: payload.price,
                            image: payload.image
                        }
                    })
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
        editProduct(context, payload) {
            return new Promise((resolve, reject) => {
                axios({
                        method: 'PUT',
                        url: 'https://thawing-ocean-38020.herokuapp.com/products/edit/' + payload.id,
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        },
                        data: {
                            name: payload.name,
                            description: payload.description,
                            stock: payload.stock,
                            price: payload.price,
                            image: payload.image
                        }
                    })
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },
        fetchProductById(context, payload) {
            return new Promise((resolve, reject) => {
                axios({
                        method: 'GET',
                        url: 'https://thawing-ocean-38020.herokuapp.com/products/' + payload,
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        }
                    })
                    .then(({ data }) => {
                        context.commit('SET_ITEM', data.data)
                        resolve(data.data)
                            // console.log(this.state.item);
                    })
                    .catch((err) => {
                        console.log(error)
                        reject(err)
                    })
            })
        },
        deleting(context, payload) {
            console.log('deleting on progress...')
            return new Promise((resolve, reject) => {
                axios({
                        method: 'DELETE',
                        url: 'https://thawing-ocean-38020.herokuapp.com/products/delete/' + payload,
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        }
                    })
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        }
    },
    modules: {}
})
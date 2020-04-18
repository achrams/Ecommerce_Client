import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        products: {}
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload
        }
    },
    actions: {
        login(context, payload) {
            return new Promise((resolve, reject) => {
                axios({
                        method: 'POST',
                        url: 'http://localhost:3000/admin/login',
                        data: {
                            email: payload.email,
                            password: payload.password
                        }
                    })
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        userlogin(context, payload) {
            return new Promise((resolve, reject) => {
                axios({
                        method: 'POST',
                        url: 'http://localhost:3000/user/login',
                        data: {
                            email: payload.email,
                            password: payload.password
                        }
                    })
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        addProduct(_, payload) {
            return new Promise((resolve, reject) => {
                console.log('payload :' + payload.name)
                axios({
                        method: 'POST',
                        url: 'http://localhost:3000/admin/addproduct',
                        headers: {
                            access_token: localStorage.access_token
                        },
                        data: {
                            name: payload.name,
                            image: payload.image,
                            description: payload.description,
                            videourl: payload.videourl,
                            price: payload.price
                        }
                    })
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        findAll(context, payload) {
            return new Promise((resolve, reject) => {
                console.log('masuk')
                axios({
                        method: 'GET',
                        url: 'http://localhost:3000/product/list',
                        headers: {
                            access_token: localStorage.access_token
                        }
                    })
                    .then(({ data }) => {
                        console.log(data)
                        context.commit('SET_PRODUCTS', data.data)
                            // console.log(data.Product)
                        this.products = data.data
                            // this.task= data.Task
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        },
        editPage(context, payload) {
            return new Promise((resolve, reject) => {
                axios({
                        method: 'GET',
                        url: 'http://localhost:3000/product/list/' + payload,
                        headers: {
                            access_token: localStorage.access_token
                        }
                    })
                    .then(({ data }) => {
                        console.log(data)
                        context.commit('SET_PRODUCTS', data.data)
                        resolve(data)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
            })
        },
        watchmovie(context, id) {
            return new Promise((resolve, reject) => {
                console.log(id)
                axios({
                        method: 'GET',
                        url: 'http://localhost:3000/product/list/' + id,
                        headers: {
                            access_token: localStorage.access_token
                        }
                    })
                    .then(({ data }) => {
                        this.products = ''
                        console.log(data)
                        context.commit('SET_PRODUCTS', data.data)
                        this.products = data.data
                        console.log('thisproduct : ' + this.products)
                        resolve(data.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        },
        edit(_, payload) {
            return new Promise((resolve, reject) => {
                axios({
                        method: 'PUT',
                        url: 'http://localhost:3000/admin/edit/' + payload.id,
                        headers: {
                            access_token: localStorage.access_token
                        },
                        data: {
                            name: payload.name,
                            image: payload.image,
                            videourl: payload.videourl,
                            description: payload.description,
                            price: payload.price
                        }
                    })
                    .then(({ data }) => {
                        resolve(data)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        addbalance(context, payload) {
            return new Promise((resolve, reject) => {
                console.log(payload)
                axios({
                        method: 'PUT',
                        url: 'http://localhost:3000/user',
                        headers: {
                            access_token: localStorage.access_token
                        },
                        data: {
                            balance: +payload
                        }
                    })
                    .then(({ data }) => {
                        console.log('sukses nambah duit')
                        resolve(data)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
            })
        }
    }
})

export default store
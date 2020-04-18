<template>
    <div class="productCard">
        <h1>{{product.name}}</h1>
        <img :src="product.image" alt="" height="120px" width="90px">
        <h3>Description:</h3>
        <h4>{{product.description}}</h4>
        <h3>Price:</h3>
        <h4>{{product.price}}</h4>
            <div v-if="isAdmin">
                <button v-on:click="editcontent(product.id)">Edit</button>
                <button v-on:click="hapus(product.id)">Delete</button>
            </div>
            <div v-if="!isAdmin">
                <button @click="watch(product.id)" >Watch</button>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'productCard',
  props: ['product'],
  data () {
      return {
          isAdmin : false
      }
  },
  created () {
      if(localStorage.isAdmin) {
          this.isAdmin = true
      }
  },
  methods: {
      editcontent (id) {
          this.$store.dispatch('editPage',id)
          .then((result)=>{
              this.$router.push('editpage')
          })
      },
      watch(id) {
          axios({
                method: 'GET',
                url: 'http://localhost:3000/user',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                .then(({ data }) => {
                    if(data.data.balance >= this.product.price)   {
                        this.$store.dispatch('watchmovie',id)
                        .then((result)=>{
                        this.$router.push('watch')
                        })
                    } else {
                        console.log('duit kurang')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
      }
  }
}
</script>

<style>
 .productCard{
    background: blanchedalmond;
    margin: 5px;
    width: 300px;
    height: 400px;
    border-radius: 10px;
 }
 h1{
     font-size: 20px;
 }
 h3{
     font-size: 14px;
 }
 h4{
     font-size: 12px;
 }

 .productCard button{
     margin: 2px;
 }
</style>
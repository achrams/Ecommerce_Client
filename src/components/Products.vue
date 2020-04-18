<template>
    <div>
    <h1>Add Product</h1>
    <form @submit.prevent="add">
        <label>Name</label><br>
        <input type="text" placeholder="product name" v-model="payload.name" required><br><br>
        <label>Image</label><br>
        <input type="text" placeholder="image" v-model="payload.image" required><br><br>
        <label>Description</label><br>
        <input type="text" placeholder="description" v-model="payload.description" required><br><br>
        <label>Video  Url</label><br>
        <input type="text" placeholder="video url" v-model="payload.videourl" required><br><br>
        <label>Price</label><br>
        <input type="number" placeholder="price" v-model="payload.price" required><br><br>
        <input type="submit">
    </form>
    </div>
</template>
<script>
export default {
    name: 'AddProduct',
    data () {
    return {
      payload: {
        name: '',
        image: '',
        videourl: '',
        description: '',
        price: ''
      }
    }
  },
  methods: {
      add () {
          this.$store.dispatch('addProduct',this.payload)
          .then((result)=>{
              this.$router.push('home')
          })
          .catch((err)=>{
              console.log('error')
          })
      }
  }
}
</script>
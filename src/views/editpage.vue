<template>
  <div class="modalAdd">
    <div class="modalAdd-content">
            <h3 style="display:flex; justify-content:center;">Edit Product</h3>
            <form style="display:flex; flex-direction:column; justify-content:space-between;" @submit.prevent="edit">
                    <label for="name">Name</label>
                    <input type="text area" placeholder="Insert name" name="name" id="name" style="margin: 3% 0;"  autocomplete="off" v-model="payload.name"><br>
                    <label for="image">Image</label>
                    <input type="text area" placeholder="Insert image url" name="image" id="image" style="margin: 3% 0;"  autocomplete="off" v-model="payload.image"><br>
                    <label for="description">Description</label>
                    <input type="text area" placeholder="Insert description" name="description" id="description" style="margin: 3% 0;"  autocomplete="off" v-model="payload.description"><br>
                     <label for="videourl">Video url</label>
                    <input type="text area" placeholder="Insert url video" name="videourl" id="videourl" style="margin: 3% 0;"  autocomplete="off" v-model="payload.videourl"><br>
                    <label for="price">Price</label>
                    <input type="text area" placeholder="Insert price" name="price" id="price" style="margin: 3% 0;"  autocomplete="off" v-model="payload.price"><br>
                    <button type="submit" style="margin: 3% 0;" >Edit</button>
                    <button style="margin: 0 0;" @click="close">cancel</button>
                </form>
    </div>
</div>
</template>

<script>
export default {
  name: 'editpage',
  data () {
    return {
      payload: {
        id: this.$store.state.products.id,
        name: this.$store.state.products.name,
        image: this.$store.state.products.image,
        description: this.$store.state.products.description,
        videourl: this.$store.state.products.videourl,
        price: this.$store.state.products.price
      }
    }
  },
  methods: {
    close () {
      this.$router.push('home')
    },
    edit () {
      this.$store.dispatch('edit', this.payload)
        .then(data => {
          this.$router.push('home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
      if(!localStorage.isAdmin){
          this.$router.push('home')
      }
  }
}
</script>

<style>
</style>
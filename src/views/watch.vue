<template>
    <div class="watch">
        <iframe width="560" height="315" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>
        <button @click="close">Back</button>
    </div>
</template>
<script>
export default {
    name: 'watch',
    data () {
        return {
            url : this.$store.state.products.videourl
        }
    },
    computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    close () {
      this.$router.push('home')
    }
  },
  created () {
    if(!localStorage.access_token){
        this.$route.push('home')
    }
  }
}
</script>
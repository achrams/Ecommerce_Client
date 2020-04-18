<template>
  <div class="home">
    <Homepage />
    <div id="navpanel">
            <div id="panelbutton">
                <button @click="logout" >Log Out</button>
            </div>
    </div>
    <productlist />
  </div>
</template>

<script>
import Homepage from '@/components/homepage.vue'
import productlist from '@/components/list.vue'

export default {
  name: 'Home',
  components: {
    Homepage,
    productlist
  },
  methods: {
      logout () {
          localStorage.clear()
          this.$router.push('/')
      }
  },
  created () {
      if(!localStorage.access_token){
          this.$router.push('/')
      } else{
          if (localStorage.isAdmin) {
          this.$router.push('controlpanel')
          }
      }
  }
}
</script>
<style scoped>
#navpanel{
    width: 100%;
    display: flex;
    height: 75px;
    justify-content: center;
}
#panelbutton{
    position: fixed;
}
</style>
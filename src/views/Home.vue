<template>
  <div class="home">
    <Homepage />
    <Loginform />
    <Registerform />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/homepage.vue'
import Loginform from '@/components/loginform.vue'
import Registerform from '@/components/registerform.vue'

export default {
  name: 'Home',
  components: {
    Homepage,
    Loginform,
    Registerform
  }
}
</script>

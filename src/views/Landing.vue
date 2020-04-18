<template>
  <div class="landing">
    <Loginform
    v-if="haveAccount"
    @donthave="dontHaveAcc"
     />
    <Registerform
    v-if="!haveAccount"
    @have="haveAcc"
     />
  </div>
</template>

<script>
// @ is an alias to /src
import Loginform from '@/components/loginform.vue'
import Registerform from '@/components/registerform.vue'

export default {
  name: 'Landing',
  components: {
    Loginform,
    Registerform
  },
  data () {
    return {
      haveAccount: true
    }
  },
  methods: {
    dontHaveAcc () {
      this.haveAccount = false
    },
    haveAcc () {
      this.haveAccount = true
    }
  },
  created () {
      if(localStorage.access_token){
          this.$router.push('home')
      }
  }
}
</script>

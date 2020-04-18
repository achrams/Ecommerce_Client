<template>
    <form v-on:submit.prevent="adminLogin">
        <label>Email</label><br>
        <input type="email" v-model="admin.email" placeholder="email"><br><br>
        <label>Password</label><br>
        <input type="password" v-model="admin.password" placeholder="password"><br><br>
        <input type="submit">
    </form>
</template>
<script>
import axios from 'axios'
export default {
    name: 'AdminLogin',
    data () {
        return {
            admin:{
                email: '',
                password: ''
            }
        }
    },
    methods: {
        adminLogin () {
            this.$store.dispatch('login',this.admin)
            .then((result)=>{
                console.log(result)
                localStorage.setItem('access_token',result.data.access_token)
                localStorage.setItem('isAdmin',result.data.isAdmin)
                this.$router.push('home')
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    created () {
      if(localStorage.access_token){
          this.$router.push('home')
      }
  }
}
</script>
<template>
<div class="login">
  <div class="loginform">
    <h1>Login Form</h1>
    <form>
        <label for="email">Email</label><br>
        <input type="email" placeholder="eg: example@mail.com" v-model="login.email" id="emailbox"><br><br>
        <label for="password">Password</label><br>
        <input type="password" placeholder="**********" v-model="login.password" id="passbox"><br><br>
        <input type="submit" value="Login" id="submitBtn" v-on:click.prevent="loginUser"><br><br>
        <a id="donthaveBtn" href="#" @click="$emit('donthave')">Dont Have Account</a>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Loginform',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser () {
      this.$store.dispatch('userlogin',this.login)
        .then((result) => {
          console.log('result '+result.access_token)
          localStorage.setItem('access_token', result.access_token)
          this.$router.push('home')
        })
    }
  }
}
</script>

<style scoped>
    .login{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .loginform{
        background: blanchedalmond;
        width: 300px;
        height: 270px;
        border-radius: 10px;
        border: solid;
    }
    #submitBtn, #emailbox, #passbox{
        width: max;
    }
</style>
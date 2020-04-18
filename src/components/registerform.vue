<template>
<div class="register">
  <div class="registerform">
    <h1>Register Form</h1>
    <form>
        <label for="email">Email</label><br>
        <input type="email" placeholder="eg: example@mail.com" v-model="register.email" id="emailbox"><br><br>
        <label for="password">Password</label><br>
        <input type="password" placeholder="**********" v-model="register.password" id="passbox"><br><br>
        <input type="submit" value="Register" id="submitBtn" v-on:click.prevent="registerUser"><br><br>
        <a id="haveBtn" href="#" @click="$emit('have')">Have Account</a>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Registerform',
  data () {
    return {
      register: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser () {
      const url = 'http://localhost:3000/user/register'
      const payload = {
        email: this.register.email,
        password: this.register.password
      }
      axios
        .post(url, payload)
        .then((result) => {
          localStorage.setItem('access_token', result.data.access_token)
          this.$router.push('home')
        })
    }
  }
}
</script>

<style scoped>
    .register{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .registerform{
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
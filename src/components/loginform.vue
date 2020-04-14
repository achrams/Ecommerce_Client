<template>
<div class="login">
  <div class="loginform">
    <h1>Login Form</h1>
    <form>
        <label for="email">Email</label><br>
        <input type="email" placeholder="eg: example@mail.com" v-model="login.email" id="emailbox"><br><br>
        <label for="password">Password</label><br>
        <input type="password" placeholder="**********" v-model="login.email" id="passbox"><br><br>
        <input type="submit" value="Login" id="submitBtn">
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Loginform',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
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
        height: 240px;
        border-radius: 10px;
        border: solid;
    }
    #submitBtn, #emailbox, #passbox{
        width: max;
    }
</style>
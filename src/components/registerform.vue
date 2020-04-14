<template>
<div class="register">
  <div class="registerform">
    <h1>register Form</h1>
    <form>
        <label for="email">Email</label><br>
        <input type="email" placeholder="eg: example@mail.com" v-model="register.email" id="emailbox"><br><br>
        <label for="password">Password</label><br>
        <input type="password" placeholder="**********" v-model="register.email" id="passbox"><br><br>
        <input type="submit" value="Register" id="submitBtn">
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Registerform',
  data () {
    return {
      register: {
        email: '',
        password: ''
      }
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
        height: 240px;
        border-radius: 10px;
        border: solid;
    }
    #submitBtn, #emailbox, #passbox{
        width: max;
    }
</style>
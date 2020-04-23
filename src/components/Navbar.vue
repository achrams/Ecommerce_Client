<template>
  <div class="navbar">
    <div class="navbar-list">
        <button class="logoutbtn" @click.prevent="logout">LOGOUT</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods : {
      logout () {
            this.$store.dispatch('logout')
            this.isLogin = false
                this.$router.push('/login')
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 50px;
    margin-top: -7px;
    margin-left: 10px;
    z-index: 100;
    position: fixed;
}

.logoutbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.logoutbtn:hover{
  background-color: #3e8e41;
}
</style>

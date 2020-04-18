<template>
    <div class="cpanel">
        <div id="navpanel">
            <div id="panelbutton">
                <button v-if="!letsAdd" @click="addproduct">Add Product</button>
                <button @click="logout" >Log Out</button>
            </div>
        </div>
        <div v-if="letsAdd" @submit="closeAdd">
            <AddProduct /><br>
            <button @click="closeAdd">Cancel</button>
        </div>
        <div v-if="!letsAdd">
            <productlist />
        </div>
    </div>
</template>
<script>
import AddProduct from '@/components/Products.vue'
import productlist from '@/components/list.vue'
export default {
    name: 'admincpanel',
    data () {
        return {
            letsAdd : false
        }
    },
  components: {
    AddProduct,
    productlist
  },
  methods: {
      logout () {
          localStorage.clear()
          this.$router.push('/')
      },
      addproduct () {
          this.letsAdd = true
      },
      closeAdd () {
          this.letsAdd = false
      }
  },
  created () {
      if(!localStorage.isAdmin){
          this.$router.push('home')
      }
  }
}
</script>
<style scoped>
.cpanel{
    width: 100%;
    display: flex;
    flex-direction: column;
}
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
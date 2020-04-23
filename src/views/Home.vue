<template>
  <div class="home">
    <Navbar/>
    <Add v-if="isAdd" />
    <Edit v-if="isEdit" />
    <div class="add">
    <button class="addbtn" @click.prevent="adds">Add Product</button>
    </div>
    <div class="datalist">
        <ProductList/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ProductList from '@/components/ProductList.vue'
import Add from '@/components/Add.vue'
import Edit from '@/components/Edit.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    ProductList,
    Add,
    Edit
  },
  methods : {
      adds () {
          this.$store.dispatch('adding')
      }
  },
  computed : {
      isAdd () {
          return this.$store.state.isAdd
      },
      isEdit () {
          return this.$store.state.isEdit
      }
  },
  created () {
      if(!localStorage.access_token){
          this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.add{
    z-index: 100;
    height: 100px;
    width: 200px;
}

.addbtn {
  float: left;
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.addbtn:hover{
  background-color: #3e8e41;
}
</style>

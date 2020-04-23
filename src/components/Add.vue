<template>
<div class="add">
    <div class="content">
    <form>
        <br><br>
        <label>Name</label><br>
        <input id="bar" type="text" placeholder="name" v-model="product.name"><br>
        <label>description</label><br>
        <input id="bar" type="text" placeholder="description" v-model="product.description"><br>
        <label>image</label><br>
        <input id="bar" type="text" placeholder="Image" v-model="product.image"><br>
        <label>stock</label><br>
        <input id="bar" type="number" placeholder="Stock" v-model="product.stock"><br>
        <label>price</label><br>
        <input id="bar" type="number" placeholder="Price" v-model="product.price"><br><br>
        <input type="submit" value="Submit" @click.prevent="confirmAdd">
        <button @click.prevent="cancel">cancel</button>
    </form>    
    </div>
</div>    
</template>
<script>
export default {
    name:'Add',
    data () {
        return{
            product:{
                name: '',
                description: '',
                image: '',
                stock: 0,
                price: 0
            }
        }
    },
    methods: {
        cancel() {
            this.$store.dispatch('cancel')
        },
        confirmAdd () {
            let payload = {
                name: this.product.name,
                description: this.product.description,
                image: this.product.image,
                price: this.product.price,
                stock: this.product.stock
            }
            this.$store.dispatch('addProduct',payload)
            .then((result)=>{
                this.$router.push('/login')
            })
        }
    }
}
</script>
<style scoped>
.add{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
}

.content{
    height: 100%;
}

form{
    margin-top: 180px;
    width: 300px;
    height: 300px;
    background: blanchedalmond;
}

#bar{
    width: 200px;
}
</style>
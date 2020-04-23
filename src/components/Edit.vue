<template>
<div class="add">
    <div class="content">
    <form>
        id:{{product.id}}
        <br><br>
        <label>Name</label><br>
        <input id="bar" type="text" v-model="product.name"><br>
        <label>description</label><br>
        <input id="bar" type="text" placeholder="description" v-model="product.description"><br>
        <label>image</label><br>
        <input id="bar" type="text" placeholder="Image" v-model="product.image"><br>
        <label>stock</label><br>
        <input id="bar" type="number" placeholder="Stock" v-model="product.stock"><br>
        <label>price</label><br>
        <input id="bar" type="number" placeholder="Price" v-model="product.price"><br><br>
        <input type="submit" value="Submit" @click.prevent="confirmEdit(product.id)">
        <button @click.prevent="cancel">cancel</button>
    </form>    
    </div>
</div>    
</template>
<script>
export default {
    name:'Edit',
    data () {
        return{
            product:{
                id: '',
                name: '',
                description: '',
                image: '',
                stock: 0,
                price: 0
            }
        }
    },
    computed : {
        item () {
            return this.$store.state.item
        }
    },
    methods: {
        cancel() {
            this.$store.dispatch('cancel')
        },
        confirmEdit (id) {
            let payload = {
                id:id,
                name: this.product.name,
                description: this.product.description,
                image: this.product.image,
                price: this.product.price,
                stock: this.product.stock
            }
            this.$store.dispatch('editProduct',payload)
            .then((result)=>{
            this.$store.dispatch('cancel')
            this.$router.push('/login')
            })
        }
    },
    created () {
        this.product = this.item
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
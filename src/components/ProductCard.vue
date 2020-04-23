<template>
<div class="product-card" href="#">
    <div id="card">
        <div id="card-name">
        <h2>{{product.name}}</h2>
        </div><br>
        <div id="product-image">
            <img id="image" :src="product.image"/>
        </div><br>
        <div id="product-desc">
                <h3>{{product.description}}</h3><br>
                <h3>IDR {{formatMoney(product.price)}}</h3>
                <h3>Stock : {{product.stock}}</h3>
        </div>
        <div class="panel">
        <button class="editBtn" @click.prevent="findById(product.id)">Edit</button>
        <button class="deleteBtn" @click.prevent="deleting(product.id)">Delete</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'ProductCard',
    props: ['product'],
    data () {
        return {
            productPrice : ''
        }
    },
    methods : {
        findById (id) {
            this.$store.dispatch('fetchProductById',id)
            .then((data)=>{
                this.$store.dispatch('editing',data)
            })
        },
        deleting (id) {
            console.log('deleting...')
            this.$store.dispatch('deleting',id)
            .then((result)=>{
                this.$router.push('/login')
            })
        },
        formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
            try {
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const negativeSign = amount < 0 ? "-" : "";

                let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                let j = (i.length > 3) ? i.length % 3 : 0;

                return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
            } catch (e) {
                console.log(e)
            }
        }
    }
    
}
</script>
<style scoped>

.editBtn {
  float: left;
    margin-left: 1px;
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 10px;
  border: none;
  cursor: pointer;
  width: 145px;
    border-bottom-left-radius: inherit;
    /* border-bottom-right-radius: inherit; */
}
.deleteBtn {
    margin-left: 5px;
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 10px;
  border: none;
  cursor: pointer;
  width: 145px;
  border-bottom-right-radius: inherit;
}
.editBtn:hover, .deleteBtn:hover{
  background-color: #3e8e41;
}

.product-card{
    margin: 5px;
}
.panel{
    display: flex;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

}

#card{
    background: white;
    border: solid rgba(0, 0, 0, 0.6);
    border-width: 1px;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 5px grey;
    transition-duration: 100ms;
    color: black;
    border-radius: 10px;
}

#product-image{
    width: 100%;
}
#image{
    width: 150px;
    height: 150px;
}

#product-desc{
    margin: 0;
}
li{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
a{
    text-decoration: none;
    text-align: center;
}

#card-name{
      background-color: #4CAF50;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
}

h2{
    font-weight: 500;
}
</style>
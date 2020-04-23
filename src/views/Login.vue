<template>
<div class="login">
    <div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>RAGNAROK TRADING POST</h3>
			</div>
			<div class="card-body">
				<form>
                    <h2>ADMIN LOGIN</h2>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username" v-model="login.email">
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password" v-model="login.password">
					</div>
					<br><br>
					<div class="form-group">
						<input type="submit" value="Login" class="btn login_btn" @click.prevent="loginUser">
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
</div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            login : {
                email:'',
                password: ''
            }
        }
    },
    methods :{
        loginUser () {
            this.$store.dispatch('login',(this.login))
            .then((data)=>{
                localStorage.setItem('access_token',data.access_token)
                this.$router.push('/')
            })
        }
    },
    created() {
        if(localStorage.access_token){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Numans');

.login{
background-size: cover;
height: 100%;
width: 100%;
font-family: 'Numans', sans-serif;
display: flex;
justify-content: center;
/* background: black; */
}

.container{
height: 100%;
align-content: center;
}

.card{
height: 370px;
margin-top: 100px;
margin-bottom: auto;
width: 400px;
background-color: rgb(255, 255, 255) !important;
}

.card-header h3{
color: rgb(0, 0, 0);
}


.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.login_btn{
color: black;
background-color: #FFC312;
width: 100%;
}

.cancel_btn{
color: black;
background-color: rgb(255, 65, 18);
width: 100%;
}

.login_btn:hover, .cancel_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
</style>
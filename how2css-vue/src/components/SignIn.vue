<template>
    <form class="w-50 mx-auto mt-5">
        <div class="form-group">
            <div>
                <input type="email" class="form-control" placeholder="Enter email" id="email" name="useremail" v-model="userInfo.email" v-on:focus="hideAlerts">
            </div>
            <div v-if="isAuthError" class="alert alert-danger" role="alert">
                Authentication error!
            </div>
        </div>
        <div class="form-group">
            <div>
                <input type="password" class="form-control" placeholder="Enter password" id="pwd" name="userpass" v-model="userInfo.password" v-on:focus="hideAlerts">
            </div>
            <div v-if="isAuthError" class="alert alert-danger" role="alert">
                Authentication error!
            </div>
        </div>
        <button v-on:click.prevent="handleClick" type="submit" class="btn btn-primary w-100">Submit</button>
    </form>
</template>
<script>
export default {
    data(){
        return{
            userInfo: {
                email: 'ilivocs@gmail.com', 
                password: '_Aa123456'
            },
            isLoagged: true,
            isAuthError: false
        }
    },
    methods: {
        async postData(url = '', data = {}){
            const response = await fetch(
                url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(data)
                }
            );
            return await response.json();
        },
        handleClick(event){
            console.log(this.userInfo.email + ' ' + this.userInfo.password)
            this.postData('https://localhost:5001/api/users/login', this.userInfo)
            .then(data => {
                this.isLoagged=Boolean(data)
                console.log(this.isLoagged)
                if(this.isLoagged===true){
                    localStorage.setItem("currentuser", this.userInfo.email)
                    this.$router.push('/account');     
                }
                else{
                    this.isAuthError=true;
                }
            })
            //console.log(this.isLoagged)
            //event.preventDefault();
            //this.$router.push('/account');
        },
        hideAlerts(){
            this.isAuthError=false;
        }
    }
}
</script>
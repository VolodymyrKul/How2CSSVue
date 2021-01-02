<template>
    <div class="container">
            <div class="btn-group-vertical w-25 mt-5" style="float: left;">
                <button type="button" class="btn btn-primary">Profile</button>
                <button type="button" class="btn btn-primary">Open test</button>
                <button type="button" class="btn btn-primary dropup" v-on:click="changeOptions">
                    Achievements<span style="float: right; cursor: pointer;"><i class="fas" v-bind:class="{'fa-caret-up': achievOptions, 'fa-caret-down': !achievOptions}"></i></span>
                </button>
                <router-link v-if="achievOptions" to="/ownachievs" class="w-100 btn btn-primary">My achievements</router-link>
                <router-link v-if="achievOptions" to="/antachievs" class="w-100 btn btn-primary">Another user achievements</router-link>
                <router-link v-if="achievOptions" to="/compareachievs" class="w-100 btn btn-primary">Compare achievements</router-link>              
                <button type="button" class="btn btn-primary">Option 1</button>
                <button v-on:click="goToSave" type="button" class="btn btn-primary">Save achivement</button>
                <button type="button" class="btn btn-primary">About</button>
            </div>
            <div class="w-50 mt-5" style="float: left;"></div>
            <div class="w-25 mt-5" style="float: left;">
                <div class="card mx-auto bg-secondary" style="width: 300px; position: relative;">
                    <img class="card-img-top" style="width: 300px; height: 400px;" src="https://www.clker.com/cliparts/g/l/R/7/h/u/teamstijl-person-icon-blue.svg" alt="Img"/>
                    <div class="card-body">
                        <h4 class="card-title" style="textAlign: center;">{{profileInfo.firstName + ' ' + profileInfo.lastName}}</h4>
                        <h5 class="card-title" style="textAlign: center;">{{profileInfo.email}}</h5>
                        <h5 class="card-title" style="textAlign: center;">{{profileInfo.phone}}</h5>
                        <h5 class="card-title" style="textAlign: center;">{{profileInfo.role}}</h5>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            achievOptions: false,
            profileInfo: {
                id: 1, 
                firstName: 'Loading...', 
                lastName: '', 
                email: 'Loading...', 
                phone: 'Loading...', 
                password: '', 
                role: 'Loading...'
            }
        }
    },
    mounted(){
        fetch('https://localhost:5001/api/users/info/'+localStorage.getItem("currentuser"))
        .then(response => response.json())
        .then(data => {
            this.profileInfo=data;
        })
    },
    methods: {
        changeOptions(){
            this.achievOptions=!this.achievOptions;
        },
        goToSave(){
            this.$router.push({path: '/saveachiev',query:{comcnt:'24', corcnt:'21', curmark:'39', lvlparam:'CSS_Part1'}});
        }
    }
}
</script>
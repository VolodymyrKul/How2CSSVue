<template>
    <div>
            <form class="w-75 mx-auto mt-4 mb-4">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" name="useremail" v-model="searchUserEmail"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" v-on:click="handleClick"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                    <div v-if="!isFounded" class="alert alert-danger" role="alert">
                        User did not find!
                    </div>
                </div>
            </form>
            <table class="table table-striped table-bordered w-75 mx-auto mt-4">
                <thead>
                    <tr>
                        <th></th>
                        <th colspan="3" style="textAlign: center;">My achievements</th>
                        <th colspan="3" style="textAlign: center;">SearchUser achievements</th>
                    </tr>
                    <tr>
                        <th class="thstyle">Test title<span style="float: right; cursor: pointer;" v-on:click="byTitleSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': titleMode, 'fa-caret-down': !titleMode}"></i></span></th>
                        <th class="thstyle">Completed/All<span style="float: right; cursor: pointer;" v-on:click="byOwnComCountSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': ownComCountMode, 'fa-caret-down': !ownComCountMode}"></i></span></th>
                        <th class="thstyle">Correct/All<span style="float: right; cursor: pointer;" v-on:click="byOwnCorCountSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': ownCorCountMode, 'fa-caret-down': !ownCorCountMode}"></i></span></th>
                        <th class="thstyle">Current mark<span style="float: right; cursor: pointer;" v-on:click="byOwnCurMarkSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': ownCurMarkMode, 'fa-caret-down': !ownCurMarkMode}"></i></span></th>
                        <th class="thstyle">Completed/All<span style="float: right; cursor: pointer;" v-on:click="byAntComCountSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': antComCountMode, 'fa-caret-down': !antComCountMode}"></i></span></th>
                        <th class="thstyle">Correct/All<span style="float: right; cursor: pointer;" v-on:click="byAntCorCountSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': antCorCountMode, 'fa-caret-down': !antCorCountMode}"></i></span></th>
                        <th class="thstyle">Current mark<span style="float: right; cursor: pointer;" v-on:click="byAntCurMarkSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': antCurMarkMode, 'fa-caret-down': !antCurMarkMode}"></i></span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="!tableMode">
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                    </tr>
                    <CompareAchievItem v-else v-for="(achiev,index) of compareAchievData" v-bind:key="index" v-bind:achievItem="achiev"/>
                </tbody>
            </table>
        </div>
</template>
<script>
import CompareAchievItem from './CompareAchievItem'
export default {
    components: {
        CompareAchievItem
    },
    data(){
        return{
            compareAchievData: [],
            searchUserEmail: 'turyanmykh@gmail.com',
            isFounded: true,
            titleMode: false,
            ownComCountMode: false,
            ownCorCountMode: false,
            ownCurMarkMode: false,
            antComCountMode: false,
            antCorCountMode: false,
            antCurMarkMode: false,
            tableMode: false
        }
    },
    methods: {
        handleClick(event) {
            console.log(this.searchUserEmail)
            fetch('https://localhost:5001/api/users/search/' + this.searchUserEmail)
                .then(data => {
                    this.isFounded = Boolean(data);
                    if(this.isFounded){
                        fetch('https://localhost:5001/api/achievdatas/compare/'+ localStorage.getItem("currentuser") + '/' + this.searchUserEmail)
                            .then(response => response.json())
                            .then(data => {
                                this.compareAchievData = data
                                this.tableMode = true
                                //console.log(compareAchievData[0])
                            })
                    }
                })
        },
        byTitleSort(){
            if(this.titleMode){
                this.compareAchievData.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle > b.trainingTestTitle) ? 1 : (b.trainingTestTitle > a.trainingTestTitle) ? -1 : 0);
            }
            else{
                this.compareAchievData.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle < b.trainingTestTitle) ? 1 : (b.trainingTestTitle < a.trainingTestTitle) ? -1 : 0);
            }
            this.titleMode=!this.titleMode;
        },
        byOwnComCountSort(){
            if(this.ownComCountMode){
                this.compareAchievData.sort((a,b) => (a.ownCompletedCount===undefined || b.ownCompletedCount===undefined) ? 0 : (a.ownCompletedCount > b.ownCompletedCount) ? 1 : (b.ownCompletedCount > a.ownCompletedCount) ? -1 : 0);
            }
            else{
                this.compareAchievData.sort((a,b) => (a.ownCompletedCount===undefined || b.ownCompletedCount===undefined) ? 0 : (a.ownCompletedCount < b.ownCompletedCount) ? 1 : (b.ownCompletedCount < a.ownCompletedCount) ? -1 : 0);
            }
            this.ownComCountMode=!this.ownComCountMode;
        },
        byOwnCorCountSort(){
            if(this.ownCorCountMode){
                this.compareAchievData.sort((a,b) => (a.ownCorrectCount===undefined || b.ownCorrectCount===undefined) ? 0 : (a.ownCorrectCount > b.ownCorrectCount) ? 1 : (b.ownCorrectCount > a.ownCorrectCount) ? -1 : 0);
            }
            else{
                this.compareAchievData.sort((a,b) => (a.ownCorrectCount===undefined || b.ownCorrectCount===undefined) ? 0 : (a.ownCorrectCount < b.ownCorrectCount) ? 1 : (b.ownCorrectCount < a.ownCorrectCount) ? -1 : 0);
            }
            this.ownCorCountMode=!this.ownCorCountMode;
        },
        byOwnCurMarkSort(){
            if(this.ownCurMarkMode){
                this.compareAchievData.sort((a,b) => (a.ownCurrentMark===undefined || b.ownCurrentMark===undefined) ? 0 : (a.ownCurrentMark > b.ownCurrentMark) ? 1 : (b.ownCurrentMark > a.ownCurrentMark) ? -1 : 0);
            }
            else{
                this.compareAchievData.sort((a,b) => (a.ownCurrentMark===undefined || b.ownCurrentMark===undefined) ? 0 : (a.ownCurrentMark < b.ownCurrentMark) ? 1 : (b.ownCurrentMark < a.ownCurrentMark) ? -1 : 0);
            }
            this.ownCurMarkMode=!this.ownCurMarkMode;
        },
        byAntComCountSort(){
            if(this.antComCountMode){
                this.compareAchievData.sort((a,b) => (a.antCompletedCount===undefined || b.antCompletedCount===undefined) ? 0 : (a.antCompletedCount > b.antCompletedCount) ? 1 : (b.antCompletedCount > a.antCompletedCount) ? -1 : 0);
            }
            else{
                this.compareAchievData.sort((a,b) => (a.antCompletedCount===undefined || b.antCompletedCount===undefined) ? 0 : (a.antCompletedCount < b.antCompletedCount) ? 1 : (b.antCompletedCount < a.antCompletedCount) ? -1 : 0);
            }
            this.antComCountMode=!this.antComCountMode;
        },
        byAntCorCountSort(){
            if(this.antCorCountMode){
                this.compareAchievData.sort((a,b) => (a.antCorrectCount===undefined || b.antCorrectCount===undefined) ? 0 : (a.antCorrectCount > b.antCorrectCount) ? 1 : (b.antCorrectCount > a.antCorrectCount) ? -1 : 0);
            }
            else{
                this.compareAchievData.sort((a,b) => (a.antCorrectCount===undefined || b.antCorrectCount===undefined) ? 0 : (a.antCorrectCount < b.antCorrectCount) ? 1 : (b.antCorrectCount < a.antCorrectCount) ? -1 : 0);
            }
            this.antCorCountMode=!this.antCorCountMode;
        },
        byAntCurMarkSort(){
            if(this.antCurMarkMode){
                this.compareAchievData.sort((a,b) => (a.antCurrentMark===undefined || b.antCurrentMark===undefined) ? 0 : (a.antCurrentMark > b.antCurrentMark) ? 1 : (b.antCurrentMark > a.antCurrentMark) ? -1 : 0);
            }
            else{
                this.compareAchievData.sort((a,b) => (a.antCurrentMark===undefined || b.antCurrentMark===undefined) ? 0 : (a.antCurrentMark < b.antCurrentMark) ? 1 : (b.antCurrentMark < a.antCurrentMark) ? -1 : 0);
            }
            this.antCurMarkMode=!this.antCurMarkMode;
      }
    }
}
</script>
<style scoped>
.thstyle{
    text-align: left;
}
</style>
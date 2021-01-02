<template>
    <table class="table table-striped table-bordered w-75 mx-auto mt-4">
            <thead>
                <tr>
                    <th>Test title<span style="float: right; cursor: pointer" v-on:click="byTitleSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': titleMode, 'fa-caret-down': !titleMode}"></i></span></th>
                    <th>Completed/All<span style="float: right; cursor: pointer" v-on:click="byComCountSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': comCountMode, 'fa-caret-down': !comCountMode}"></i></span></th>
                    <th>Correct/All<span style="float: right; cursor: pointer" v-on:click="byCorCountSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': corCountMode, 'fa-caret-down': !corCountMode}"></i></span></th>
                    <th>Current mark<span style="float: right; cursor: pointer" v-on:click="byCurMarkSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': curMarkMode, 'fa-caret-down': !curMarkMode}"></i></span></th>
                    <th>Try number<span style="float: right; cursor: pointer" v-on:click="byTryNumSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': tryNumMode, 'fa-caret-down': !tryNumMode}"></i></span></th>
                    <th>Date<span style="float: right; cursor: pointer" v-on:click="bySaveDateSort"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': saveDateMode, 'fa-caret-down': !saveDateMode}"></i></span></th>
                </tr>
            </thead>
            <tbody>
                <OwnAchievItem v-for="(achiev,index) of detailAchievs" v-bind:key="index" v-bind:achievItem="achiev"/>
            </tbody>
        </table>
</template>
<script>
import OwnAchievItem from './OwnAchievItem'
export default {
  components: { OwnAchievItem },
    data(){
        return{
            detailAchievs: [],
            titleMode: false,
            comCountMode: false,
            corCountMode: false,
            curMarkMode: false,
            tryNumMode: false,
            saveDateMode: false
        }
    },
    mounted(){
        fetch('https://localhost:5001/api/achievdatas/detail/' + localStorage.getItem("currentuser"))
            .then(response => response.json())
            .then(data => {
                this.detailAchievs=data;
            })
    },
    methods: {
        byTitleSort(){
            if(this.titleMode){
                this.detailAchievs.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle > b.trainingTestTitle) ? 1 : (b.trainingTestTitle > a.trainingTestTitle) ? -1 : 0);
            }
            else{
                this.detailAchievs.sort((a,b) => (a.trainingTestTitle===undefined || b.trainingTestTitle===undefined) ? 0 : (a.trainingTestTitle < b.trainingTestTitle) ? 1 : (b.trainingTestTitle < a.trainingTestTitle) ? -1 : 0);
            }
            this.titleMode=!this.titleMode;
        },
        byComCountSort(){
            if(this.comCountMode){
                this.detailAchievs.sort((a,b) => (a.completedCount===undefined || b.completedCount===undefined) ? 0 : (a.completedCount > b.completedCount) ? 1 : (b.completedCount > a.completedCount) ? -1 : 0);
            }
            else{
                this.detailAchievs.sort((a,b) => (a.completedCount===undefined || b.completedCount===undefined) ? 0 : (a.completedCount < b.completedCount) ? 1 : (b.completedCount < a.completedCount) ? -1 : 0);
            }
            this.comCountMode=!this.comCountMode;
        },
        byCorCountSort(){
            if(this.corCountMode){
                this.detailAchievs.sort((a,b) => (a.correctCount===undefined || b.correctCount===undefined) ? 0 : (a.correctCount > b.correctCount) ? 1 : (b.correctCount > a.correctCount) ? -1 : 0);
            }
            else{
                this.detailAchievs.sort((a,b) => (a.correctCount===undefined || b.correctCount===undefined) ? 0 : (a.correctCount < b.correctCount) ? 1 : (b.correctCount < a.correctCount) ? -1 : 0);
            }
            this.corCountMode=!this.corCountMode;
        },
        byCurMarkSort(){
            if(this.curMarkMode){
                this.detailAchievs.sort((a,b) => (a.currentMark===undefined || b.currentMark===undefined) ? 0 : (a.currentMark > b.currentMark) ? 1 : (b.currentMark > a.currentMark) ? -1 : 0);
            }
            else{
                this.detailAchievs.sort((a,b) => (a.currentMark===undefined || b.currentMark===undefined) ? 0 : (a.currentMark < b.currentMark) ? 1 : (b.currentMark < a.currentMark) ? -1 : 0);
            }
            this.curMarkMode=!this.curMarkMode;
        },
        byTryNumSort(){
            if(this.tryNumMode){
                this.detailAchievs.sort((a,b) => (a.tryCount===undefined || b.tryCount===undefined) ? 0 : (a.tryCount > b.tryCount) ? 1 : (b.tryCount > a.tryCount) ? -1 : 0);
            }
            else{
                this.detailAchievs.sort((a,b) => (a.tryCount===undefined || b.tryCount===undefined) ? 0 : (a.tryCount < b.tryCount) ? 1 : (b.tryCount < a.tryCount) ? -1 : 0);
            }
            this.tryNumMode=!this.tryNumMode;
        },
        bySaveDateSort(){
            if(this.saveDateMode){
                this.detailAchievs.sort((a,b) => (a.saveDate===undefined || b.saveDate===undefined) ? 0 : (a.saveDate > b.saveDate) ? 1 : (b.saveDate > a.saveDate) ? -1 : 0);
            }
            else{
                this.detailAchievs.sort((a,b) => (a.saveDate===undefined || b.saveDate===undefined) ? 0 : (a.saveDate < b.saveDate) ? 1 : (b.saveDate < a.saveDate) ? -1 : 0);
            }
            this.saveDateMode=!this.saveDateMode;
        }
    }
}
</script>
<style scoped>
th{
    text-align: left;
}
</style>
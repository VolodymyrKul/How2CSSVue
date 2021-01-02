<template>
    <fragment>
        <tr>
            <td colSpan="1">{{achievItem.trainingTestTitle}}</td>
            <td colSpan="1">{{achievItem.completedCount}}</td>
            <td colSpan="1">{{achievItem.correctCount}}</td>
            <td colSpan="1">{{achievItem.currentMark}}</td>
            <td colSpan="1">{{achievItem.tryCount}}</td>
            <td colSpan="1">{{achievItem.saveDate}}<span style="float: right; cursor: pointer;" v-on:click="changeOption"><i class="fas fa-2x" v-bind:class="{'fa-caret-up': isDetailed, 'fa-caret-down': !isDetailed}"></i></span></td>
        </tr>
        <tr v-if="isDetailed">
            <td colSpan="2">{{achievItem.achievTitle}}</td>
            <td colSpan="4">{{achievItem.achievNotes}}</td>
        </tr>
    </fragment>
</template>
<script>
import { Fragment } from 'vue-fragment'
export default {
    components: { Fragment },
    props: {
        achievItem: {
            type: Object
        }
    },
    data(){
        return{
            isDetailed: false
        }
    },
    methods: {
        changeOption(event){
            this.isDetailed=!this.isDetailed;
            console.log(this.isDetailed);
        }
    }
}
</script>
<style scoped>
td{
    text-align: left;
}
</style>
<template>
    <form class="w-50 mx-auto mt-5">
            <div class="form-group">
                <div>
                    <input type="email" class="form-control" placeholder="Enter achievement title" id="email" name="achievtitle" v-model="saveparam.title"/>
                </div>
            </div>
            <div class="form-group">
                <div>
                    <textarea class="form-control" style="height: 150px;" placeholder="Enter achievement notes" id="exampleFormControlTextarea1" name="achievnotes" v-model="saveparam.notes"/>
                </div>
            </div>
            <div class="form row">
                <div class="col">
                    <button v-on:click.prevent="handleClick" type="submit" class="btn btn-primary w-100">Save</button>
                </div>
                <div class="col">
                    <button type="submit" class="btn btn-danger w-100">Cancel</button>
                </div>
            </div>
            <div class="alert alert-danger mt-4" role="alert">
                Achievement did not save!
            </div>
            <div class="alert alert-success mt-4" role="alert">
                Achievement saved success!
            </div>
        </form>
</template>
<script>
export default {
    data(){
        return{
            ftitle: 'Task1 AchivTest',
            fnotes: 'Need to learn test',
            isSaved: false,
            saveparam: { title: 'Task1 AchivTest', 
                notes: 'Need to learn test', 
                levelTitle: '', 
                userEmail: '', 
                completedCount: 0, 
                correctCount: 0, 
                currentMark: 0 }
        }
    },
    mounted(){
        this.saveparam.levelTitle=this.$route.query.lvlparam;
        this.saveparam.completedCount=parseInt(this.$route.query.comcnt,10);
        this.saveparam.correctCount=parseInt(this.$route.query.corcnt,10);
        this.saveparam.currentMark=parseInt(this.$route.query.curmark,10);
        this.saveparam.userEmail=localStorage.getItem("currentuser");
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
        handleClick(event) {
            console.log(this.saveparam.levelTitle);
            console.log(this.saveparam.completedCount);
            console.log(this.saveparam.correctCount);
            console.log(this.saveparam.currentMark);
            console.log(this.saveparam.userEmail);
            console.log(this.saveparam.title);
            console.log(this.saveparam.notes);
            /*this.postData('https://localhost:5001/api/achievdatas/save', this.saveparam)
                .then(data => {
                this.isSaved = Boolean(data);
            });*/
        }
    }
}
</script>
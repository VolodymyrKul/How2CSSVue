<template>
    <tr>
        <td>{{achievItem.trainingTestTitle}}</td>
        <td>{{achievItem.completedCount}}</td>
        <td>{{achievItem.correctCount}}</td>
        <td>{{achievItem.currentMark}}</td>
        <td>{{achievItem.tryCount}}</td>
        <td>{{achievItem.saveDate}}</td>
    </tr>
</template>
<script>
export default {
    props: {
        achievItem: {
            type: Object
        }
    }
}
</script>
<style scoped>
td{
    text-align: left;
}
</style>
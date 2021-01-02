<template>
    <tr>
        <td>{{achievItem.trainingTestTitle}}</td>
        <td>{{achievItem.ownCompletedCount}}</td>
        <td>{{achievItem.ownCorrectCount}}</td>
        <td>{{achievItem.ownCurrentMark}}</td>
        <td>{{achievItem.antCompletedCount}}</td>
        <td>{{achievItem.antCorrectCount}}</td>
        <td>{{achievItem.antCurrentMark}}</td>
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
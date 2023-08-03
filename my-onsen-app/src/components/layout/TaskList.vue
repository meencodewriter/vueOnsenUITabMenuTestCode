<template>
    <v-ons-page>
    <div>
        <h1>TaskList</h1>
        <h2>TaskTask Task !!!!!</h2>
        <ol>
            <li v-for="i in 100" :key="i">오늘의 할일</li>
        </ol> 
    </div>
</v-ons-page>
</template>

<script>
    export default{
        name : 'TaskList'
    }
</script>
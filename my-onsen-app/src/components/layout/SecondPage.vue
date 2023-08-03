<template>
    <v-ons-page>
    <div>
        <h1>SecondPage</h1>

        <ol>
            <li v-for="i in 700" :key="i">내일의 할일</li>
        </ol> 
    </div>
    </v-ons-page>
</template>

<script>
    export default{
        name : 'SecondPage'
    }
</script>
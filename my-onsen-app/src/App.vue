<template lang="html">
  <v-ons-page>
    <!-- <AppHeader /> -->
    <v-ons-tabbar swipeable position="top" :index="0" :tabs="tabs">
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import TaskList from './components/layout/TaskList.vue';
import SecondPage from './components/layout/SecondPage';
// import AppHeader from './components/layout/AppHeader.vue';

export default {
    template: '#main',
    data: function () {
        return {
            tabs: [
                { label: 'Task', page: TaskList },
                { label: 'Second', page: SecondPage }
            ]
        };
    },
    components: { 
      // AppHeader
    }
};
</script>
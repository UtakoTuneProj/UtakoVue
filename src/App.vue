<template>
  <v-app>
    <UtHeader />
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import UtHeader from '@/components/organisms/UtHeader.vue';
import HelloWorld from '@/components/organisms/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    UtHeader,
    HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>

<template>
  <v-icon>{{ this.icon }}</v-icon>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TemplateComponent extends Vue {
  public icon: string = 'mdi-account';
}
</script>

<style>

</style>
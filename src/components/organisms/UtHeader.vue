<template>
  <v-app-bar
    color="#3A3D3F"
    height="56px"
    dark
    flat
  >
    <v-img
      src="/img/long_logo.svg"
      contain
      max-height="40px"
      max-width="150px"
    />
    <v-tabs fixed-tabls grow>
      <v-tab @click="onClickTop">
        TOP
      </v-tab>
      <v-tab @click="onClickSearch">
        SEARCH
      </v-tab>
      <v-tab @click="onClickPlayer">
        PLAYER
      </v-tab>
      <v-tab disabled>
        VOCALOSPHERE
      </v-tab>
      <v-tab @click="onClickAccount">
        ACCOUNT
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script lang="ts">
import 'reflect-metadata';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class UtHeader extends Vue {
  public onClickTop() {
    return;
  }

  public onClickSearch() {
    return;
  }

  public onClickPlayer() {
    return;
  }

  public onClickAccount() {
    return;
  }
}
// 3A3D3F: UtakoDarkGray
// 61A0D8: UtakoBlue
// F2863D: UtakoOrange
// C1C4C6: UtakoLightGray
</script>

<style>
</style>
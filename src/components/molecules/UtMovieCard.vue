<template>
  <v-card @click="onClick">
    <div class="card">
      <v-img :src=thumbnailSrc />
      <div class="card-body text-secondary">
        <v-simple-table dense>
          <tbody>
            <tr>
              <th><v-icon>mdi-music-circle-outline</v-icon></th>
              <td>{{ title }}</td>
            </tr><tr>
              <th><v-icon>mdi-account-outline</v-icon></th>
              <td>{{ userNickname }}</td>
            </tr><tr>
              <th><v-icon>mdi-clock-outline</v-icon></th>
              <td>{{ firstRetrieve }}</td>
            </tr><tr>
              <th><v-icon>mdi-chart-timeline-variant</v-icon></th>
              <td>{{ movieScore }}</td>
            </tr><tr>
              <th><v-icon>mdi-eye-outline</v-icon></th>
              <td>{{ viewCounter }}</td>
            </tr><tr>
              <th><v-icon>mdi-comment-outline</v-icon></th>
              <td>{{ commentCounter }}</td>
            </tr><tr>
              <th><v-icon>mdi-star-outline</v-icon></th>
              <td>{{ mylistCounter }}</td>
            </tr><tr>
              <th><v-icon>mdi-lightning-bolt-outline</v-icon></th>
              <td>
                <span v-if="isAnalyzed" class="text-success">解析済</span>
                <span v-else class="text-secondary">未解析</span>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </div>
  </v-card>
</template>

<script>
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
  data: () => {
    return {
    };
  },
  props: {
    id: String,
    title: String,
    thumbnail: String,
    firstRetrieve: moment,
    userNickname: String,
    movieScore: Number,
    viewCounter: Number,
    commentCounter: Number,
    mylistCounter: Number,
    songIndexes: Array,
  },
  computed: {
    thumbnailSrc() {
      return this.thumbnail ? this.thumbnail : '/img/thumbnail_not_found.png';
    },
    isAnalyzed(){
      return this.songIndexes.length > 0;
    },
    linkTarget(){
      return '/movie/' + this.id;
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
});
</script>

<style>

</style>
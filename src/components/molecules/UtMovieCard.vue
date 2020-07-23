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
              <td>{{ user_nickname }}</td>
            </tr><tr>
              <th><v-icon>mdi-clock-outline</v-icon></th>
              <td>{{ first_retrieve }}</td>
            </tr><tr>
              <th><v-icon>mdi-chart-timeline-variant</v-icon></th>
              <td>{{ movie_score }}</td>
            </tr><tr>
              <th><v-icon>mdi-eye-outline</v-icon></th>
              <td>{{ view_counter }}</td>
            </tr><tr>
              <th><v-icon>mdi-comment-outline</v-icon></th>
              <td>{{ comment_num }}</td>
            </tr><tr>
              <th><v-icon>mdi-star-outline</v-icon></th>
              <td>{{ mylist_counter }}</td>
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
      id: 'sm334',
      title: 'title',
      first_retrieve: moment('2020-07-07T03:34:00').locale('ja'),
      user_nickname: 'test',
      movie_score: '33.4',
      view_counter: '111',
      comment_num: '111',
      mylist_counter: '111',
      thumbnail: undefined,
      songindex_set: [
        '444',
      ],
    };
  },
  computed: {
    thumbnailSrc() {
      return this.thumbnail ? this.thumbnail : '/img/thumbnail_not_found.png';
    },
    isAnalyzed(){
      return this.songindex_set.length > 0;
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
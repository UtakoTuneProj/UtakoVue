<template>
  <v-card @click="onClick">
    <div class="card">
      <v-img :src=thumbnailSrc />
      <div class="card-body text-secondary">
        <v-simple-table dense>
          <tbody>
            <tr>
              <th><v-icon>mdi-music-circle-outline</v-icon></th>
              <td>{{ movie.title }}</td>
            </tr><tr>
              <th><v-icon>mdi-account-outline</v-icon></th>
              <td>{{ movie.userNickname }}</td>
            </tr><tr>
              <th><v-icon>mdi-clock-outline</v-icon></th>
              <td>{{ movie.firstRetrieve.format('llll') }}</td>
            </tr><tr>
              <th><v-icon>mdi-chart-timeline-variant</v-icon></th>
              <td>{{ movie.movieScore }}</td>
            </tr><tr>
              <th><v-icon>mdi-eye-outline</v-icon></th>
              <td>{{ movie.viewCounter }}</td>
            </tr><tr>
              <th><v-icon>mdi-comment-outline</v-icon></th>
              <td>{{ movie.commentCounter }}</td>
            </tr><tr>
              <th><v-icon>mdi-star-outline</v-icon></th>
              <td>{{ movie.mylistCounter }}</td>
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

<script lang="ts">
import 'reflect-metadata';
import moment from 'moment';
import { Movie } from '~/@types/movie';
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class UtMovieCard extends Vue {
  @Prop() public movie!: Movie;

  get thumbnailSrc() {
    return this.movie.thumbnail || '/img/thumbnail_not_found.png';
  }

  get isAnalyzed() {
    return this.movie.songIndexes.length > 0;
  }

  get linkTarget() {
    return '/movie/' + this.movie.id;
  }

  @Emit('click')
  public onClick() { return this.movie; }
}
</script>

<style>

</style>
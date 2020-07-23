import UtMovieCard from './UtMovieCard.vue';
import { Movie } from '~/@types/movie';
import { SongIndexV1 } from '~/@types/song_index';
import moment from 'moment';
import { withKnobs, text, number, date, boolean } from '@storybook/addon-knobs';

export default {
    title: 'molecules/UtMovieCard',
    component: UtMovieCard,
    decorators: [withKnobs],
};

function momentizedDate(name: string, defaultValue: moment.Moment) {
    const stringTimestamp = date(name, defaultValue.toDate());
    return moment(stringTimestamp);
}

function movie() {
    const id = text('ID', 'sm334');
    const title = text('タイトル', 'テストのタイトル');
    const thumbnail = text('サムネイルURL', '');
    const firstRetrieve = momentizedDate('投稿日時', moment('2020-07-07T19:00:00'));
    const userNickname = text('投稿者', 'Utako Tune Project');
    const movieScore = number('スコア', 33.4);
    const viewCounter = number('再生数', 334);
    const mylistCounter = number('マイリスト数', 334);
    const commentCounter = number('コメント数', 334);
    const isAnalyzed = boolean('解析インデックス', true);
    const songIndexes: SongIndexV1[] = isAnalyzed ? [
        { version: 1, index: [1, 1, 1, 1, 1, 1, 1, 1] },
    ] : [];

    const movieInstance: Movie = {
        id,
        title,
        thumbnail,
        firstRetrieve,
        userNickname,
        movieScore,
        viewCounter,
        mylistCounter,
        commentCounter,
        songIndexes,
    };
    return movieInstance;
}

export const basic = () => ({
    components: { UtMovieCard },
    props: {
        movie: {
            default: movie(),
        },
    },
    template: `
        <UtMovieCard
            :movie="movie"
        />
    `,
});

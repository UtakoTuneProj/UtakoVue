import UtMovieCard from './UtMovieCard.vue';
import moment from 'moment';
import { withKnobs, text, number, date, array } from '@storybook/addon-knobs';

export default {
    title: 'UtMovieCard',
    component: UtMovieCard,
    decorators: [withKnobs],
};

function momentizedDate(name: string, defaultValue: moment.Moment) {
    const stringTimestamp = date(name, defaultValue.toDate());
    return moment(stringTimestamp);
}

export const basic = () => ({
    components: { UtMovieCard },
    props: {
        id: {
            default: text('ID', 'sm334'),
        },
        title: {
            default: text('タイトル', 'テストのタイトル'),
        },
        thumbnail: {
            default: text('サムネイルURL', ''),
        },
        firstRetrieve: {
            default: momentizedDate('投稿日時', moment('2020-07-07T19:00:00')),
        },
        userNickname: {
            default: text('投稿者', 'Utako Tune Project'),
        },
        movieScore: {
            default: number('スコア', 33.4),
        },
        viewCounter: {
            default: number('再生数', 334),
        },
        mylistCounter: {
            default: number('マイリスト数', 334),
        },
        commentCounter: {
            default: number('コメント数', 334),
        },
        songIndexes: {
            default: array('解析インデックス', ['1']),
        },
    },
    template: `
        <UtMovieCard
            :id="id"
            :title="title"
            :thumbnail="thumbnail"
            :firstRetrieve="firstRetrieve"
            :userNickname="userNickname"
            :movieScore="movieScore"
            :viewCounter="viewCounter"
            :mylistCounter="mylistCounter"
            :commentCounter="commentCounter"
            :songIndexes="songIndexes"
        />
    `,
});

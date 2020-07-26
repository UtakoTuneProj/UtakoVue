import UtHeader from './UtHeader.vue';
import { withKnobs } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';

export default {
    title: 'organisms/UtHeader',
    component: UtHeader,
    decorators: [withKnobs],
};

export const basic = () => ({
    components: { UtHeader },
    props: {
        actions: {
            default: actions(
                'click',
            ),
        },
    },
    template: `
        <UtHeader
            v-on="actions"
        />
    `,
});

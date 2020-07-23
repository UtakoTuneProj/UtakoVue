import UtHeader from './UtHeader.vue';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'organisms/UtHeader',
    component: UtHeader,
    decorators: [withKnobs],
};

export const basic = () => ({
    components: { UtHeader },
    template: `
        <UtHeader />
    `,
});
